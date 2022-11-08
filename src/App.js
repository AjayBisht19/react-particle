import * as React from 'react';
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";


const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#fff",
  radius: () => Math.random() * 2.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

function App() {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <>
     {/* <img src='/iaf.png'/> */}
     <ParticleImage
      src={"/iaf_white.png"}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={1.25}
      entropy={20}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#000"
    />
    </>
  );
}

export default App;
