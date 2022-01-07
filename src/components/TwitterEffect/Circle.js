import styled, { keyframes } from "styled-components";

const Circle = ({ size, color }) => {
  return <Wrapper size={size} color={color} />;
};

// popping circle from size 0 to full size

const scale = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px;
  aspect-ratio: 1;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: ${scale} 300ms forwards, ${fade} 500ms forwards;
`;

export default Circle;
