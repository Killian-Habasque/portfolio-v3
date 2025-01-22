"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ position, initialRotation, url }) {
    const gltf = useLoader(GLTFLoader, url);
    const meshRef = useRef();
    const [scale, setScale] = useState(0);

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
        }
    }, [initialRotation]);

    useFrame(({ mouse }) => {
        if (meshRef.current) {
            // Gradually increase the scale
            if (scale < 1) {
                setScale((prevScale) => Math.min(prevScale + 0.02, 0.8));
            }
            meshRef.current.scale.set(scale, scale, scale);
            //const targetX = mouse.x * 0.5;
            //const targetY = mouse.y * 1;
            //const currentRot = meshRef.current.rotation;

            //const newRotX = currentRot.x + (targetY - currentRot.x) * 0.01;
            //const newRotY = currentRot.y + (targetX - currentRot.y) * 0.01;
            const targetX = mouse.x * 0.1;
            const targetY = mouse.y * 0.1;

            const newRotX = initialRotation.x + targetY;
            const newRotY = initialRotation.y + targetX;

            meshRef.current.rotation.x = newRotX;
            meshRef.current.rotation.y = newRotY;
        }
    });

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            scale={[0, 0, 0]}
            position={position}
        />
    );
}

export default function App() {
    const [lightSettings, setLightSettings] = useState({
        intensity: 2,
        x: -3,
        y: 1,
        z: 5,
    });

    const [modelSettings, setModelSettings] = useState({
        x: 0,
        y: 0,
        z: 1.6,
        rotX: -0.25,
        rotY: -0.3,
        rotZ: -0.05,
    });

    return (
        <Canvas>
            <directionalLight
                intensity={lightSettings.intensity}
                position={[lightSettings.x, lightSettings.y, lightSettings.z]}
                castShadow={true}
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
}
