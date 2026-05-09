import { notFound } from "next/navigation";
import { workItems } from "@/lib/portfolio";
import WorkDetailContent from "@/app/components/WorkDetailContent";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Grace Urum Eke`,
    description: item.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();
  return <WorkDetailContent item={item} />;
}
