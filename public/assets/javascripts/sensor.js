let point = { x: 0, y: 0, z: 0 }

let acc = { ...point }
let accOld = { ...point }

let sensor = {
	difference: 0,
	threshold: 0,
}

const faktor = 100

function doSensor(e) {
	acc = e.acceleration

	let a = acc.x - accOld.x
	let b = acc.y - accOld.y
	let c = acc.z - accOld.z

	sensor.difference = a ** 2 + b ** 2 + c ** 2 * faktor

	if (sensor.difference < sensor.threshold) return

	accOld = acc

	motionDone(acc)
}

async function touchStarted() {
	if (typeof DeviceMotionEvent.requestPermission === 'function') {
		let permissionState = await DeviceMotionEvent.requestPermission()

		if (permissionState !== 'granted') return false
	}

	window.addEventListener('devicemotion', doSensor, false)
}
