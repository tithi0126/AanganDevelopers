import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
    const points = useRef();
    const { mouse } = useThree();

    const count = 1500;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        points.current.rotation.y = time * 0.05;
        points.current.rotation.x = time * 0.02;

        // Subtle mouse follow
        points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 0.5, 0.1);
        points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 0.5, 0.1);
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#F36C5A"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
};

export default function BackgroundEffect() {
    return (
        <div className="fixed inset-0 -z-10 bg-site-bg pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <ParticleField />
            </Canvas>
        </div>
    );
}
