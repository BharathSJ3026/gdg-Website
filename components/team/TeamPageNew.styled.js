import styled from "styled-components";
import { devices } from "@/constants/theme";

export const TeamPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

export const LeadSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: visible;
  background-color: transparent;

  @media screen and (${devices.md}) {
    padding: 2rem 1rem;
    min-height: auto;
  }
`;

export const LeadCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media screen and (${devices.md}) {
    padding: 2rem;
    gap: 1.5rem;
  }
`;

export const LeadImageContainer = styled.div`
  position: relative;
`;

export const LeadDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

export const DomainSectionsContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const DomainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor}80;
  position: relative;
  overflow: hidden;

  @media screen and (${devices.md}) {
    padding: 3rem 1rem;
    min-height: auto;
  }
`;

export const DomainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: ${({ isEven }) => (isEven ? "row" : "row-reverse")};
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DomainVisual = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;

  @media screen and (${devices.lg}) {
    max-width: 100%;
  }
`;

export const DomainCard = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
`;

export const DomainFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (${devices.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const DomainFeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const MeetTeamButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: white;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (${devices.sm}) {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const FloatingIcon = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;
  width: 96px;
  height: 96px;
  border-radius: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 3;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @media screen and (${devices.lg}) {
    display: none;
  }
`;

