import { authFn } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const auth = await authFn();

export const { POST, GET } = toNextJsHandler(auth);
