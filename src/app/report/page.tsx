"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowUp,
    Bot,
    FileText,
    Link as LinkIcon,
    Plus,
    X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function ReportPage() {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() && !file) return;

        setIsLoading(true);
        // Simulate AI thinking and redirecting to standard mock report uuid
        setTimeout(() => {
            const uuid = "32432";
            router.push(`/report/${uuid}`);
        }, 800);
    };

    return (
        <div className="flex flex-col h-full items-center justify-center relative">
            <div className="w-full max-w-3xl flex-1 flex flex-col p-4 md:p-8">
                {/* Empty State / Welcome */}
                <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-10">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <Bot className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        What job are you targeting?
                    </h2>
                    <p className="text-muted-foreground">
                        Upload your resume (PDF/Image) using the{" "}
                        <Plus className="inline h-4 w-4 align-text-bottom mx-1" />{" "}
                        icon below, then paste the job description or a link to
                        the job posting. PM.Job will analyze your fit and guide
                        you to improve your resume.
                    </p>
                </div>

                {/* Input Area */}
                <div className="w-full max-w-3xl mx-auto shrink-0 relative bg-background/80 backdrop-blur-sm pb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex flex-col gap-1 bg-muted p-2 rounded-3xl border shadow-sm focus-within:ring-1 focus-within:ring-primary/50 transition-all"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/png, image/jpg, application/pdf"
                            onChange={handleFileChange}
                        />

                        {file && (
                            <div className="px-3 pt-3 pb-1">
                                <div className="relative inline-flex items-center gap-3 bg-background border rounded-xl p-2 pr-5 shadow-sm max-w-70">
                                    {file.type.startsWith("image/") ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="Preview"
                                            className="h-10 w-10 object-cover rounded-lg border bg-muted"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <FileText className="h-5 w-5 text-primary" />
                                        </div>
                                    )}
                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-sm font-medium truncate">
                                            {file.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground uppercase truncate">
                                            {file.size > 1024 * 1024
                                                ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
                                                : `${(file.size / 1024).toFixed(1)} KB`}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="absolute -top-2 -right-2 h-6 w-6 bg-background hover:bg-muted border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-sm"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                        <span className="sr-only">
                                            Remove file
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="flex items-end gap-2 w-full">
                            <div className="flex gap-1 shrink-0 mb-1 lg:mb-1.5 ml-1">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="rounded-xl h-9 w-9 text-muted-foreground hover:text-foreground"
                                >
                                    <Plus className="h-5 w-5" />
                                    <span className="sr-only">
                                        Upload Resume
                                    </span>
                                </Button>
                            </div>
                            <Textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Paste job description or link..."
                                className="min-h-13 max-h-48 resize-none bg-transparent border-0 focus-visible:ring-0 shadow-none px-2 py-3.5 text-base flex-1"
                                rows={1}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit(e);
                                    }
                                }}
                            />
                            <div className="shrink-0 mb-1 lg:mb-1.5 mr-1">
                                <Button
                                    type="submit"
                                    disabled={
                                        (!input.trim() && !file) || isLoading
                                    }
                                    size="icon"
                                    className="h-9 w-9 rounded-xl transition-all"
                                >
                                    <ArrowUp className="h-4 w-4" />
                                    <span className="sr-only">Send</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="flex text-xs text-muted-foreground mt-3 justify-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <FileText className="h-3 w-3" /> PDF/Image limits
                            5MB
                        </span>
                        <span className="flex items-center gap-1.5">
                            <LinkIcon className="h-3 w-3" /> Supports LinkedIn,
                            Indeed links
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
