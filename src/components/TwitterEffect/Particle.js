import { animated, useSpring } from "react-spring";

const Particle = ({ distance, angle, children }) => {
  const angleInRadians = (angle * Math.PI) / 180;

  const startX = 0.7 * distance * Math.cos(angleInRadians);
  const startY = 0.7 * distance * Math.sin(angleInRadians);

  const endX = 1 * distance * Math.cos(angleInRadians);
  const endY = 1 * distance * Math.sin(angleInRadians);

  const props = useSpring({
    to: {
      transform: `translate(${endX}px, ${endY}px) scale(0)`,
      opacity: 1,
    },
    from: {
      transform: `translate(${startX}px, ${startY}px) scale(1)`,
      opacity: 0,
    },

    config: {
      tension: 200,
      friction: 14,
    },

    delay: 300,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default Particle;
