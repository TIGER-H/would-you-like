import { useSpring, animated } from "react-spring";

const Scale = ({ children }) => {
  const props = useSpring({
    to: {
      transform: "scale(1)",
    },
    from: {
      transform: "scale(0)",
    },
    config: {
      // use Gentle config
      tension: 200,
      friction: 14,
      precision: 0.01,
      velocity: 0,
      mass: 1,
    },
    delay: 150,
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export default Scale;
