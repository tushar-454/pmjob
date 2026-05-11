"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import slugify from "slugify";
import { extractText, getDocumentProxy } from "unpdf";

export async function generateReport(formData: FormData) {
    const jobDescription = formData.get("jobDescription") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!jobDescription || !resumeFile) {
        throw new Error("Job description and resume file are required");
    }

    try {
        const { key } = await uploadResumeToCloudflareR2(resumeFile);
        // parse resume pdf using unpdf
        const resumeText = await parseResumePdf(resumeFile);

        // if job is link parse the job description using puppeteer and extract the text content
        // use worker ai to generate the report and store the report in the database
        // return the report to the user
    } catch (error) {
        console.error("Error generating report:", error);
        throw new Error("Failed to generate report");
    }
}

async function uploadResumeToCloudflareR2(resumeFile: File) {
    const { env } = await getCloudflareContext({ async: true });
    const isPdfType = resumeFile.type === "application/pdf";
    const hasPdfExt = resumeFile.name.toLowerCase().endsWith(".pdf");

    if (!isPdfType && !hasPdfExt) {
        throw new Error("Resume must be a PDF");
    }

    if (resumeFile.size === 0) {
        throw new Error("Resume file is empty");
    }

    // Resume upload in R2 bucket.
    const baseName = resumeFile.name.replace(/\.pdf$/i, "") || "resume";
    const safeName =
        slugify(baseName, { lower: true, strict: true }) || "resume";
    const key = `${safeName}-${Date.now()}.pdf`;
    const contentType = resumeFile.type || "application/pdf";
    const safeFilename = resumeFile.name.replace(/["\\]/g, "");
    const body = await resumeFile.arrayBuffer();

    if (body.byteLength === 0) {
        throw new Error(`Buffer empty. File size: ${resumeFile.size}`);
    }

    const result = await env.PMJOB_R2.put(key, body, {
        httpMetadata: {
            contentType,
            contentDisposition: `attachment; filename="${safeFilename}"`,
        },
    });

    return result;
}

async function parseResumePdf(resumeFile: File) {
    const buffer = await resumeFile.arrayBuffer();
    const document = await getDocumentProxy(new Uint8Array(buffer));
    const { text } = await extractText(document, { mergePages: true });
    return text;
}
