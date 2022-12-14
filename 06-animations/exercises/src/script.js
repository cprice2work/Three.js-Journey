import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import GUI from 'lil-gui'

//Debug
const gui = new GUI();
console.log()


console.log(gsap)



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Debug

//Regular set up
// gui.add(mesh.position, 'y', -3, 3, 0.01)

//Chaining Method
gui
    .add(mesh.position, 'x' )
    .min(-3)
    .max(3)
    .step(0.01)


gui
    .add(mesh.position, 'y' )
    .min(-3)
    .max(3)
    .step(0.01)
    .name('elevation')


gui
    .add(mesh.position, 'z' )
    .min(-3)
    .max(3)
    .step(0.01)

gui
    .add(mesh, 'visible')

gui 
    .add(material, 'wireframe')

const parameters = {
     color: 0xff0000
}

gui
    .addColor(parameters, 'color')
    .onChange(() =>
    {
        material.color.set(parameters.color)
    })





// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Clock(1/2)(or Time)
const clock = new THREE.Clock()

// Time(1/2) - dev made clock
// let time = Date.now()

//GSAP ANImations
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2})
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0})

//Animations
const tick = () =>
{

    // Clock(2/2)
    const elapsedTime = clock.getElapsedTime()
    console.log(elapsedTime)

    //Time(2/2) -- dev made clock
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
	// button

    
    //console.log(deltaTime)
    // console.log(time)

    //**Update objects Version(1/4) - This makes the object spin and slow... spin and slow
    // mesh.rotation.y += elapsedTime

    //**Update objects Version(2/4)- This allow for for object to spin at the same speed regardless for frame rate
    // mesh.rotation.y += 0.001 * deltaTime

    //**Update objects Version(3/4)- One full circle  per second
    // mesh.rotation.y = elapsedTime * Math.PI * 2

    //**Update objects Version(4/4)- Sin and COS func -- Circle animation (Object)
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    //**Update objects Version(4/4)- Sin and COS func -- Circle animation (Camera)
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)

    //**Camera Look At
    // camera.lookAt(mesh.position)

    //Render
    renderer.render(scene, camera)

    console.log('tick')
    window.requestAnimationFrame(tick)

}

gui.add( 'myFunction' ); 

tick()



