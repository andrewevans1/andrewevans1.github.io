console.log("loaded")
var n = 1
var c = 3
var ANGLE = 137.5
var max = 12
var ctx
var r = 15
var g = 0
var b = 0
var a = 1
var rho = 0
var x,y
var WIDTH, HEIGHT

var canvasExists = false

class dot {
	constructor(x,y){
		this.r = 4
		this.x = x
		this.y = y
		//this.color = color
		//console.log(color)
	}
	changeColor(){
		this.color = rgba(Math.random(255), Math.random(255), Math.random(255), Math.random(0.5,1))
	}
}


function create() {
	console.log("create")
	if (canvasExists){
        var oldCanvas = document.getElementById('canvas')
        document.body.removeChild(oldCanvas)
        console.log('canvas removed')
    }
	//canvas init
	var canvas = document.createElement('canvas')
    document.body.append(canvas)
    canvas.id = 'canvas'
    ctx = canvas.getContext('2d')
    canvasExists = true
	//canvas dimensions
	var W = window.innerWidth
	var H = window.innerHeight
	canvas.width = W*3/4
	canvas.height = H*3/4
	WIDTH = canvas.width
	HEIGHT = canvas.height
	x = WIDTH/2
	y = HEIGHT/2
}

function draw() {
	console.log("draw")
	for (var i = 0; i<max; i++){
		console.log("outer loop")
		for (var j = 0; j < n; j++){
			console.log("inner loop")
			angle = j * ANGLE*180/Math.PI
			//rho = c*Math.sqrt(angle)
			x = rho*Math.cos(angle) + WIDTH/2
			y = rho*Math.sin(angle) + HEIGHT/2
			r++;g++;b++
			d = new dot(x,y)
			ctx.fillStyle = "white"
			ctx.beginPath()
			ctx.arc(d.x,d.y,d.r,0,2*Math.PI)
			ctx.fill()
			ctx.closePath()
		}
		r += 5
		g += 5
		b += 5
		a -= 0.05
		n += 10
		rho += 15
	}
}

create()
console.log(WIDTH)

draw()