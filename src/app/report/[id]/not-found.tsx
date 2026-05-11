import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FileSearch } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto p-4 md:p-8 pb-20">
                <Card className="border-dashed">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileSearch className="h-5 w-5 text-muted-foreground" />
                            Report not found
                        </CardTitle>
                        <CardDescription>
                            We could not find a report with this id. It may have
                            been deleted or never created.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild>
                            <Link href="/report">Back to reports</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                        >
                            <Link href="/">Go home</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
