import { SidebarSheet } from "@/components/sidebar-sheet";
import { getDB } from "@/db";
import { reports } from "@/db/schema";

export default async function ReportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const db = await getDB();
    const reportList = await db
        .select({
            id: reports.id,
            title: reports.title,
            createdAt: reports.createdAt,
        })
        .from(reports);
    const sortedReports = reportList
        .sort(
            (a, b) =>
                (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0),
        )
        .slice(0, 50)
        .map(({ id, title }) => ({ id, title }));

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background relative">
            <SidebarSheet reports={sortedReports} />

            {/* Main Content Area */}
            <main className="flex-1 h-full relative flex flex-col min-w-0 pt-16">
                {children}
            </main>
        </div>
    );
}
