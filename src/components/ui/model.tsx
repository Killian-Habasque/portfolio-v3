"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelProps {
    position: [number, number, number];
    initialRotation: { x: number; y: number; z: number };
    url: string;
}

const Model: React.FC<ModelProps> = ({ position, initialRotation, url }) => {
    const gltf = useLoader(GLTFLoader, url);
    const meshRef = useRef<THREE.Group | null>(null);
    const [posX, setPosX] = useState(position[0] - 3); 
    

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
        }
    }, [initialRotation]);

    useFrame(({ mouse }) => {
        if (meshRef.current) {
            setPosX((prevX) => prevX + (position[0] - prevX) * 0.05);
            meshRef.current.position.x = posX;

            const targetX = initialRotation.x + mouse.y * 0.1;
            const targetY = initialRotation.y + mouse.x * 0.1;
            const damping = 0.05; 

            meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * damping;
            meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * damping;
        }
    });

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            position={[posX, position[1], position[2]]}
            scale={[0.8, 0.8, 0.8]}
        />
    );
};

const App: React.FC = () => {
    const [lightSettings] = useState({
        intensity: 2,
        x: -3,
        y: 1,
        z: 5,
    });

    const [modelSettings] = useState({
        x: 0,
        y: 0,
        z: 2,
        rotX: -0.25,
        rotY: -0.3,
        rotZ: -0.05,
    });

    return (
        <Canvas className="!w-full xl:!w-1/2">
            <directionalLight
                intensity={lightSettings.intensity}
                position={[lightSettings.x, lightSettings.y, lightSettings.z]}
                castShadow
            />
            <Suspense fallback={null}>
                <Model
                    url="./logotest.glb"
                    position={[modelSettings.x, modelSettings.y, modelSettings.z]}
                    initialRotation={{
                        x: modelSettings.rotX,
                        y: modelSettings.rotY,
                        z: modelSettings.rotZ,
                    }}
                />
            </Suspense>
        </Canvas>
    );
};

export default App;
