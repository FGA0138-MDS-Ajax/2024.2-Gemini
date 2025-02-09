const API_URL = "http://localhost:8000";

// Função auxiliar para requisições HTTP
const request = async (endpoint, method, body = null, authRequired = false) => {
    const headers = { "Content-Type": "application/json" };

    if (authRequired) {
        const token = localStorage.getItem("access_token");
        if (!token) return { success: false, message: "Usuário não autenticado" };
        headers["Authorization"] = `Bearer ${token}`;
    }

    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    try {
        const response = await fetch(`${API_URL}${endpoint}`, options);
        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.erro || "Erro desconhecido" };
        }

        return { success: true, data };
    } catch {
        return { success: false, message: "Erro ao conectar ao servidor" };
    }
};

// 🔹 Login do usuário
export const loginUser = async (email, password) => {
    const result = await request("/api/users/login/", "POST", { email, password });
    if (result.success) {
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("refresh_token", result.data.refresh_token);
    }
    return result;
};

// 🔹 Registro de usuário
export const registerUser = async (nome, email, password) => {
    return request("/api/users/register/", "POST", { nome, email, password });
};

// 🔹 Logout do usuário
export const logoutUser = async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
        console.warn("Nenhum token encontrado, usuário já está deslogado.");
        return;
    }

    try {
        await fetch("http://localhost:8000/api/users/logout/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
    } finally {
        // 🔹 Remove os tokens ANTES de esperar a resposta do backend
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        // 🔹 Dispara um evento para atualizar todos os componentes que escutam mudanças no localStorage
        window.dispatchEvent(new Event("storage"));

        // 🔹 Redireciona imediatamente para garantir que a UI reflita a mudança
        window.location.replace("/home");
    }
};
