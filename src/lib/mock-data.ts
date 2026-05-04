// ─────────────────────────────────────────────
// Mock Data — single source of truth for the app
// ─────────────────────────────────────────────

/**
 * User account status types
 */
export type UserStatus = "active" | "inactive" | "pending";

/**
 * Available user roles for access control
 */
export type UserRole = "Admin" | "Developer" | "Viewer" | "Editor";

/**
 * Represents a user in the system
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  requests: number;
  joinedAt: string;
  avatarUrl: string;
}

/**
 * Represents an API Key configuration
 */
export interface ApiKey {
  id: string;
  name: string;
  key: string;
  owner: string;
  status: UserStatus;
  lastUsed: string;
  requests: number;
}

/**
 * Data structure for dashboard statistic cards
 */
export interface StatItem {
  id: string;
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
}

// ── Users ──────────────────────────────────────
export const MOCK_USERS: User[] = [
  {
    id: "usr_001",
    name: "Alice Hoffman",
    email: "alice@nexus.io",
    role: "Admin",
    status: "active",
    requests: 14_820,
    joinedAt: "2024-01-12",
    avatarUrl: "AH",
  },
  {
    id: "usr_002",
    name: "Ben Carter",
    email: "ben@nexus.io",
    role: "Developer",
    status: "active",
    requests: 9_341,
    joinedAt: "2024-02-28",
    avatarUrl: "BC",
  },
  {
    id: "usr_003",
    name: "Clara Diaz",
    email: "clara@nexus.io",
    role: "Editor",
    status: "pending",
    requests: 2_110,
    joinedAt: "2024-03-15",
    avatarUrl: "CD",
  },
  {
    id: "usr_004",
    name: "Daniel Kim",
    email: "daniel@nexus.io",
    role: "Developer",
    status: "active",
    requests: 7_760,
    joinedAt: "2024-04-02",
    avatarUrl: "DK",
  },
  {
    id: "usr_005",
    name: "Eva Müller",
    email: "eva@nexus.io",
    role: "Viewer",
    status: "inactive",
    requests: 430,
    joinedAt: "2024-04-18",
    avatarUrl: "EM",
  },
  {
    id: "usr_006",
    name: "Frank Osei",
    email: "frank@nexus.io",
    role: "Developer",
    status: "active",
    requests: 11_220,
    joinedAt: "2024-05-01",
    avatarUrl: "FO",
  },
  {
    id: "usr_007",
    name: "Grace Lin",
    email: "grace@nexus.io",
    role: "Editor",
    status: "active",
    requests: 5_980,
    joinedAt: "2024-05-20",
    avatarUrl: "GL",
  },
  {
    id: "usr_008",
    name: "Hiro Tanaka",
    email: "hiro@nexus.io",
    role: "Viewer",
    status: "pending",
    requests: 110,
    joinedAt: "2024-06-05",
    avatarUrl: "HT",
  },
];

// ── API Keys ───────────────────────────────────
export const MOCK_API_KEYS: ApiKey[] = [
  {
    id: "key_001",
    name: "Production API",
    key: "sk-prod-••••••••••••3fA2",
    owner: "Alice Hoffman",
    status: "active",
    lastUsed: "2 minutes ago",
    requests: 82_400,
  },
  {
    id: "key_002",
    name: "Staging API",
    key: "sk-stg-••••••••••••9cB7",
    owner: "Ben Carter",
    status: "active",
    lastUsed: "1 hour ago",
    requests: 24_100,
  },
  {
    id: "key_003",
    name: "Mobile SDK",
    key: "sk-mob-••••••••••••1eD4",
    owner: "Clara Diaz",
    status: "pending",
    lastUsed: "3 days ago",
    requests: 5_670,
  },
  {
    id: "key_004",
    name: "Analytics Webhook",
    key: "sk-wbh-••••••••••••7gF1",
    owner: "Daniel Kim",
    status: "active",
    lastUsed: "30 minutes ago",
    requests: 41_200,
  },
  {
    id: "key_005",
    name: "Legacy Integration",
    key: "sk-leg-••••••••••••2hG8",
    owner: "Eva Müller",
    status: "inactive",
    lastUsed: "45 days ago",
    requests: 1_050,
  },
];

// ── Dashboard Stats ────────────────────────────
/**
 * Mocked statistics for the dashboard overview
 */
export const MOCK_STATS: StatItem[] = [
  {
    id: "stat_users",
    label: "Total Users",
    value: "8,420",
    change: 12.5,
    changeLabel: "vs last month",
    icon: "users",
  },
  {
    id: "stat_requests",
    label: "API Requests",
    value: "2.4M",
    change: 8.2,
    changeLabel: "vs last month",
    icon: "activity",
  },
  {
    id: "stat_uptime",
    label: "Uptime",
    value: "99.98%",
    change: 0.02,
    changeLabel: "vs last month",
    icon: "server",
  },
  {
    id: "stat_keys",
    label: "Active API Keys",
    value: "154",
    change: -3.1,
    changeLabel: "vs last month",
    icon: "key",
  },
];

// ── Chart Data ─────────────────────────────────
export const MOCK_CHART_DATA = [
  { day: "Mon", requests: 32_000, max: 100_000 },
  { day: "Tue", requests: 45_500, max: 100_000 },
  { day: "Wed", requests: 80_200, max: 100_000 },
  { day: "Thu", requests: 65_000, max: 100_000 },
  { day: "Fri", requests: 90_100, max: 100_000 },
  { day: "Sat", requests: 40_000, max: 100_000 },
  { day: "Sun", requests: 25_000, max: 100_000 },
];

