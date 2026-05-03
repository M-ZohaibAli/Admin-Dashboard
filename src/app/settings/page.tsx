"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";
import { useState } from "react";

export default function SettingsPage() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast(`${activeTab} settings saved successfully`, "success");
    }, 800);
  };

  const tabs = ["Profile", "Account", "Appearance", "Notifications"];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Settings</h2>
        <p className="text-sm text-zinc-500 mt-1">
          Manage your account preferences and platform configuration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-1">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item
                  ? "bg-white/10 text-white shadow-sm border border-white/5"
                  : "text-zinc-400 hover:bg-white/[0.04] hover:text-white border border-transparent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="md:col-span-2">
          <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
            <CardHeader>
              <CardTitle>{activeTab} Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              {/* Profile Tab */}
              {activeTab === "Profile" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">Display Name</label>
                    <input 
                      type="text" 
                      defaultValue="Alice Hoffman" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-violet-500/50 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="alice@nexus.io" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-violet-500/50 outline-none transition-colors"
                    />
                  </div>
                </>
              )}

              {/* Account Tab */}
              {activeTab === "Account" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">Current Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-violet-500/50 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">New Password</label>
                    <input 
                      type="password" 
                      placeholder="Enter new password"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-violet-500/50 outline-none transition-colors"
                    />
                  </div>
                  <button className="text-xs font-medium text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg transition-colors w-fit mt-2 border border-red-500/20">
                    Delete Account
                  </button>
                </>
              )}

              {/* Appearance Tab */}
              {activeTab === "Appearance" && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">Theme</label>
                    <div className="flex items-center gap-3 mt-2">
                      <button className="px-4 py-2 rounded-lg border border-violet-500/50 bg-violet-500/10 text-violet-300 text-xs font-medium">Dark Mode</button>
                      <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-colors">Light Mode</button>
                      <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-colors">System</button>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-medium text-zinc-400">Accent Color</label>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-violet-500 ring-2 ring-white cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer hover:scale-110 transition-transform"></div>
                      <div className="w-6 h-6 rounded-full bg-emerald-500 cursor-pointer hover:scale-110 transition-transform"></div>
                      <div className="w-6 h-6 rounded-full bg-rose-500 cursor-pointer hover:scale-110 transition-transform"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "Notifications" && (
                <div className="space-y-3">
                  {[
                    { id: "email", label: "Email Notifications", desc: "Receive weekly platform reports" },
                    { id: "alerts", label: "Security Alerts", desc: "Get notified of unusual account activity" },
                    { id: "marketing", label: "Marketing", desc: "Receive updates about new features" }
                  ].map((notif) => (
                    <label key={notif.id} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5">
                        <input type="checkbox" defaultChecked={notif.id !== "marketing"} className="peer sr-only" />
                        <div className="w-4 h-4 border border-white/20 rounded bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-500 transition-colors"></div>
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">{notif.label}</p>
                        <p className="text-xs text-zinc-500">{notif.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              )}

              {/* Shared Save Button */}
              <div className="pt-4 border-t border-white/5">
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-4 py-2 transition-colors flex items-center justify-center min-w-[110px]"
                >
                  {isSaving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Save Changes"}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
