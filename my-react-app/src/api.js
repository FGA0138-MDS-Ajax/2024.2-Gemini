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

// 🔹 Enviar o token de recuperação para o e-mail
export const requestPasswordReset = async (email) => {
    try {
        const response = await fetch(`${API_URL}/api/users/forgot-password/`, { // 🔹 Rota corrigida
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Erro ao enviar código de recuperação.");
        }

        return { success: true, message: "Código enviado para o e-mail." };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// 🔹 Redefinir a senha com o token
export const resetPassword = async (email, token, novaSenha) => {
    if (!novaSenha) {
        return { success: false, message: "A senha não pode estar vazia." };
    }

    try {
        const response = await fetch("http://localhost:8000/api/users/reset-password/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, token, new_password: novaSenha }) // 🔹 Garante que `new_password` está sendo enviado corretamente
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Erro ao redefinir a senha.");
        }

        return { success: true, message: "Senha alterada com sucesso!" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};


// 🔹 Função para buscar produtos do backend
export const fetchProdutos = async () => {
    try {
        const response = await fetch(`${API_URL}/api/produto/produtos`);
        if (!response.ok) {
            throw new Error("Erro ao buscar produtos");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return [];
    }
};
