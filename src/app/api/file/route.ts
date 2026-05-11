import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const key = searchParams.get("key");

        if (!key) return new Response("missing key", { status: 400 });

        const { env } = await getCloudflareContext({ async: true });

        if (!env.PMJOB_R2) {
            return new Response("R2 binding missing: PMJOB_R2", {
                status: 500,
            });
        }

        const object = await env.PMJOB_R2.get(key);

        if (!object) return new Response("not found", { status: 404 });

        const filename = key.split("/").pop() || "file.pdf";
        const contentType =
            object.httpMetadata?.contentType || "application/pdf";

        const headers = new Headers({
            "Content-Type": contentType,
            "Content-Disposition": `inline; filename="${filename}"`,
            "Cache-Control": "public, max-age=3600",
        });

        if (object.httpEtag) headers.set("ETag", object.httpEtag);

        const buffer = await object.arrayBuffer();
        return new Response(buffer, { headers });
    } catch (error) {
        console.error("/api/file error", error);
        return new Response("Internal server error", { status: 500 });
    }
}
