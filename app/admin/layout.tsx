import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const role = (session?.user as any)?.role;

  if (!session || role !== "admin") {
    redirect("/");
  }

 return (
    <div className="flex min-h-screen flex-col bg-[#fafaf8] lg:flex-row">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</main>
    </div>
  );
}