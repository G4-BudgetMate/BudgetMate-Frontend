import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { api } from '../api/api';

/**
 * Custom hook for authentication
 * @returns {object} Auth state and methods
 */
export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    // Load user data on mount
    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
            const response = await api.post('/api/auth/login', credentials);
            const { token, user: userData } = response.data;

            // Store token
            global.authToken = token;

            // Save user data
            await AsyncStorage.setItem('userData', JSON.stringify(userData));

            setUser(userData);
            setIsAuthenticated(true);

            return { success: true, user: userData };
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                error: error?.response?.data?.message || 'Login failed',
            };
        }
    };

    const signup = async (userData) => {
        try {
            const response = await api.post('/api/auth/signup', userData);
            const { token, user: newUser } = response.data;

            // Store token
            global.authToken = token;

            // Save user data
            await AsyncStorage.setItem('userData', JSON.stringify(newUser));

            setUser(newUser);
            setIsAuthenticated(true);

            return { success: true, user: newUser };
        } catch (error) {
            console.error('Signup error:', error);
            return {
                success: false,
                error: error?.response?.data?.message || 'Signup failed',
            };
        }
    };

    const logout = async () => {
        try {
            // Clear local storage
            await AsyncStorage.multiRemove(['userData', 'userBudget']);

            // Clear token
            global.authToken = null;

            setUser(null);
            setIsAuthenticated(false);

            // Navigate to login
            router.replace('/auth/Login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const updateUser = async (updates) => {
        try {
            const updatedUser = { ...user, ...updates };
            await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
            setUser(updatedUser);
            return { success: true };
        } catch (error) {
            console.error('Update user error:', error);
            return { success: false, error: 'Failed to update user' };
        }
    };

    return {
        user,
        loading,
        isAuthenticated,
        login,
        signup,
        logout,
        updateUser,
    };
};

export default useAuth;
