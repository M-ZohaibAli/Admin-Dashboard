import { StatCard } from "@/components/dashboard/StatCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MOCK_STATS, MOCK_USERS, MOCK_API_KEYS } from "@/lib/mock-data";
import { NewKeyButton } from "@/components/dashboard/NewKeyButton";

// Server Component — data fetched at request time (no client-side waterfall)
async function getStats() {
  // In production: fetch from external API. Here we use centralized mock data.
  return MOCK_STATS;
}

async function getUsers() {
  return MOCK_USERS;
}

async function getApiKeys() {
  return MOCK_API_KEYS;
}

export default async function DashboardPage() {
  const [stats, users, apiKeys] = await Promise.all([
    getStats(),
    getUsers(),
    getApiKeys(),
  ]);

  return (
    <div className="space-y-8">
      {/* ── Page heading ─────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Overview</h2>
        <p className="text-sm text-zinc-500 mt-1">
          Real-time snapshot of your platform. Last updated just now.
        </p>
      </div>

      {/* ── Stat cards ───────────────────────────────── */}
      <section aria-label="Key metrics" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      {/* ── Two-column section ───────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users table — takes 2/3 width */}
        <div className="lg:col-span-2">
          <DataTable users={users} />
        </div>

        {/* API Keys sidebar panel — takes 1/3 width */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <NewKeyButton />
            </CardHeader>

            <div className="space-y-3">
              {apiKeys.map((key) => (
                <div
                  key={key.id}
                  className="group flex flex-col gap-2 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-white truncate">{key.name}</p>
                    <Badge variant={key.status}>{key.status}</Badge>
                  </div>
                  <p className="font-mono text-xs text-zinc-600">{key.key}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-600">
                    <span>{key.owner}</span>
                    <span>{key.lastUsed}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* ── Activity feed ────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <span className="text-xs text-zinc-600">Last 24 hours</span>
        </CardHeader>
        <div className="space-y-4">
          {[
            { label: "New user registered", time: "2 min ago", color: "bg-emerald-400", detail: "alice@nexus.io signed up" },
            { label: "API key rotated", time: "18 min ago", color: "bg-violet-400", detail: "Production API key was rotated by Ben Carter" },
            { label: "Rate limit hit", time: "1 hr ago", color: "bg-amber-400", detail: "/api/users hit 429 (10k/min threshold)" },
            { label: "User deactivated", time: "3 hr ago", color: "bg-zinc-500", detail: "Eva Müller was marked inactive" },
            { label: "New API key created", time: "5 hr ago", color: "bg-sky-400", detail: "Mobile SDK key issued to Clara Diaz" },
          ].map((event, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="relative mt-1.5 flex items-center justify-center shrink-0">
                <span className={`h-2.5 w-2.5 rounded-full ${event.color}`} />
                {i < 4 && <span className="absolute top-3 left-1/2 -translate-x-1/2 h-full w-px bg-white/5" />}
              </div>
              <div className="flex-1 min-w-0 pb-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-white">{event.label}</p>
                  <span className="text-xs text-zinc-600 shrink-0">{event.time}</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">{event.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
