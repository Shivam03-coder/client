"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

interface Model {
  id: number;
  modelimg: string;
  path: string;
}

interface ThreeDModelsProps {
  path: string;
}

const ThreeDModels: React.FC<ThreeDModelsProps> = ({ path }) => {
  const model = useGLTF(path);

  const bbox = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model.scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    return size;
  }, [model]);

  // Adjust the scale factor to make the model larger
  const scale = useMemo(() => {
    const maxDimension = Math.max(bbox.x, bbox.y, bbox.z);
    return 4 / maxDimension; // Change 4 to a larger value to increase size further
  }, [bbox]);

  return (
    <primitive
      object={model.scene}
      scale={[scale, scale, scale]}
      position={[0, (-bbox.y * scale) / 2, 0]} // Center the model vertically
    />
  );
};

interface ModelsSectionProps {
  model: Model;
}

const ModelsSection: React.FC<ModelsSectionProps> = ({ model }) => {
  return (
    <section className="w-[45rem]">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5], fov: 40 }}
      >
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.5} />  {/* Increased intensity for more overall light */}

        {/* Point light positioned above the model */}
        <pointLight position={[0, 2, 3]} intensity={1.5} decay={2} /> {/* Adjusted position and intensity */}
        
        {/* Directional light to enhance brightness and create shadows */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={3} 
          castShadow 
          shadow-mapSize-width={512} 
          shadow-mapSize-height={512} 
        />
        
        <ThreeDModels path={model.path} />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </section>
  );
};

export default ModelsSection;
