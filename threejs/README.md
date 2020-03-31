# Three.js Intro

## Javascript 3D Library

[threejs.org](https://threejs.org)

Three.js is a easy, lightweight Javascript 3D Library to get 3D content on a webpage by using WebGL. WebGL is a JavaScript API for rendering interactive 3D and 2D graphics within a web browser on a <canvas> element.


## Setup
The basic setup to create three.js prorject is a scene, camera, and renderer.


## Scene
Scene is the place to put every object you want to render. 

```
var scene = new THREE.Scene();  // define a scene
```


## Camera

Camera is a viewfinder which look through the objects on the scene. Camera has differnt projection modes, we will use [Perspective Camera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) for the demo. The `PerspectiveCamera` takes multiple parameters which are the field of view, the aspect ratio, and the near and far clipping plane. It is based on [Camera fustrum](http://learnwebgl.brown37.net/08_projections/projections_perspective.html), a field of view that mimics human vision.

```
var camera = new THREE.PerspectiveCamera(); // define a camera
camera.position.set(0,0,0); //set the position by using XYZ coordinates
scene.add(camera); // add the camera on the scene
```


## Renderer

You will pass a Scene and a Camera to a Renderer and it renders the 3D scene that is inside the frustum of the camera as a 2D image to a canvas. 

```
var renderer = new THREE.WebGLRenderer; // initialize the Renderer 
renderer.setSize(width, height); // set the size of the renderer
document.body.appendChild(renderer.domElement);  // render the canvas to the html document
```

## Object (Geometry + Material)
In Three.js, the basic visual element in a scene is a Mesh. It consists of Geometry(defines its shape) and Material (defines its skin). 
```
// define shape and skin of an object
var geometry = new THREE.SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer);
var material = new THREE.MeshBasicMaterial(parameters : Object); 

// define an object and add it on a scene to render
var myobject = new THREE.Mesh(geometry, material); 
scene.add(myobject);
renderer.render(scene, camera);
```

### Geomtry
For shape, you’ll either want to define a geometry within Three.js or import one from a file. Here we will use common shapes by using Geometry function. Geometric object allows various parameters including radius, width, height.

### Material
Three.js comes with 17 mesh materials, each with its own advantages and customisable properties. 

## Light
You can also craft your scene by using light. Depending on which material you use, lights are an essential part of a scene. There are several other kinds of lights you can add to a scene.


```
var light = new THREE.PointLight(color : Integer, intensity : Float, distance : Number, decay : Float); 
```

## Loader
You can also import geometries, textures, and other materials. Three.js has a list of supported loaders [here](https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models).



## Resources
- [Three.js Fundamentals](https://threejsfundamentals.org/)
- [Three.js Chrome DevTool](https://chrome.google.com/webstore/detail/threejs-developer-tools/ebpnegggocnnhleeicgljbedjkganaek)
- [Material and Light Basics in three.js](http://blog.disignstudio.com/materials-and-light-basics-in-three-js/)
- [Blender](https://www.blender.org/)