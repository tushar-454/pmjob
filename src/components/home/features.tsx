import { CheckCircle, FileText, Target } from "lucide-react";

export default function Features() {
    return (
        <section
            id="features"
            className="py-20"
        >
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        How PM.Job Helps You Win
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We use advanced AI to compare your qualifications
                        directly to what the employer is looking for.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 border rounded-2xl bg-card">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Match Scoring
                        </h3>
                        <p className="text-muted-foreground">
                            Instantly see how well your resume matches the job
                            description with a precise percentage score.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border rounded-2xl bg-card">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Keyword Analysis
                        </h3>
                        <p className="text-muted-foreground">
                            Identify crucial keywords and skills you are missing
                            so you can add them before applying.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border rounded-2xl bg-card">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Actionable Advice
                        </h3>
                        <p className="text-muted-foreground">
                            Get step-by-step suggestions on how to improve your
                            projects, experience, and summary sections.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
