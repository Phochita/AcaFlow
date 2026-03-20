import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F9FAFB] min-h-screen">
      <Sidebar />
      <main className="flex-grow ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
