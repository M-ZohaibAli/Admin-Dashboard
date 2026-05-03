import { DataTable } from "@/components/dashboard/DataTable";
import { MOCK_USERS } from "@/lib/mock-data";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">User Management</h2>
        <p className="text-sm text-zinc-500 mt-1">
          View and manage all registered users on the platform.
        </p>
      </div>
      <DataTable users={MOCK_USERS} />
    </div>
  );
}
