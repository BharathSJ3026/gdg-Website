import { styled } from "styled-components";

const sizeMap = {
  xs: "32px",
  sm: "47px",
  md: "75px",
  lg: "100px",
  xl: "150px",
  xxl: "232px",
};

export const Wrapper = styled.div`
  position: relative;
  width: ${({ size }) => sizeMap[size] || sizeMap.xl};
  height: ${({ size }) => sizeMap[size] || sizeMap.xl};
  flex-shrink: 0;
`;

export const PhotoLayer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  z-index: 0;
`;

export const BorderOverlay = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
`;
