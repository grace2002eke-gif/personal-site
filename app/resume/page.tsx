import type { Metadata } from "next";
import ResumeContent from "@/app/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume - Grace Urum Eke",
  description:
    "Experience, education, and credentials for Grace Urum Eke, Program Manager specializing in implementation and customer success.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
