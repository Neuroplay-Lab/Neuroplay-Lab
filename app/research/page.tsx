import type { Metadata } from "next";
import UnderConstruction from "../components/UnderConstruction";

// Remove "robots" when the real page replaces this one.
export const metadata: Metadata = { title: "Research", robots: { index: false } };

export default function Page() {
  return <UnderConstruction title="Research" />;
}
