import styled from "styled-components";
import Circle from "../TwitterEffect/Circle";
import ConfettiPiece from "../TwitterEffect/ConfettiPiece";
import Scale from "../TwitterEffect/Scale";
import { random, range, sample } from "../utils";
import Heart from "./Heart";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;
  const heart = <Heart width={heartSize} isToggled={isLiked} />;
  return (
    <Wrapper>
      <Front>{isLiked ? <Scale>{heart}</Scale> : heart}</Front>
      <Back>
        {isLiked && <Circle size={size * 0.8} color="#E790F7" />}
        {isLiked &&
          range(12).map((i) => (
            <ConfettiPiece
              key={i}
              angle={360 * (i / 12)}
              distance={random(17, 24)}
              color={sample(PARTICLE_COLORS)}
            />
          ))}
      </Back>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Front = styled.div`
  z-index: 1;
`;

const Back = styled.div`
  position: absolute;
  z-index: 0;
`;

export default LikeButton;
