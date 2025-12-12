import DomainTeamPage from "@/components/team/DomainTeamPage";
import prisma from "@/lib/prisma";
import Head from "next/head";
import React from "react";

// Helper function to match domain
const roleMatchesDomain = (role, domain) => {
  const roleLower = role.toLowerCase();
  if (domain === "tech") {
    return roleLower.includes("technical") || 
           roleLower.includes("tech") || 
           roleLower.includes("web") || 
           roleLower.includes("developer") ||
           roleLower.includes("development");
  } else if (domain === "ml-android") {
    return roleLower.includes("android") || 
           roleLower.includes("ml") || 
           roleLower.includes("machine learning") || 
           roleLower.includes("ai") ||
           roleLower.includes("artificial intelligence");
  } else if (domain === "design") {
    return roleLower.includes("design") || 
           roleLower.includes("designer") || 
           roleLower.includes("ui") || 
           roleLower.includes("ux") ||
           roleLower.includes("graphic");
  } else if (domain === "content") {
    return roleLower.includes("content") || 
           roleLower.includes("writer") || 
           roleLower.includes("writing") || 
           roleLower.includes("blog") ||
           roleLower.includes("blogger");
  } else if (domain === "community") {
    return roleLower.includes("community") || 
           roleLower.includes("management") || 
           roleLower.includes("manager") || 
           roleLower.includes("outreach");
  }
  return false;
};

const DomainTeam = ({ teamData, domain, teamSlug }) => {
  const domainTitles = {
    tech: "Tech",
    "ml-android": "ML & Android",
    design: "Design",
    content: "Content",
    community: "Community"
  };

  const domainTitle = domainTitles[domain] || "Tech";

  return (
    <>
      <Head>
        <title>{teamData.name} - {domainTitle} Team | GDSC MVJCE</title>
        <meta
          name="description"
          content={`${domainTitle} team members of ${teamData.name}`}
        />
      </Head>
      <DomainTeamPage teamData={teamData} domain={domain} teamSlug={teamSlug} />
    </>
  );
};

export default DomainTeam;

export const getStaticProps = async (ctx) => {
  const { slug, domain } = ctx.params;
  
  // Validate domain
  const validDomains = ["tech", "ml-android", "design", "content", "community"];
  if (!validDomains.includes(domain)) {
    return {
      notFound: true
    };
  }
  
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
        domain,
        teamSlug: slug
      }
    };
  } else {
    return {
      notFound: true
    };
  }
};

export const getStaticPaths = async (ctx) => {
  const teams = await prisma.team.findMany({
    select: {
      slug: true
    }
  });
  
  const domains = ["tech", "ml-android", "design", "content", "community"];
  
  const paths = teams.flatMap((team) =>
    domains.map((domain) => ({
      params: {
        slug: team.slug,
        domain: domain
      }
    }))
  );

  return {
    paths,
    fallback: "blocking"
  };
};


