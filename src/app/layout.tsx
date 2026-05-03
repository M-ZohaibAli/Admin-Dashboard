import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { SidebarProvider } from "@/components/layout/SidebarContext";
import { ToastProvider } from "@/components/ui/Toast";
import { AuthGuard } from "@/components/auth/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Admin Dashboard",
  description: "Monitor users, API usage, and system health from one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#09090c] text-white antialiased`}>
        <ToastProvider>
          <AuthGuard>
            <SidebarProvider>
              <Sidebar />
              {/* Main content — offset by sidebar width on md+ */}
              <div className="md:pl-64 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 p-6 md:p-8 max-w-screen-xl w-full mx-auto">
                  {children}
                </main>
              </div>
            </SidebarProvider>
          </AuthGuard>
        </ToastProvider>
      </body>
    </html>
  );
}
