import { NextResponse } from "next/server";
import { MOCK_USERS } from "@/lib/mock-data";

/**
 * GET /api/users
 * Returns a paginated list of mock users.
 * Query params: ?page=1&limit=10&status=active
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit") ?? 10)));
  const statusFilter = searchParams.get("status");

  let data = [...MOCK_USERS];

  // Filter by status if provided
  if (statusFilter) {
    data = data.filter((u) => u.status === statusFilter);
  }

  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const paginatedData = data.slice(start, start + limit);

  return NextResponse.json(
    {
      success: true,
      data: paginatedData,
      meta: {
        page,
        limit,
        total,
        totalPages,
      },
    },
    { status: 200 }
  );
}
