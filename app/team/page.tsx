import type { Metadata } from "next";
import UnderConstruction from "../components/UnderConstruction";

// Remove "robots" when the real page replaces this one.
export const metadata: Metadata = { title: "Team", robots: { index: false } };

export default function Page() {
  return <UnderConstruction title="Team" />;
}
