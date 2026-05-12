import { SidebarSheet } from "@/components/sidebar-sheet";
import { getDB } from "@/db";
import { reports } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export default async function ReportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const userId = 1;
    const db = await getDB();
    const reportList = await db
        .select({
            id: reports.id,
            title: reports.title,
            createdAt: reports.createdAt,
        })
        .from(reports)
        .where(eq(reports.userId, userId))
        .orderBy(desc(reports.createdAt));

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background relative">
            <SidebarSheet reports={reportList} />

            {/* Main Content Area */}
            <main className="flex-1 h-full relative flex flex-col min-w-0 pt-16">
                {children}
            </main>
        </div>
    );
}
