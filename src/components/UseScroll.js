import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  // Use Animation
  const controls = useAnimation();
  // Observer
  const [element, view] = useInView({ threshold: 0.5 });
  // Handler
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
