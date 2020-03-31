//scene
var scene = new THREE.Scene();

//camera
    var camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 10;

//renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

//object
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial({
        color:0x00ff00,
        // wireframe: true,
        // wireframeLinewidth: 10
        map: new THREE.TextureLoader().load('./textures/image-1.jpg')
    });
    var myobject = new THREE.Mesh(geometry, material);
    myobject.rotation.x = 10;
    myobject.rotation.y = 5;

    scene.add(myobject);


//light
    var light = new THREE.PointLight( 0xff0000, 1, 100 );
    light.position.set(10, 0, 25);
    scene.add(light);
    renderer.render(scene,camera);
    var controls = new THREE.OrbitControls(camera,renderer.domElement );
    controls.update();
  

function animate(){
    requestAnimationFrame(animate);
    myobject.rotation.x += 0.01;
    myobject.rotation.y += 0.01;
    renderer.render(scene,camera);
}

animate();




