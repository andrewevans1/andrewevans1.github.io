var canvas = document.getElementById('myCanvas')
var W = canvas.width
var H = canvas.height
var ctx = canvas.getContext('2d')
var START_X = W/2
var START_Y = H/2
var x1, x2, x3, y1, y2, y3, xpos, ypos

function writeMessage(canvas, message) {
    ctx.clearRect(0, 0, W, H)
    ctx.font = '18pt Genome'
    ctx.fillStyle = 'black'
    ctx.fillText(message, 10, 25)
    }

function initAnt() {
	ctx.beginPath()
	ctx.lineWidth="5"
	ctx.strokeStyle="green"
	ctx.moveTo(START_X, START_Y)

	return {
		d: 0,
		theta: 0
	}
}
/*
function drawAnt(ant) {
	xpos = START_X + ant.d*Math.sin(ant.theta)
	ypos = START_Y + ant.d*Math.cos(ant.theta)

	ctx.beginPath()
	ctx.arc(xpos, ypos, 5, 0, 2*Math.PI, false)
	ctx.lineWidth = 5
	ctx.strokeStyle = "black"
	ctx.stroke()
	ctx.closePath()
}
*/
function moveAnt(ant) {
	var angle = Math.random()*2*Math.PI
	var distance = Math.random()*100

	x1 = ant.d * Math.sin(ant.theta)
	y1 = ant.d * Math.cos(ant.theta)
	x2 = distance * Math.sin(angle)
	y2 = distance * Math.cos(angle)

	x3 = x1 + x2
	y3 = y1 + y2

	ant.d = Math.sqrt(x3*x3 + y3*y3)
	ant.theta = Math.atan(x3/y3)

	xpos = START_X + ant.d*Math.sin(ant.theta)
	ypos = START_Y + ant.d*Math.cos(ant.theta)

	ctx.lineTo(xpos, ypos)
}

function goHome(ant) {
	var returnAngle = ant.theta + Math.PI
	var return_x = xpos + ant.d * Math.sin(returnAngle)
	var return_y = ypos + ant.d * Math.cos(returnAngle)

	console.log("home: ", return_x, return_y)
	
	ctx.beginPath()
	ctx.strokeStyle = "red"
	ctx.moveTo(xpos, ypos)
	ctx.lineTo(return_x, return_y)
	ctx.stroke()
}

window.onload = function(){
	var myAnt = initAnt()
	for (var i = 0; i < 15; i++) {
		moveAnt(myAnt)
		console.log(myAnt.d, myAnt.theta)
		//drawAnt(myAnt)
	}
	ctx.stroke()	
	goHome(myAnt)
}