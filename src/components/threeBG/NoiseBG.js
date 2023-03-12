import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useCallback } from "react";
import { Vector2, Color } from "three";

import vertexShader from './shader/vertexShader';
import fragmentShader from './shader/fragmentShader';

const Gradient = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
            u_bg: {
                value: new Color("#0D1321"),
            },
            u_colorA: { value: new Color("#0b6e4f") },
            u_colorB: { value: new Color("#9DA9A0") },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;

        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]} scale={1.5}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    );
};

function NoiseBG() {
    return <Canvas camera={{ position: [0.0, 0.0, 0.3] }} className="w-screen h-screen">
        <Gradient />
    </Canvas>;
}

export default NoiseBG;
