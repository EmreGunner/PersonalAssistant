// Directives for SSR optimization and hydration control
"use client";
// Custom hook for accessing AI teacher state
import { useAITeacher } from "@/hooks/useAITeacher";
// Importing 3D and UI elements from Drei and Fiber
import {
  CameraControls,
  Environment,
  Float,
  Gltf,
  Html,
  Loader,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, button, useControls } from "leva";
import { Suspense, useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { BoardSettings } from "./BoardSettings";
import { MessagesList } from "./MessagesList";
import { Teacher } from "./Teacher";
import { TypingBox } from "./TypingBox"; 
import { useState } from "react";
import CalendlyEmbed from './CalendlyEmbed';

const useCalendly = () => {
  useEffect(() => {
    const scriptId = 'calendly-script';
    
    if (document.getElementById(scriptId)) {
      return; // script already loaded
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
};

export default useCalendly;

// Predefined positions and transformations for 3D models
const itemPlacement = {
  default: {
    classroom: {
      position: [0.2, -1.7, -2],
    },
    teacher: {
      position: [-1, -1.7, -3],
    },
    board: {
      position: [0.45, 0.382, -6],

    },
  },
  alternative: {
    classroom: {
      position: [0.3, -1.7, -1.5],
      rotation: [0, degToRad(-90), 0],
      scale: 0.4,
    },
    teacher: { position: [-1, -1.7, -3] },
    board: { position: [1.4, 0.84, -8] },
  },
};
// Main component rendering the 3D learning environment
export const Experience = () => {

  const [showCalendly, setShowCalendly] = useState(false);
  // Hook to load Calendly s  cript
  useCalendly();
  console.log("SHOW Calendly Is Called")
  const teacher = useAITeacher((state) => state.teacher);
  const classroom = useAITeacher((state) => state.classroom);

  return (
    <>
       {/* Conditionally render the TypingBox based on showCalendly */}
       {!showCalendly && (
            <div className="z-10 md:justify-center absolute bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
                <TypingBox />
            </div>
        )}
      <Leva hidden/>
      <Loader />
      <Canvas
        camera={{
          position: [0, 0, 0.0001],
        }}
      >
        
        <CameraManager showCalendly={showCalendly} />
        <Suspense>
          <Float speed={0.5} floatIntensity={0.2} rotationIntensity={0.1}>
          <Html
            transform
            {...itemPlacement[classroom].board}
            distanceFactor={1}
          >
            {showCalendly ? (
              <CalendlyEmbed />
            ) : (
              <MessagesList />
            )}
            {/* This conditional rendering chooses between showing the Calendly embed or the message list */}
            <BoardSettings setShowCalendly={setShowCalendly} />
            {/* Ensure BoardSettings can toggle the Calendly view */}
          </Html>

            
            <Environment preset="sunset" />
            <ambientLight intensity={0.8} color="white" />
           
            <Teacher
              teacher={teacher}
              key={teacher}
              {...itemPlacement[classroom].teacher}
              scale={1.5}
              rotation-y={degToRad(20)}
            />
          </Float>
        </Suspense>
      </Canvas>
    </>
  );
};
// Camera positions and zoom levels for different states
const CAMERA_POSITIONS = {
  default: [0, 6.123233995736766e-21, 0.0001],
  loading: [
    0.00002621880610890309, 0.00000515037441056466, 0.00009636414192870058,
  ],
  speaking: [0, -1.6481333940859815e-7, 0.00009999846226827279],
  appointment : [
    -0.00007862001532975673,
    -0.002024580857759796,
    0.1009755609698477]
};

const CAMERA_ZOOMS = {
  default: 1,
  loading: 1.3,
  speaking: 2.1204819420055387,
  appointment: 3,
};

// Manages camera behavior based on application state
const CameraManager = ({ showCalendly }) => {
  const controls = useRef();
  const loading = useAITeacher((state) => state.loading);
  const currentMessage = useAITeacher((state) => state.currentMessage);

  useEffect(() => {
    if (loading) {
      controls.current?.setPosition(...CAMERA_POSITIONS.loading, true);
      controls.current?.zoomTo(CAMERA_ZOOMS.loading, true);
    } else if (currentMessage) {
      controls.current?.setPosition(...CAMERA_POSITIONS.speaking, true);
      controls.current?.zoomTo(CAMERA_ZOOMS.speaking, true);
    }  else if (showCalendly) {
      console.log('Setting camera for appointment');
      controls.current?.setPosition(...CAMERA_POSITIONS.appointment, true);
      // Assume a zoom level for appointment or reuse an existing one
      controls.current?.zoomTo(CAMERA_ZOOMS.appointment, true);
    }
    
  }, [loading, currentMessage, showCalendly]);

  useControls("Helper", {
    getCameraPosition: button(() => {
      const position = controls.current.getPosition();
      const zoom = controls.current.camera.zoom;
      console.log([...position], zoom);
    }),
  });

  return (
    <CameraControls
      ref={controls}
      minZoom={1}
      maxZoom={3}
      polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      mouseButtons={{
        left: 1, //ACTION.ROTATE
        wheel: 16, //ACTION.ZOOM
      }}
      touches={{
        one: 32, //ACTION.TOUCH_ROTATE
        two: 512, //ACTION.TOUCH_ZOOM
      }}
    />
  );
};
// Preloads GLTF models to improve load times and performance
//useGLTF.preload("/models/classroom_default.glb");
//useGLTF.preload("/models/classroom_alternative.glb");