"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelProps {
    position: [number, number, number];
    initialRotation: { x: number; y: number; z: number };
    url: string;
    mousePosition: { x: number; y: number };
}

const Model: React.FC<ModelProps> = ({ position, initialRotation, url, mousePosition }) => {
    const gltf = useLoader(GLTFLoader, url);
    const meshRef = useRef<THREE.Group>(null);
    const posXRef = useRef(position[0] - 5);

    useFrame(() => {
        if (!meshRef.current) return;

        posXRef.current += (position[0] - posXRef.current) * 0.025;
        meshRef.current.position.x = posXRef.current;

        const rotationSpeed = 0.05;
        const targetRotationX = initialRotation.x + mousePosition.y * 0.2;
        const targetRotationY = initialRotation.y + mousePosition.x * 0.2;

        meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * rotationSpeed;
        meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * rotationSpeed;
    });

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            position={position}
            scale={[0.8, 0.8, 0.8]}
        />
    );
};

interface AppProps {
    mousePosition: { x: number; y: number };
}

const App: React.FC<AppProps> = ({ mousePosition }) => {
    return (
        <Canvas className="sepia-[.50] w-full transition-transform duration-300 ease-in-out">
            <directionalLight
                intensity={1.3}
                position={[-3, 1, 7]}
                castShadow
            />
            <Suspense fallback={null}>
                <Model
                    url="./model/logo.glb"
                    position={[-0.4, 0.1, 1]}
                    initialRotation={{
                        x: -0.25,
                        y: -0.3,
                        z: -0.05,
                    }}
                    mousePosition={mousePosition}
                />
            </Suspense>
        </Canvas>
    );
};

export default App;
