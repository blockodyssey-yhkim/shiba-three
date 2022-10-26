import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//1. 장면 만들기
//2. 브라우저에 렌더링해달라고 하기
//3. 이게다임.
// 카메라 조명 배경
const ThreeJS = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current) {
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({
                canvas: canvasRef.current,
                antialias: true,
                //약간 계단현상 제거
            });
            renderer.outputEncoding = THREE.sRGBEncoding;
            //카메라 ,OrthographicCamera (원근법 적용 x )
            const camera = new THREE.PerspectiveCamera(30, 1);
            // 카메라 이동
            camera.position.set(0, -1, 8);
            const loader = new GLTFLoader();
            scene.background = new THREE.Color('white');
            //조명 AmbientLight, PointLight,
            const light = new THREE.PointLight(0xffff00, 10);
            scene.add(light);
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.update();
            Promise.all([
                loader.loadAsync('scene.gltf'),
                loader.loadAsync('scene.gltf'),
                loader.loadAsync('scene.gltf'),
                loader.loadAsync('scene.gltf'),
                loader.loadAsync('scene.gltf'),
            ]).then((res) => {
                const [objectA, objectB, objectC, objectD, objectE] = res;
                scene.add(objectA.scene);
                scene.add(objectB.scene);
                scene.add(objectC.scene);
                // scene.add(objectD.scene);
                // scene.add(objectE.scene);
                objectA.scene.position.set(1.2, 0, 0);
                objectB.scene.position.set(0, 0, 0);
                objectC.scene.position.set(-1.2, 0, 0);
                // objectD.scene.position.set(-1.2, 0, 0);
                // objectE.scene.position.set(-2.4, 0, 0);
                //밑에적으면 1초에 60번정도 호출됨
                const animate = () => {
                    requestAnimationFrame(animate);
                    objectA.scene.rotation.y += 0.01;
                    objectB.scene.rotation.y += 0.01;
                    objectC.scene.rotation.y += 0.01;
                    // objectD.scene.rotation.y -= 0.01;
                    // objectE.scene.rotation.y -= 0.01;
                    renderer.render(scene, camera);
                    controls.update();
                };
                animate();
            });
        }
    }, [canvasRef]);
    return <canvas ref={canvasRef} id="canvas" width="700" height="400"></canvas>;
};

export default ThreeJS;
