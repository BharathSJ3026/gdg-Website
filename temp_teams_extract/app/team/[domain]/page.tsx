import { notFound } from "next/navigation"
import { TeamPage } from "@/components/team-page"

const domainData: Record<string, { title: string; color: string; darkColor: string }> = {
  tech: { title: "Tech", color: "#f8d8d8", darkColor: "#e5a3a3" },
  "ml-android": { title: "ML & Android", color: "#c3ecf6", darkColor: "#7dd3e8" },
  design: { title: "Design", color: "#ccf6c5", darkColor: "#8fe880" },
  content: { title: "Content", color: "#ffe7a5", darkColor: "#ffd54f" },
  community: { title: "Community", color: "#f0f0f0", darkColor: "#c0c0c0" },
}

export default async function Page({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params
  const data = domainData[domain]

  if (!data) {
    notFound()
  }

  return <TeamPage domain={domain} title={data.title} color={data.color} darkColor={data.darkColor} />
}

export function generateStaticParams() {
  return [
    { domain: "tech" },
    { domain: "ml-android" },
    { domain: "design" },
    { domain: "content" },
    { domain: "community" },
  ]
}
