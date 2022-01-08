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

const bcChange = keyframes`
  15% {
    border-width: 12px;
  }
  100% {
    border-width: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 12px solid ${(props) => props.color};
  background-color: white;
  animation: ${scale} 300ms forwards, ${fade} 500ms forwards,
    ${bcChange} 300ms forwards;
`;

export default Circle;
