import { NextResponse } from "next/server";
import { MOCK_STATS } from "@/lib/mock-data";

/**
 * GET /api/stats
 * Returns top-level dashboard metrics.
 */
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      data: MOCK_STATS,
      meta: {
        generatedAt: new Date().toISOString(),
        source: "mock",
      },
    },
    { status: 200 }
  );
}
