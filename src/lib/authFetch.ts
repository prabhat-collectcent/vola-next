// lib/authFetch.ts
import { signOut } from 'next-auth/react';

export async function authFetch(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, {
    ...init,
    credentials: 'include',
  });

  if (res.status === 401) {
    await signOut({
      redirect: true,
      callbackUrl: '/auth/login',
    });

    // stop further execution
    throw new Error('Unauthorized');
  }

  return res;
}
