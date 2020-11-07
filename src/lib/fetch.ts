export const fetchJson = (method: 'GET' | 'POST', url: string, data?: any) =>
  fetch(url, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const postJson = (url: string, data?: any) =>
  fetchJson('POST', url, data);
