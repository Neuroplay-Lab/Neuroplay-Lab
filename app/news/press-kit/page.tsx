import type { Metadata } from "next";
import UnderConstruction from "../../components/UnderConstruction";

// Remove "robots" when the real page replaces this one.
export const metadata: Metadata = { title: "Press kit", robots: { index: false } };

export default function Page() {
  return <UnderConstruction title="Press kit" note="If you need images, descriptions or a quote, email us and we will reply directly." />;
}
