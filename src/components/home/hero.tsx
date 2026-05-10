import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Land Your Perfect Job with{" "}
                    <span className="text-primary">AI Insights</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Upload your resume, paste a job description, and get
                    instant, actionable feedback. Discover your match
                    percentage, missing keywords, and exactly what to improve.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/report">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto gap-2"
                        >
                            Analyze Resume <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="#how-it-works">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                        >
                            How it Works
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
