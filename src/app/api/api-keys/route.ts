import { NextResponse } from "next/server";
import { MOCK_API_KEYS } from "@/lib/mock-data";

/**
 * GET /api/api-keys
 * Returns mock API key records.
 * Query params: ?status=active|inactive|pending
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const statusFilter = searchParams.get("status");

  let data = [...MOCK_API_KEYS];

  if (statusFilter) {
    data = data.filter((k) => k.status === statusFilter);
  }

  return NextResponse.json(
    {
      success: true,
      data,
      meta: {
        total: data.length,
        generatedAt: new Date().toISOString(),
      },
    },
    { status: 200 }
  );
}
