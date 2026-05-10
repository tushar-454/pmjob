import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b bg-background sticky top-0 z-10 w-full">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl tracking-tight">
                        PM.Job
                    </span>
                </div>
                <nav className="flex items-center gap-4">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        Features
                    </Link>
                    <Link href="/report">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
