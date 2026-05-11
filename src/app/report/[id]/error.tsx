"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
    error,
    unstable_retry,
}: {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto p-4 md:p-8 pb-20">
                <Card className="border-destructive/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-destructive" />
                            Something went wrong
                        </CardTitle>
                        <CardDescription>
                            An unexpected error occurred while loading this
                            report. Try again or return to your reports list.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 sm:flex-row">
                        <Button onClick={() => unstable_retry()}>
                            Try again
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                        >
                            <Link href="/report">Back to reports</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
