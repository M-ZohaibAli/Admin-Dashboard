import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MOCK_CHART_DATA } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Analytics</h2>
        <p className="text-sm text-zinc-500 mt-1">
          Deep dive into platform usage and metrics.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Requests over 7 days</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 mt-4 w-full px-2">
            {/* Y-axis grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-zinc-600 pb-8 pointer-events-none">
              <div className="flex w-full items-center justify-between border-t border-white/5 pt-1"><span>100k</span></div>
              <div className="flex w-full items-center justify-between border-t border-white/5 pt-1"><span>75k</span></div>
              <div className="flex w-full items-center justify-between border-t border-white/5 pt-1"><span>50k</span></div>
              <div className="flex w-full items-center justify-between border-t border-white/5 pt-1"><span>25k</span></div>
              <div className="flex w-full items-center justify-between border-t border-white/5 pt-1 mb-1"><span>0</span></div>
            </div>

            {/* SVG Line Chart */}
            <div className="absolute inset-0 pb-8 px-6 flex items-end">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 200">
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Generate polyline points: (x, y) where x is evenly distributed 0-600, and y is inverted 0-200 */}
                {/* 32k = 32% of 200 = 64. Inverted y = 200 - 64 = 136 */}
                {/* X coordinates: 0, 100, 200, 300, 400, 500, 600 */}
                <path 
                  d={`M0,${200 - (32000/100000)*200} L100,${200 - (45500/100000)*200} L200,${200 - (80200/100000)*200} L300,${200 - (65000/100000)*200} L400,${200 - (90100/100000)*200} L500,${200 - (40000/100000)*200} L600,${200 - (25000/100000)*200}`}
                  fill="none" 
                  stroke="rgb(139, 92, 246)" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                />
                
                {/* Area under the curve */}
                <path 
                  d={`M0,200 L0,${200 - (32000/100000)*200} L100,${200 - (45500/100000)*200} L200,${200 - (80200/100000)*200} L300,${200 - (65000/100000)*200} L400,${200 - (90100/100000)*200} L500,${200 - (40000/100000)*200} L600,${200 - (25000/100000)*200} L600,200 Z`}
                  fill="url(#lineGradient)" 
                />

                {/* Data points */}
                {[32000, 45500, 80200, 65000, 90100, 40000, 25000].map((val, i) => (
                  <circle 
                    key={i}
                    cx={i * 100} 
                    cy={200 - (val/100000)*200} 
                    r="5" 
                    fill="#09090c" 
                    stroke="rgb(139, 92, 246)" 
                    strokeWidth="3"
                    className="hover:r-[8] transition-all cursor-crosshair"
                  >
                    <title>{val.toLocaleString()} requests</title>
                  </circle>
                ))}
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 inset-x-6 flex justify-between text-xs font-medium text-zinc-500">
              {MOCK_CHART_DATA.map((d, i) => (
                <span key={i} className="hover:text-zinc-300 transition-colors w-8 text-center">{d.day}</span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
