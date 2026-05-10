import { Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Zap className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold text-muted-foreground">
                        PM.Job
                    </span>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} PM.Job AI. All rights reserved.
                    Let&apos;s find your perfect match.
                </p>
            </div>
        </footer>
    );
}
