import { TrendingUp, CheckCircle2, Users } from "lucide-react";

const STATS = [
  { label: "Total Users", value: "12,540", change: "+24.5%" },
  { label: "Revenue", value: "$45,231", change: "+18.2%" },
  { label: "Projects", value: "24", change: "+12.5%" },
];

const PROJECTS = [
  { name: "E-commerce Platform", status: "In Progress" },
  { name: "SaaS Dashboard", status: "In Progress" },
  { name: "Mobile Application", status: "Completed" },
  { name: "Marketing Website", status: "Completed" },
];

const TASKS = [
  { label: "UI/UX Design", value: 80 },
  { label: "API Development", value: 65 },
  { label: "Testing & QA", value: 90 },
];

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main browser card */}
      <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-raised">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink-900">Overview</h3>
          <span className="text-xs text-ink-400">This Month</span>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-ink-50 p-3">
              <p className="text-[11px] text-ink-400">{stat.label}</p>
              <p className="mt-1 text-sm font-semibold text-ink-900">{stat.value}</p>
              <p className="mt-1 text-[11px] font-medium text-emerald-600">
                ↑ {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-ink-50 p-3">
            <p className="mb-2 text-xs font-semibold text-ink-900">Recent Projects</p>
            <ul className="space-y-1.5">
              {PROJECTS.map((p) => (
                <li key={p.name} className="flex items-center justify-between text-[11px]">
                  <span className="text-ink-600">{p.name}</span>
                  <span className="text-ink-400">{p.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-ink-50 p-3">
            <p className="mb-2 text-xs font-semibold text-ink-900">Tasks</p>
            <ul className="space-y-2">
              {TASKS.map((t) => (
                <li key={t.label}>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-ink-600">{t.label}</span>
                    <span className="text-ink-400">{t.value}%</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-ink-200">
                    <div
                      className="h-1 rounded-full bg-brand-500"
                      style={{ width: `${t.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating card: Growth */}
      <div className="absolute -top-6 -right-6 hidden rounded-xl border border-ink-200 bg-white p-3 shadow-raised sm:block">
        <div className="flex items-center gap-1 text-[11px] text-ink-400">
          <TrendingUp size={12} /> Growth
        </div>
        <p className="text-lg font-bold text-ink-900">+35%</p>
        <p className="text-[10px] text-ink-400">vs last month</p>
      </div>

      {/* Floating card: On Time Delivery */}
      <div className="absolute -bottom-6 -left-6 hidden items-center gap-2 rounded-xl border border-ink-200 bg-white p-3 shadow-raised sm:flex">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
          <CheckCircle2 size={16} />
        </div>
        <div>
          <p className="text-[11px] text-ink-400">On Time Delivery</p>
          <p className="text-sm font-bold text-ink-900">98%</p>
        </div>
      </div>

      {/* Floating card: Dedicated Team */}
      <div className="absolute -bottom-10 right-4 hidden items-center gap-2 rounded-xl border border-ink-200 bg-white p-3 shadow-raised sm:flex">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white">
          <Users size={16} />
        </div>
        <div>
          <p className="text-xs font-semibold text-ink-900">Dedicated Team</p>
          <p className="text-[10px] text-ink-400">We work as your extended team</p>
        </div>
      </div>
    </div>
  );
}