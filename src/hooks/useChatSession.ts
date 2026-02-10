import { useState, useCallback } from 'react';

export default function useChatSession() {
  const [chatId, setChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  const createNewChat = async () => {
    const res = await fetch('/api/chat/thread', {
      method: 'POST',
    });

    if (!res.ok) {
      throw new Error('Failed to create new chat');
    }

    const data = await res.json();
    const id = data.thread_id.toString();

    setChatId(id);

    // expose globally for ChatInputBar (as per your design)
    (window as any).__chatId = id;

    // ❌ DO NOT navigate here
    return id;
  };

  const addMessage = useCallback(
    (role: 'user' | 'assistant', text: string, id?: string) => {
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

  return {
    chatId,
    createNewChat,
    messages,
    addMessage,
  };
}
