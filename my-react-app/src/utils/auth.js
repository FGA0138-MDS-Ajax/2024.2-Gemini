export const isAuthenticated = () => {
    return Boolean(localStorage.getItem("access_token")); // Retorna true se houver token válido
};



export const logoutUser = () => {
    localStorage.removeItem("token"); // Remove o token de autenticação
    sessionStorage.removeItem("token"); // Remove caso esteja salvo na sessão
};
