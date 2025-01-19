const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (email, nome, password) => {
  const response = await fetch(`${API_URL}/users/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, nome, password }),
  });

  if (!response.ok) {
    throw new Error('Erro ao registrar usuário');
  }

  return await response.json();
};
