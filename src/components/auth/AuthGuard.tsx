"use client";

import { useState, useEffect, ReactNode } from "react";
import { useToast } from "@/components/ui/Toast";

export function AuthGuard({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("admin123");
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const auth = sessionStorage.getItem("admin_auth");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (password === "admin123") {
        sessionStorage.setItem("admin_auth", "true");
        setIsAuthenticated(true);
        toast("Welcome back, Alice!", "success");
      } else {
        toast("Invalid credentials", "error");
      }
    }, 800);
  };

  if (isAuthenticated === null) return null; // Hydration flash guard

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#09090c] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white/[0.03] border border-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/20 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-white tracking-tight mb-1">Sign in to Nexus</h1>
            <p className="text-sm text-zinc-500 mb-8">Demo access: use password <span className="text-violet-400 font-mono">admin123</span></p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="alice@nexus.io"
                  disabled
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-500 outline-none cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full h-11 mt-6 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center"
              >
                {isLoading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
