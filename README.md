# Nexus Admin Dashboard

A modern admin dashboard built to demonstrate clean frontend architecture, reusable component design, and practical UI/UX decisions. The project focuses on creating a scalable structure while simulating real-world application behavior through lightweight backend logic and interactive UI elements.

---

## Live Preview

*[(VISIT NOW)](https://nexus-admindashboard.netlify.app/)*

---

## Technology Stack

* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS v4
* **Fonts:** `next/font/google` (Inter) for optimized typography
* **Icons:** Inline SVG (no external dependencies)

---

## Features

### 1. Authentication (Simulated)

* Lightweight client-side auth guard using `sessionStorage`
* Simple login flow to protect dashboard routes
* **Demo Password:** `admin123`

---

### 2. Component Architecture

* Reusable UI components (`Card`, `Badge`, `StatCard`, `DataTable`)
* Modular structure for scalability and maintainability
* Custom `ToastProvider` for non-blocking feedback

---

### 3. Interactive UI

* **Data Table:** Client-side pagination and structured rendering
* **Status Toggles:** Inline state updates for user status
* **Export CSV:** Simulated data export with file download
* **New Key Modal:** Functional modal flow with UI feedback

---

### 4. Mock API Layer

* Next.js Route Handlers:

  * `/api/users`
  * `/api/stats`
  * `/api/api-keys`
* Centralized mock data (`lib/mock-data.ts`) acting as a single source of truth

---

### 5. UI & Experience

* Responsive layout with consistent spacing and alignment
* Loading skeletons via `loading.tsx`
* Subtle hover states and transitions
* CSS-based charts on `/analytics`
* Clean, minimal visual system focused on usability

---

## Project Structure

```text
/src
  /app                  # App Router (pages, layouts, API routes)
    /api                # Route handlers (mock backend)
    /analytics          # Analytics view (charts)
    /api-keys           # API key management
    /settings           # Settings UI
    /users              # User management
  /components
    /auth               # Auth guard
    /dashboard          # Feature-specific components
    /layout             # Sidebar, header, providers
    /ui                 # Reusable primitives
  /lib
    mock-data.ts        # Mock data source
    utils.ts            # Utility helpers
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd admin-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)
**Password:** `admin123`

---

## Notes

This project intentionally keeps backend logic lightweight while focusing on:

* Clear structure
* Reusability
* Realistic UI interactions

It is designed to reflect how a production dashboard might be structured without introducing unnecessary complexity.

---

*Built with a focus on clarity, scalability, and practical frontend engineering.*
