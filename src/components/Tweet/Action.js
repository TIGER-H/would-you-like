import styled from "styled-components";
import { ResetButton } from "../Reset";

const Action = ({ color, size, children, onClick, isActive }) => {
  return (
    <Wrapper onClick={onClick} color={color} size={size} isActive={isActive}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(ResetButton)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: ${({ size }) => size}px;
  aspect-ratio: 1;
  outline: none;

  color: ${({ color, isActive }) => (isActive ? color : undefined)};

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: ${({ color }) => color};
  }

  &:hover,
  &:focus {
    color: ${({ color }) => color};
  }

  &:focus:after,
  &:hover:after {
    opacity: 0.12;
  }
`;

export default Action;
