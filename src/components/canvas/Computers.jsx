// Import necessary modules from React and other libraries
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Import a custom loader component which displays a progress bar before the 3D model finishes loading
import CanvasLoader from "../Loader";

// Component to render a computer 3D model
const Computers = ({ isMobile }) => {
  // Load the 3D model using the useGLTF hook
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // Return JSX for rendering the 3D model and its associated lighting
  return (
    // Mesh represents a renderable set of vertices with a material applied
    <mesh>
      {/* A light source representing a hemisphere light (light with a gradient) */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* A light source that originates from a single point and spreads out in a cone */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* // A light that gets emitted from a single point in all directions */}
      <pointLight intensity={1} />
      {/* // Primitive component to render the 3D model with certain transformations */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
// Main component to render the canvas for the 3D model
const ComputersCanvas = () => {
  // State to check if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // useEffect hook to add and cleanup event listener for screen size
  useEffect(() => {
    // Create a media query to check for screens with max-width of 500px
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    console.log(mediaQuery);
    // Set the initial state based on the media query
    setIsMobile(mediaQuery.matches);

    // Callback function to update the state when screen size changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Attach the callback to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // The Canvas component from react-three-fiber library
    <Canvas
      frameloop="demand"                  // Determines how the animation loop runs. "demand" means it only re-renders when needed.
      shadows                             // Enables shadow mapping. This lets objects cast and receive shadows.
      dpr={[1, 2]}                        // Device Pixel Ratio. Determines the resolution of the renderer on HiDPI displays. This setting uses a range from 1 (low resolution) to 2 (high resolution).
      camera={{ position: [20, 3, 5], fov: 25 }}  // Camera properties. Sets the initial position of the camera to [20, 3, 5] and its Field of View (fov) to 25 degrees.
      gl={{ preserveDrawingBuffer: true }}        // WebGL context attributes. 'preserveDrawingBuffer' when true, the drawings buffer is not cleared and can be presented multiple times.
      >
      {/* // Suspense component to show a fallback (CanvasLoader) while the 3D model loads */}
      <Suspense fallback={<CanvasLoader />}>
        {/* // Controls to allow user interaction with the 3D model */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        {/* // Render the Computers component with the `isMobile` prop */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
