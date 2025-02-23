import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, register, verify } from "../api/auth";

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await verify();
        setUser(data);  
        setIsAuthenticated(true);
        setLoading(false);
      } catch (e) {
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkAuth();
  }, [user, isAuthenticated, loading]);

  const login_context = async (handle: string, password: string) => {
    try {
      await login(handle, password);
      const { data } = await verify();
      setUser(data);
      setIsAuthenticated(true);
    } catch (e) {
      console.error("Login failed:", e);
      throw e;
    }
  };

  const register_context = async (handle: string, password: string, firstName: string, lastName: string) => {
    try {
      await register(handle, password, firstName, lastName);
      const { data } = await verify();
      setUser(data);
      setIsAuthenticated(true);
    } catch (e) {
      console.error("Registration failed:", e);
      throw e;
    }
  };

  const logout_context = async () => {
    await logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login_context, register_context, logout_context }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
