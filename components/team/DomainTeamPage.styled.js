import styled from "styled-components";
import { devices } from "@/constants/theme";

export const DomainTeamPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  position: relative;
`;

export const DomainHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ backgroundColor }) => backgroundColor}80;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  width: 100%;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brandBlue};
    color: white;
  }
`;

export const DomainTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const TeamLeadSection = styled.section`
  text-align: center;
  margin-bottom: 5rem;
`;

export const TeamMembersSection = styled.section`
  margin-bottom: 3rem;
`;

export const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media screen and (${devices.sm}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const MemberImageContainer = styled.div`
  position: relative;
  padding: 4px;
  border-radius: 50%;
  background-color: ${({ borderColor }) => borderColor};
`;

export const MemberName = styled.div`
  text-align: center;
`;

export const MemberActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`;

