import type { Metadata } from "next";
import { NotFound } from "@screens";

export const metadata: Metadata = { title: "404 — Page not found" };

export default function NotFoundPage() {
  return <NotFound />;
}
