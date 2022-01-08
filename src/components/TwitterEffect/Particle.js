import { animated, useSpring } from "react-spring";

const Particle = ({ distance, angle, children }) => {
  const angleInRadians = (angle * Math.PI) / 180;

  const startX = 0.7 * distance * Math.cos(angleInRadians);
  const startY = 0.7 * distance * Math.sin(angleInRadians);

  const endX = 1 * distance * Math.cos(angleInRadians);
  const endY = 1 * distance * Math.sin(angleInRadians);

  const positionProp = useSpring({
    to: {
      transform: `translate(${endX}px, ${endY}px) scale(0)`,
    },
    from: {
      transform: `translate(${startX}px, ${startY}px) scale(1)`,
    },

    config: {
      tension: 200,
      friction: 60,
    },

    delay: 300,
  });

  const opacityProp = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 60,
    },

    delay: 300,
  });

  return (
    <animated.div style={{ ...positionProp, ...opacityProp }}>
      {children}
    </animated.div>
  );
};

export default Particle;
