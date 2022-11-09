import * as THREE from "three";

console.log(THREE);

const scene = new THREE.Scene();
scene.background = new THREE.Color("grey" );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight - 100);
document.body.appendChild(renderer.domElement);


//THREE light

const directional =  new THREE.DirectionalLight("red", 1.5);
directional.position.x = 3;
directional.position.y = 2;
directional.position.z = 1;
scene.add(directional);

const directional2 =  new THREE.DirectionalLight("blue", 1.5);
directional2.position.x = -3;
directional2.position.y = 2;
directional2.position.z = 1;
scene.add(directional2);

const light = new THREE.AmbientLight( 0xffffff, 1); 
scene.add(light);


const geometry1 = new THREE.TorusGeometry(3, .5, 90,200);
const material1 = new THREE.MeshPhysicalMaterial({ color: 'white', roughness: 0.5, metalness: 0.7});
const sphere = new THREE.Mesh(geometry1, material1);
scene.add(sphere);



// const geometry2 = new THREE.BoxGeometry(1, 4.8, 1);
// const material2 = new THREE.MeshPhysicalMaterial({ color: 'black', roughness: 0.0, metalness: 1.7});
// const cube = new THREE.Mesh(geometry2, material2);
// scene.add(cube);

const geometry3 = new THREE.TorusGeometry(4, .5, 90,200);
const material3 = new THREE.MeshPhysicalMaterial({ color: 'white', roughness: 0.5, metalness: 1.7});
const sphere2 = new THREE.Mesh(geometry3, material3);
scene.add(sphere2);

const geometry4 = new THREE.TorusGeometry(2, .5, 90,200);
const material4 = new THREE.MeshPhysicalMaterial({ color: 'white', roughness: 0.5, metalness: 1.7});
const sphere3 = new THREE.Mesh(geometry4, material4);
scene.add(sphere3);

const geometry5 = new THREE.TorusGeometry(5, .5, 90,200);
const material5 = new THREE.MeshPhysicalMaterial({ color: 'white', roughness: 0.5, metalness: 0.7});
const sphere4 = new THREE.Mesh(geometry5, material5);
scene.add(sphere4);

const geometry6 = new THREE.SphereGeometry( 1, 32, 300);
const material6 = new THREE.MeshPhysicalMaterial({ color: 'white', roughness: 0.5, metalness: 0.7});
const sphere5 = new THREE.Mesh(geometry6, material6);
scene.add(sphere5);

// const geometry1 = new THREE.TorusGeometry(3, 1, 90,200);
// const material1 = new THREE.MeshPhysicalMaterial({ color: 'purple', roughness: 0.5, metalness: 0.7});
// material1.color = new THREE.Color("green");
// const sphere = new THREE.Mesh(geometry1, material1);
// scene.add(sphere);

camera.position.z = 10;


function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.03;
    // cube.rotation.y += 0.02;
    // cube.rotation.z += 0.03;
    sphere.rotation.x += 0.02;
    sphere4.rotation.x += 0.02;
    sphere2.rotation.x += 0;
    sphere2.rotation.y += 0.05;
    sphere2.rotation.z += 0.05;
    sphere3.rotation.x += 0;
    sphere3.rotation.y += 0.05;
    sphere3.rotation.z += 0.05;
    renderer.render(scene, camera);
}
animate();