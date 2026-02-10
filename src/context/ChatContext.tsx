'use client';

import { useParams } from 'next/navigation';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

type Thread = {
  thread_id: number;
  title: string;
};

type ChatError =
  | { type: 'network'; message: string }
  | { type: 'backend'; message: string };

type ChatContextType = {
  chatId: string | null;
  setChatId: (id: string | null) => void;

  messages: Message[];
  addMessage: (role: Message['role'], text: string, id?: string) => void;
  clearMessages: () => void;

  createNewChat: () => Promise<string>;

  threads: Thread[];
  threadsLoading: boolean;
  loadThreads: () => Promise<void>;
  loadMoreThreads: () => Promise<void>;
  addThread: (thread: Thread) => void;

  threadsError: boolean;

  historyLoading: boolean;
  setHistoryLoading: (v: boolean) => void;

  hasMoreThreads: boolean;
  loadingMoreThreads: boolean;

  // ✅ CRITICAL
  isBootstrappingThread: boolean;
  setIsBootstrappingThread: (v: boolean) => void;
  updateThreadTitle: (threadId: number, title: string) => void;
};

const ChatContext = createContext<ChatContextType | null>(null);
const LIMIT = 20;

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chatId, setChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const [threads, setThreads] = useState<Thread[]>([]);
  const [threadsLoading, setThreadsLoading] = useState(true);

  const [threadsError, setThreadsError] = useState(false);

  const [nextId, setNextId] = useState<number | null>(null);
  const [hasMoreThreads, setHasMoreThreads] = useState(true);
  const [loadingMoreThreads, setLoadingMoreThreads] = useState(false);

  const lastRequestedNextIdRef = useRef<number | null>(null);

  const [historyLoading, setHistoryLoading] = useState(false);

  const [isBootstrappingThread, setIsBootstrappingThread] = useState(false);

  const params = useParams<{ chatId?: string }>();

  const emitChatError = useCallback((err: ChatError) => {
    window.dispatchEvent(new CustomEvent('chat:error', { detail: err }));
  }, []);

  /* ---------------- Messages ---------------- */

  const addMessage = useCallback(
    (role: Message['role'], text: string, id?: string) => {
      setMessages((prev) => {
        if (id) {
          const exists = prev.find((m) => m.id === id);
          if (exists) {
            return prev.map((m) => (m.id === id ? { ...m, text } : m));
          }
          return [...prev, { id, role, text }];
        }
        return [...prev, { id: crypto.randomUUID(), role, text }];
      });
    },
    []
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    // setChatId(null);
  }, []);

  const updateThreadTitle = useCallback((threadId: number, title: string) => {
    setThreads((prev) =>
      prev.map((t) => (t.thread_id === threadId ? { ...t, title } : t))
    );
  }, []);

  /* ---------------- Threads ---------------- */

  const loadThreads = useCallback(async () => {
    setThreadsLoading(true);
    setThreadsError(false);

    try {
      const res = await fetch(`/api/chat/threads?limit=${LIMIT}`);

      if (!res.ok) throw new Error('Threads failed');

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      setThreads(data.messages || []);
      setNextId(data.next_id ?? null);
      setHasMoreThreads(Boolean(data.has_more));
      lastRequestedNextIdRef.current = null;
    } catch {
      setThreads([]);
      setThreadsError(true);
    } finally {
      setThreadsLoading(false);
    }
  }, []);

  const loadMoreThreads = useCallback(async () => {
    if (!hasMoreThreads || loadingMoreThreads || nextId === null) return;
    if (lastRequestedNextIdRef.current === nextId) return;

    lastRequestedNextIdRef.current = nextId;
    setLoadingMoreThreads(true);

    const res = await fetch(
      `/api/chat/threads?limit=${LIMIT}&next_id=${nextId}`
    );
    const data = await res.json();

    setThreads((prev) => {
      const existing = new Set(prev.map((t) => t.thread_id));
      const unique = (data.messages || []).filter(
        (t: Thread) => !existing.has(t.thread_id)
      );
      return [...prev, ...unique];
    });

    setNextId(data.next_id ?? null);
    setHasMoreThreads(Boolean(data.has_more));
    setLoadingMoreThreads(false);
  }, [hasMoreThreads, loadingMoreThreads, nextId]);

  const addThread = useCallback((thread: Thread) => {
    setThreads((prev) => [thread, ...prev]);
  }, []);

  const createNewChat = useCallback(async () => {
    setIsBootstrappingThread(true);

    const res = await fetch('/api/chat/thread', { method: 'POST' });
    const data = await res.json();
    const id = data.thread_id.toString();

    setChatId(id);
    addThread({
      thread_id: Number(id),
      title: 'New chat',
    });

    (window as any).__chatId = id;
    return id;
  }, [addThread]);

  useEffect(() => {
    loadThreads();
  }, [loadThreads]);

  useEffect(() => {
    if (params?.chatId) {
      setChatId(params.chatId);
    }
  }, [params?.chatId]);

  return (
    <ChatContext.Provider
      value={{
        chatId,
        setChatId,
        messages,
        addMessage,
        clearMessages,
        createNewChat,
        threads,
        threadsLoading,
        loadThreads,
        loadMoreThreads,
        threadsError,
        addThread,
        historyLoading,
        setHistoryLoading,
        hasMoreThreads,
        loadingMoreThreads,
        isBootstrappingThread,
        setIsBootstrappingThread,
        updateThreadTitle,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatContext must be used inside ChatProvider');
  return ctx;
}
