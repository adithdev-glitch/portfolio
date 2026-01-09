import React, { useEffect, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/space.gltf");
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();

  const scale = useMemo(() => {
    if (viewport.width < 5) return .5; // mobile
    if (viewport.width < 8) return .7; // tablet
    return 1; // desktop
  }, [viewport.width]);

  // ▶ Play & slow animation
  useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => {
      action.reset().play();
      action.timeScale = 0.15 // 🔥 slowed animation 
      }) }, [actions])

  // 💡 Fix dark materials & missing glow
  useEffect(() => {
    Object.values(materials).forEach((mat) => {
      mat.envMapIntensity = 2.5;
      mat.emissiveIntensity = 3;
      mat.needsUpdate = true;
    });
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null} scale={scale}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-0.044, -0.213, -0.061]} scale={2.701}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="SpaceStation_low_0">
                <mesh geometry={nodes.Object_4.geometry} material={materials.spacestation_main2} />
              </group>
              <group name="SpaceStation001_low_1">
                <mesh geometry={nodes.Object_6.geometry} material={materials.spacestation_smalllights} />
              </group>
              <group name="SpaceStation002_low_2">
                <mesh geometry={nodes.Object_8.geometry} material={materials.spacestation_main2} />
              </group>
              <group name="SpaceStation003_low_3">
                <mesh geometry={nodes.Object_10.geometry} material={materials.spacestation_main2} />
              </group>
              <group name="SpaceStation004_low_4">
                <mesh geometry={nodes.Object_12.geometry} material={materials.spacestation_main} />
              </group>
              <group name="SpaceStation005_low_5">
                <mesh geometry={nodes.Object_14.geometry} material={materials.spacestation_main} />
              </group>
              <group name="SpaceStation006_low_6" rotation={[Math.PI, -0.545, Math.PI]}>
                <mesh geometry={nodes.Object_16.geometry} material={materials.spacestation_main} />
              </group>
              <group name="SpaceStation007_low_7">
                <mesh geometry={nodes.Object_18.geometry} material={materials.spacestation_main} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/space.gltf");