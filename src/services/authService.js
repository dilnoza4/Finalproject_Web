const API_URL = 'http://localhost:8080/api';

export const authService = {
    login: async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            localStorage.setItem('token', data.token);
            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    register: async (name, email, password) => {
        try {
            // First register the user
            const registerResponse = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });

            const registerData = await registerResponse.json();

            if (!registerResponse.ok) {
                throw new Error(registerData.message || 'Registration failed');
            }

            // Then automatically log them in
            const loginResponse = await authService.login(email, password);
            return loginResponse;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
};