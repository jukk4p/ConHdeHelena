"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

function HeroAnimation() {
    return (
        <group position={[2, 0, 0]}>
            {/* Core Glow */}
            <mesh position={[0, 0, -2]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                    color="#C5A059"
                    emissive="#C5A059"
                    emissiveIntensity={1}
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Glowing gold dust particles using Instanced Sparkles for high performance */}
            <Sparkles 
                count={120} 
                scale={[16, 16, 12]} 
                size={3.5} 
                speed={0.4} 
                opacity={0.8} 
                color="#C5A059" 
                noise={1}
            />
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-100 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
                <ambientLight intensity={1.2} />
                <pointLight position={[5, 10, 10]} intensity={4} color="#C5A059" />
                <pointLight position={[-5, -10, -10]} intensity={2} color="#8c7a6b" />
                <HeroAnimation />
            </Canvas>

            {/* Premium background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-primary/15 opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(var(--background-rgb),_0.4)_100%)]" />
        </div>
    );
}
