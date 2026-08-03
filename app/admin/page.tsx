export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-semibold text-[#0d3320]">Dashboard</h1>
      <p className="mb-6 text-sm text-[#0d3320]/60">Overview of leads and quote requests.</p>

      <p className="mb-3 text-xs text-[#0d3320]/50">Recent leads</p>
      <div className="rounded-lg border border-[#0d3320]/10 bg-white overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#0d3320]/[0.06] px-4 py-3">
          <div>
            <p className="text-sm font-medium text-[#0d3320]">gokul</p>
            <p className="text-xs text-[#0d3320]/50">gokul@gmail.com</p>
          </div>
          <span className="rounded-full bg-[#eaf3de] px-3 py-1 text-xs font-medium text-[#3b6d11]">
            Qualified
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-medium text-[#0d3320]">Test Lead</p>
            <p className="text-xs text-[#0d3320]/50">test@example.com</p>
          </div>
          <span className="rounded-full bg-[#faeeda] px-3 py-1 text-xs font-medium text-[#854f0b]">
            In Review
          </span>
        </div>
      </div>
    </div>
  );
}