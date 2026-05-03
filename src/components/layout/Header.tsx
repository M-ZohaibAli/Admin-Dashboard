"use client";

import { useSidebar } from "./SidebarContext";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-10 h-16 bg-[#0d0d10]/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 md:px-6 gap-4">
      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleSidebar}
        className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 border border-white/8 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all shrink-0"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Page title area */}
      <div className="flex-1 min-w-0">
        <h1 className="text-base font-semibold text-white truncate">Dashboard</h1>
        <p className="text-xs text-zinc-500 hidden sm:block">Welcome back, Alice</p>
      </div>

      {/* Search */}
      <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-2 w-56 focus-within:border-violet-500/50 transition-colors">
        <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-zinc-300 placeholder:text-zinc-600 outline-none w-full"
        />
      </div>

      {/* Notification bell */}
      <button
        aria-label="Notifications"
        className="relative flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 border border-white/8 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all shrink-0"
      >
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {/* Notification dot */}
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-[#0d0d10]" />
      </button>

      {/* Avatar */}
      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold cursor-pointer ring-2 ring-transparent hover:ring-violet-500/40 transition-all shrink-0">
        AH
      </div>
    </header>
  );
}
