export const isAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    return !!token; // Retorna `true` se houver um token válido
};

export const logoutUser = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login"; // Redireciona após logout
};
