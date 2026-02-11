import Image from "next/image";
import { Wrapper, PhotoLayer, BorderOverlay } from "./TeamMemberAvatar.styled";

const TeamMemberAvatar = ({
  url,
  borderSvg,
  size = "xl",
  className,
  priority = false,
}) => {
  const imageUrl =
    url && url.trim() !== "" && !url.includes("placeholder")
      ? url
      : null;

  return (
    <Wrapper size={size} className={className}>
      <PhotoLayer>
        <Image
          src={imageUrl ?? "/images/gdsc_fallback.png"}
          alt="Team member"
          fill
          priority={priority}
          sizes="150px"
          style={{ objectFit: "cover" }}
        />
      </PhotoLayer>
      {borderSvg && (
        <BorderOverlay
          src={borderSvg}
          alt=""
          aria-hidden
        />
      )}
    </Wrapper>
  );
};

export default TeamMemberAvatar;
