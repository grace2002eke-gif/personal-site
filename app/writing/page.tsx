import type { Metadata } from "next";
import WritingContent from "@/app/components/WritingContent";

export const metadata: Metadata = {
  title: "Writing - Grace Urum Eke",
  description:
    "Articles on implementation, adoption, and product by Grace Urum Eke.",
};

export default function WritingPage() {
  return <WritingContent />;
}
