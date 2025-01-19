"use client";

import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
let dat;
if (typeof window !== 'undefined') {
    dat = require('dat.gui');
}

function Model({ position, rotation, url }) {
    const gltf = useLoader(GLTFLoader, url);
    const meshRef = useRef();
    const [scale, setScale] = useState(0);
    const [currentRotation, setCurrentRotation] = useState(rotation);

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.rotation.set(rotation.x, rotation.y, rotation.z);
            setCurrentRotation(rotation);
        }
    }, [rotation]);

    useFrame(({ mouse }) => {
        if (meshRef.current) {
            if (scale < 1) {
                setScale((prevScale) => Math.min(prevScale + 0.02, 0.8));
            }

            meshRef.current.scale.set(scale, scale, scale);

            const targetX = mouse.x * 1.5;
            const targetY = mouse.y * 1;
            const newRotX = currentRotation.x + (targetY - currentRotation.x) * 0.1;
            const newRotY = currentRotation.y + (targetX - currentRotation.y) * 0.1;

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
            rotation={rotation}
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

    useEffect(() => {
        if (dat) {
            const gui = new dat.GUI();

            const lightFolder = gui.addFolder('Directional Light');
            lightFolder.add(lightSettings, 'intensity', 0, 2, 0.1).name('Intensity').onChange((value) => {
                setLightSettings((prev) => ({ ...prev, intensity: value }));
            });
            lightFolder.add(lightSettings, 'x', -20, 20, 1).name('Position X').onChange((value) => {
                setLightSettings((prev) => ({ ...prev, x: value }));
            });
            lightFolder.add(lightSettings, 'y', -20, 20, 1).name('Position Y').onChange((value) => {
                setLightSettings((prev) => ({ ...prev, y: value }));
            });
            lightFolder.add(lightSettings, 'z', -20, 20, 1).name('Position Z').onChange((value) => {
                setLightSettings((prev) => ({ ...prev, z: value }));
            });

            const modelFolder = gui.addFolder('Model Settings');
            modelFolder.add(modelSettings, 'x', -10, 10, 0.1).name('Position X').onChange((value) => {
                setModelSettings((prev) => ({ ...prev, x: value }));
            });
            modelFolder.add(modelSettings, 'y', -10, 10, 0.1).name('Position Y').onChange((value) => {
                setModelSettings((prev) => ({ ...prev, y: value }));
            });
            modelFolder.add(modelSettings, 'z', -10, 10, 0.1).name('Position Z').onChange((value) => {
                setModelSettings((prev) => ({ ...prev, z: value }));
            });

            modelFolder.add(modelSettings, 'rotX', -Math.PI, Math.PI, 0.05).name('Rotation X').onChange((value) => {
                setModelSettings((prev) => ({ ...prev, rotX: value }));
            });
            modelFolder.add(modelSettings, 'rotY', -Math.PI, Math.PI, 0.05).name('Rotation Y').onChange((value) => {
                setModelSettings((prev) => ({ ...prev, rotY: value }));
            });
            modelFolder.add(modelSettings, 'rotZ', -Math.PI, Math.PI, 0.05).name('Rotation Z').onChange((value) => {
                setModelSettings((prev) => ({ ...prev, rotZ: value }));
            });

            return () => gui.destroy();
        }
    }, [lightSettings, modelSettings]);

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
                    rotation={{
                        x: modelSettings.rotX,
                        y: modelSettings.rotY,
                        z: modelSettings.rotZ,
                    }}
                />
            </Suspense>
        </Canvas>
    );
}
