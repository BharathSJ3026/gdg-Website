import React from 'react'
import { MainContainer, LeftContainer, RightContainer, MeetButton } from './MeetTeam.styled'
import TeamMemberAvatar from './TeamMemberAvatar'
import Typography from '../display/typography/Typography'

const TEAM_MEMBERS = [
    { url: 'https://avatars.githubusercontent.com/u/35398866?v=4', border: '/images/team-borders/border-blue.svg' },
    { url: 'https://avatars.githubusercontent.com/u/94698713?v=4', border: '/images/team-borders/border-green.svg' },
    { url: 'https://avatars.githubusercontent.com/u/102166167?v=4', border: '/images/team-borders/border-red.svg' },
]

function MeetTeam() {
    return <MainContainer>
        <LeftContainer className="container">
            {TEAM_MEMBERS.map((member, i) => (
                <TeamMemberAvatar
                    key={i}
                    size="xl"
                    url={member.url}
                    borderSvg={member.border}
                    className={i === 0 ? 'first' : i === 1 ? 'second' : 'third'}
                    priority={i === 0}
                />
            ))}
        </LeftContainer>
        <RightContainer>
            <Typography variant='h1'>Discover the great minds behind GDG</Typography>
            <MeetButton>Meet our team</MeetButton>
        </RightContainer>
    </MainContainer >
}

export default MeetTeam
