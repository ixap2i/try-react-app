import * as THREE from 'three';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import strb from './icon_assets/strawberry_gltf.gltf';

let camera, scene, renderer, model;

function test() {
  init();
  animate();

}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100);
  camera.position.set(-5, 3, 10);
  camera.lookAt(new THREE.Vector3(0, 2, 0));

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 20, 10);
  scene.add(dirLight);

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const loader = new GLTFLoader();

  loader.load(strb, function(gltf) {
    model = gltf.scene;
    const animations = gltf.animations;

    if(animations && animations.length) {

        //Animation Mixerインスタンスを生成
        mixer = new THREE.AnimationMixer(obj);

        //全てのAnimation Clipに対して
        for (let i = 0; i < animations.length; i++) {
            let animation = animations[i];

            //Animation Actionを生成
            let action = mixer.clipAction(animation) ;

            //ループ設定（1回のみ）
            action.setLoop(THREE.LoopOnce);

            //アニメーションの最後のフレームでアニメーションが終了
            action.clampWhenFinished = true;

            //アニメーションを再生
            action.play();
        }
    }
    scene.add(model);

  }, undefined, function(e) {
    console.error(e);
  });

  document.getElementById("root").appendChild(renderer.domElement);
}

function animate() {
  renderer.outputEncoding = THREE.GammaEncoding;
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}


export default function App() {
  return (
    <div id="test">
      {test()}
    </div>
  )
}