// API endpoint constants
export const API_ENDPOINTS = {
    // Auth endpoints
    AUTH: {
        LOGIN: '/api/auth/login',
        SIGNUP: '/api/auth/signup',
        LOGOUT: '/api/auth/logout',
        GOOGLE: '/api/auth/google',
        ME: '/api/auth/me',
    },

    // Budget endpoints
    BUDGET: {
        GET: '/api/budget',
        UPDATE: '/api/budget',
        CREATE: '/api/budget',
    },

    // Expense endpoints
    EXPENSES: {
        LIST: '/api/expenses',
        CREATE: '/api/expenses',
        UPDATE: (id) => `/api/expenses/${id}`,
        DELETE: (id) => `/api/expenses/${id}`,
    },

    // User endpoints
    USER: {
        PROFILE: '/api/user/profile',
        UPDATE: '/api/user/profile',
    },
};

export default API_ENDPOINTS;
