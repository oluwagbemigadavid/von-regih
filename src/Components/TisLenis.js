"use client"
import { ReactLenis } from "@studio-freight/react-lenis";

function TisLenis({ children }) {
  return (
    <ReactLenis root options={{ lerp: 1.1, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default TisLenis;