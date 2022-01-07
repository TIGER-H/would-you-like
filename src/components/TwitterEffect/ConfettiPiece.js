import styled from "styled-components";
import Particle from "./Particle";

const size = 5;
const ConfettiPiece = ({ angle, distance, color }) => {
  return (
    <CenterWrapper>
      <Particle angle={angle} distance={distance}>
        <Circle color={color} />
      </Particle>
    </CenterWrapper>
  );
};

const CenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled.div`
  width: ${size}px;
  aspect-ratio: 1;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export default ConfettiPiece;
