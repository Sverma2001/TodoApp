import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  password: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = async (user: string, pass: string) => {
    await AsyncStorage.setItem('userCredentials', JSON.stringify({ username, password }));
    setIsAuthenticated(true);
    setUsername(user);
    setPassword(pass);
  };

  const updateProfile = async (newUsername: React.SetStateAction<string | null>, newPassword: React.SetStateAction<string | null>) => {
    setUsername(newUsername);
    setPassword(newPassword);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userCredentials');
    setIsAuthenticated(false);
    setUsername(null);
    setPassword(null);
  };

  const loadUser = async () => {
    const storedCredentials = await AsyncStorage.getItem('userCredentials');
    if (storedCredentials) {
      const { username: storedUsername, password: storedPassword } = JSON.parse(storedCredentials);
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setPassword(storedPassword);
    } else {
      setIsAuthenticated(false);
      setUsername(null);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, password, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
