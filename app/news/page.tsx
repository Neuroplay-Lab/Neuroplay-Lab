import type { Metadata } from "next";
import UnderConstruction from "../components/UnderConstruction";

// Remove "robots" when the real page replaces this one.
export const metadata: Metadata = { title: "News & press", robots: { index: false } };

export default function Page() {
  return <UnderConstruction title="News & press" note="Journalists can email us for images, quotes or an interview." />;
}
