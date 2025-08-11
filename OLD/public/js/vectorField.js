/////////////////////////////////////////////////
// TODO: interrupt and pause drawing functions //
// when another one is called.                 //
/////////////////////////////////////////////////

var ctx
var particles
var W
var H
var cen_x
var cen_y

var paused = false
var clicked = false
var time = document.getElementById('timeSlider').value
var scale = document.getElementById('scaleSlider').value
var max = document.getElementById('numberSlider').value
var size = document.getElementById('sizeSlider').value

window.onload = function(){
	console.log("something happened")
	//canvas init
	var canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')
	W = window.innerWidth
	H = window.innerHeight
	canvas.width = W
	canvas.height = H
	
	cen_x = W/2
	cen_y = H/2
}

function updateTimeSlider() {
	time = document.getElementById('timeSlider').value
	document.getElementById('timeSliderValue').innerHTML = 'Refresh Rate: ' + time
}
function updateScaleSlider() {
	scale = document.getElementById('scaleSlider').value
	document.getElementById('scaleSliderValue').innerHTML = 'Speed Scale: ' + scale
}
function updateNumberSlider() {
	max = document.getElementById('numberSlider').value
	initialize()
	document.getElementById('numberSliderValue').innerHTML = 'Number of Elements: ' + max
}
function updateSizeSlider() {
	size = document.getElementById('sizeSlider').value
	document.getElementById('sizeSliderValue').innerHTML = 'Size Scale of Elements: ' + size
}

function stop() {
	if(!clicked){
		paused = true
		clicked = true			
	}
	else{
		paused = false
		clicked = false
	}
}

function vortex(){
	//restart
	ctx.clearRect(0,0,W,H)
	initialize()

	//draw the particles
	function draw(){
		ctx.clearRect(0,0,W,H)

		ctx.fillStyle = "rgba(25,255,255,1)"
		for (var i = 0; i<max; i++){
			ctx.beginPath()
			var p = particles[i]
			ctx.moveTo(p.x, p.y)
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)
			ctx.fill()
		}
		update()
	}

	function update() {
		if (!paused){
			for(var i=0; i<max; i++){
				var p = particles[i]
				var x = cen_x - p.x
				var y = cen_y - p.y
				if (x != 0 || y != 0){
					//movement follows that of the vortex field
					var v_x = -y/(y*y + x*x)
					var v_y = x/(y*y + x*x)
				}
				else{
					p.x = 0
					p.y = 0
				}
				p.x += v_x*time*scale
				p.y += v_y*time*scale
				//console.log("updated")
			}
		}
	}
	//loop
	setInterval(draw, time)
}

function initialize() {
	particles = []
	for(var i=0; i<max; i++){
		particles.push({
			x: Math.random()*W*2/3 + W*1/6,
			y: Math.random()*H*2/3 + H*1/6,
			r: Math.random()*size +5,
		})
		console.log(particles[i])
	}
}

function collapse(){
	//restart
	ctx.clearRect(0,0,W,H)
	initialize()

	//draw the particles
	function draw(){
		ctx.clearRect(0,0,W,H)

		ctx.fillStyle = "rgba(25,255,255,1)"
		for (var i = 0; i<max; i++){
			ctx.beginPath()
			var p = particles[i]
			ctx.moveTo(p.x, p.y)
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)
			ctx.fill()
		}
		update()
	}

	function update() {
		if (!paused){
			for(var i=0; i<max; i++){
				var p = particles[i]
				var x = cen_x - p.x
				var y = cen_y - p.y
				if (x != 0 || y != 0){
					//movement follows that of the vortex field
					var v_x = x/(y*y + x*x)
					var v_y = y/(y*y + x*x)
				}
				else{
					p.x = 0
					p.y = 0
				}
				p.x += v_x*time*scale
				p.y += v_y*time*scale
				//console.log("updated")
			}
		}
	}
	//loop
	setInterval(draw, time)
}

function trig(){
	//restart
	ctx.clearRect(0,0,W,H)
	initialize()

	//draw the particles
	function draw(){
		//ctx.clearRect(0,0,W,H)

		ctx.fillStyle = "rgba(25,255,255,1)"
		for (var i = 0; i<max; i++){
			ctx.beginPath()
			var p = particles[i]
			ctx.moveTo(p.x, p.y)
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)
			ctx.fill()
		}
		update()
	}

	function update() {
		if (!paused){
			for(var i=0; i<max; i++){
				var p = particles[i]
				var x = cen_x - p.x
				var y = cen_y - p.y
				//movement
				var v_x = Math.sin(y/cen_y)/100
				var v_y = Math.sin(x/cen_x)/100

				p.x += v_x*time*scale
				p.y += v_y*time*scale
				//console.log("updated")
			}
		}
	}
	//loop
	setInterval(draw, time)
}