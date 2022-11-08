import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#0275d8",
  radius: () => Math.random() * 2.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

function App() {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap:"wrap"
        }}
      >
        <ParticleImage
          src={"/iaf_white.png"}
          width={Number(innerWidth * 0.4)}
          height={Number(innerHeight)}
          scale={1.25}
          entropy={20}
          maxParticles={4000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="#fff"
        />
<div class="card p-5 shadow p-3 mb-5 bg-body rounded">
  <div class="card-body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap:"wrap"
          }}
        >
          <img  style={{ marginBottom: "30px" }} src="http://www.costacloud.com/assets/img/logo1-default.png" />
          <p>
            Solutions Designed for Your Business eOffice for Government,
            Procurement Automation, <br />
          </p>
          <p  style={{ marginBottom: "30px" }}>Health Records and may more...</p>

          <h2>Sign in to your account.</h2>
          <div style={{width:"100%"}}>
          <input  class="form-control m-3" type="text" placeholder="Username" aria-label="default input example"/>
          <input  class="form-control m-3" type="password" placeholder="password" aria-label="default input example"/>
          </div>
          <button type="button" class="btn btn-primary">submit</button>

        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
