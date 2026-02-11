import TeamPage from "@/components/team/TeamPage";
import prisma from "@/lib/prisma";
import Head from "next/head";
import React from "react";
import team2025Data from "@/data/2025.json";

// Known team slugs used by TeamTimeline (so we can generate paths when DB is down)
const FALLBACK_SLUGS = ["2025", "2024", "2023", "2022", "2021"];

// Transform data/2025.json into the shape TeamPage expects (name, lead, core, members with profile)
// Lead = Organizer; Core = all roles containing "Lead" (Tech Lead, ML and Android Lead, Design Lead, Content Lead, Community Lead); rest = members
function teamDataFrom2025Json() {
  const raw = team2025Data;
  const list = (raw.members || []).map((m, i) => ({
    id: `json-${i}`,
    role: m.role || m.position,
    profile: {
      name: m.name,
      image: m.avatar,
      profileLink: (m.links && m.links.linkedin) || "#"
    }
  }));
  const lead = list.find((m) => m.role === "Organizer") || list[0] || null;
  const core = list.filter((m) => m.role !== "Organizer" && m.role && m.role.includes("Lead"));
  const members = list.filter((m) => m.role !== "Organizer" && (!m.role || !m.role.includes("Lead")));

  return {
    name: raw.title || "Team 2025",
    lead,
    core,
    members
  };
}

const Team = ({ teamData, teamSlug }) => {
  return (
    <>
      <Head>
        <title>{teamData.name} | GDSC MVJCE</title>
        <meta
          name="description"
          content={
            "The amazing team behind GDSC MVJCE working dilligently towards empowering the student developer community in our college."
          }
        />
        <meta property="og:title" content={teamData.name + " | GDSC MVJCE"} />
        <meta
          property="og:description"
          content={
            "The amazing team behind GDSC MVJCE working dilligently towards empowering the student developer community in our college."
          }
        />
        <meta property="og:image" content={"/images/gdsc_fallback.png"} />
      </Head>
      <TeamPage teamData={teamData} teamSlug={teamSlug} />
    </>
  );
};

export default Team;

// Build teamData from data/2024.json (same shape as TeamPage expects)
// Lead = Organizer; Core = all roles containing "Lead" (Tech Lead, ML and Android Lead, Design Lead, Content Lead, Community Lead); rest = members
function teamDataFrom2024Json() {
  const raw = require("@/data/2024.json");
  const list = (raw.members || []).map((m, i) => ({
    id: `json-2024-${i}`,
    role: m.role || m.position,
    profile: {
      name: m.name,
      image: m.avatar,
      profileLink: (m.links && m.links.linkedin) || "#"
    }
  }));
  const lead = list.find((m) => m.role === "Organizer") || list[0] || null;
  const core = list.filter((m) => m.role !== "Organizer" && m.role && m.role.includes("Lead"));
  const members = list.filter((m) => m.role !== "Organizer" && (!m.role || !m.role.includes("Lead")));
  return {
    name: raw.title || "Team 2024",
    lead,
    core,
    members
  };
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  // Use static JSON as source of truth for 2024 and 2025 (so data/2024.json and data/2025.json always apply)
  if (slug === "2025") {
    const teamData = teamDataFrom2025Json();
    return { props: { teamData, teamSlug: slug } };
  }
  if (slug === "2024") {
    try {
      const teamData = teamDataFrom2024Json();
      return { props: { teamData, teamSlug: slug } };
    } catch (_) {
      // no 2024.json
    }
  }

  try {
    const response = await prisma.team.findUnique({
      include: {
        members: {
          include: {
            profile: true
          },
          orderBy: {
            priority: "asc"
          }
        }
      },
      where: {
        slug: slug
      }
    });
    if (response) {
      const { name, members } = response;
      const teamData = {
        name,
        lead: members.find((member) => member.type === "lead"),
        members: members.filter((member) => member.type === "member"),
        core: members.filter((member) => member.type === "core")
      };

      return {
        props: {
          teamData,
          teamSlug: slug
        }
      };
    }
  } catch (err) {
    console.error("[team/[slug]] getStaticProps:", err?.message || err);
  }

  return { notFound: true };
};

export const getStaticPaths = async () => {
  try {
    const response = await prisma.team.findMany({
      select: { slug: true }
    });
    const paths = (response || []).map((team) => ({
      params: { slug: team.slug }
    }));

    return {
      paths,
      fallback: "blocking"
    };
  } catch (err) {
    console.error("[team/[slug]] getStaticPaths: can't reach database:", err?.message || err);
    // Still generate paths for known years so getStaticProps can use JSON fallback for 2025 (and 2024 if data exists)
    return {
      paths: FALLBACK_SLUGS.map((slug) => ({ params: { slug } })),
      fallback: "blocking"
    };
  }
};
