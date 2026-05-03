import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MOCK_API_KEYS } from "@/lib/mock-data";
import { NewKeyButton } from "@/components/dashboard/NewKeyButton";

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">API Keys</h2>
          <p className="text-sm text-zinc-500 mt-1">
            Manage your API keys for programmatic access.
          </p>
        </div>
        <NewKeyButton />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {MOCK_API_KEYS.map((key) => (
              <div
                key={key.id}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-sm font-medium text-white">{key.name}</p>
                    <Badge variant={key.status}>{key.status}</Badge>
                  </div>
                  <p className="font-mono text-xs text-zinc-500 bg-black/20 px-2 py-1 rounded inline-block">
                    {key.key}
                  </p>
                </div>
                
                <div className="flex items-center gap-6 text-xs text-zinc-500 sm:text-right">
                  <div className="flex flex-col">
                    <span className="text-zinc-600 mb-0.5">Owner</span>
                    <span className="text-zinc-400">{key.owner}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-600 mb-0.5">Last Used</span>
                    <span className="text-zinc-400">{key.lastUsed}</span>
                  </div>
                  <button className="h-8 w-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
