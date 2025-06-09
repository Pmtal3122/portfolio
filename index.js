import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import getTimeline from './utils/timeline.js';
import getWorkExp from './utils/getWorkEx.js';
import getProjects from './utils/getProjects.js';
import getSkills from './utils/getSkills.js';
import getStarfield from './utils/getStarField.js';

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x050510, 1.0);
// renderer.setClearColor(0xffffff, 1.0);
document.querySelector('.container').appendChild(renderer.domElement);

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader(dracoLoader);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const loadModel = async (loader, filePath) => {
    return new Promise((resolve, reject) => {
        loader.load(
            filePath,
            (gltf) => resolve(gltf.scene),
            (xhr) => console.log(`Model ${(xhr.loaded / xhr.total) * 100}% loaded`),
            (error) => reject(error)
        );
    });
};

const stars = getStarfield({numStars: 5000});
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 2)
scene.add(sunLight);

const init = async () => {
    const model = await loadModel(loader, 'https://pmtal3122.github.io/portfolio/Models/landing.glb');
    scene.add(model);
    getTimeline(camera);
    animate();
}
init();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x000077, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
camera.position.z = 500;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
getWorkExp(); // Load work experience data
getProjects(); // Load projects data
getSkills(); // Load skills data