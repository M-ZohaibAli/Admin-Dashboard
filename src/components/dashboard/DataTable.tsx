"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatDate, formatNumber } from "@/lib/utils";
import type { User, UserStatus } from "@/lib/mock-data";
import { useToast } from "@/components/ui/Toast";

interface DataTableProps {
  users: User[];
}

export function DataTable({ users: initialUsers }: DataTableProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();
  const itemsPerPage = 5;

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = users.slice(startIdx, startIdx + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      const link = document.createElement("a");
      link.href = `data:text/csv;charset=utf-8,ID,Name,Role,Status%0A${users.map(u => `${u.id},${u.name},${u.role},${u.status}`).join('%0A')}`;
      link.download = "users_export.csv";
      link.click();
      toast("Export complete! Download started.", "success");
    }, 1500);
  };

  const toggleStatus = (userId: string, currentStatus: UserStatus, userName: string) => {
    const nextStatus: Record<UserStatus, UserStatus> = {
      active: "inactive",
      inactive: "pending",
      pending: "active"
    };
    const newStatus = nextStatus[currentStatus];
    
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: newStatus } : u));
    toast(`Status for ${userName} updated to ${newStatus}`, "info");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <button
          onClick={handleExport}
          disabled={isExporting}
          className="flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-lg px-3 py-1.5 transition-all min-w-[100px]"
        >
          {isExporting ? (
            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
          {isExporting ? "Exporting..." : "Export CSV"}
        </button>
      </CardHeader>

      {/* Table wrapper with horizontal scroll */}
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-white/5">
              {["User", "Role", "Status", "Requests", "Joined"].map((col) => (
                <th
                  key={col}
                  className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wider pb-3 px-2 first:pl-0 last:pr-0"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="group hover:bg-white/[0.02] transition-colors"
              >
                {/* User cell */}
                <td className="py-3.5 px-2 first:pl-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {user.avatarUrl}
                    </div>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs text-zinc-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="py-3.5 px-2">
                  <Badge variant={user.role.toLowerCase() as "admin" | "developer" | "viewer" | "editor"}>
                    {user.role}
                  </Badge>
                </td>

                {/* Status */}
                <td className="py-3.5 px-2">
                  <button 
                    onClick={() => toggleStatus(user.id, user.status, user.name)}
                    className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
                    title="Click to toggle status"
                  >
                    <Badge variant={user.status}>{user.status}</Badge>
                  </button>
                </td>

                {/* Requests */}
                <td className="py-3.5 px-2">
                  <span className="text-zinc-300 font-mono text-xs">
                    {formatNumber(user.requests)}
                  </span>
                </td>

                {/* Joined */}
                <td className="py-3.5 px-2 last:pr-0">
                  <span className="text-zinc-500 text-xs">{formatDate(user.joinedAt)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <p className="text-xs text-zinc-600">
          Showing <span className="text-zinc-400">{startIdx + 1}</span> to <span className="text-zinc-400">{Math.min(startIdx + itemsPerPage, users.length)}</span> of <span className="text-zinc-400">{users.length}</span> users
        </p>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`h-7 w-7 rounded-lg text-xs font-medium transition-all ${
                page === currentPage
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "text-zinc-500 hover:text-white hover:bg-white/5"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
