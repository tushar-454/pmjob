import { SidebarSheet } from "@/components/sidebar-sheet";

export default function ReportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background relative">
            <SidebarSheet />

            {/* Main Content Area */}
            <main className="flex-1 h-full relative flex flex-col min-w-0 pt-16">
                {children}
            </main>
        </div>
    );
}
