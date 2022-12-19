import './style.css'
import * as THREE from 'three'
import { Group } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Group
const group = new THREE.Group()
scene.add(group)

/**
 * Objects
 */
//RedCube
const redGeometry = new THREE.BoxGeometry(1, 1, 1)

const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const redMesh = new THREE.Mesh(redGeometry, redMaterial)

scene.add(redMesh)
group.add(redMesh)

//BlueCube
const bluegeometry = new THREE.BoxGeometry(1, 1, 1)
const bluematerial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const bluemesh = new THREE.Mesh(bluegeometry, bluematerial)
scene.add(bluemesh)
bluemesh.position.x = -2
group.add(bluemesh)


//GreenGeometry
const greengeometry = new THREE.BoxGeometry(1, 1, 1)
const greenmaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const greenmesh = new THREE.Mesh(greengeometry, greenmaterial)
scene.add(greenmesh)
greenmesh.position.x = 2
group.add(bluemesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)