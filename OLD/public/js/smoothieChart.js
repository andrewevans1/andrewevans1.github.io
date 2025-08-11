var x = new XMLHttpRequest()
x.open("GET", "http://twitter.com/_happydan")
x.onradystatechange = function() {
	if (x.readyState == 4 && x.status == 200) {
		var doc = x.responseXML
	}
}
x.send(null)


var canvas = document.getElementById('myCanvas')
var W = window.innerWidth
var H = window.innerHeight
canvas.width = W*3/4
canvas.height = H/2

var smoothie = new SmoothieChart({
	grid: {strokeStyle: 'rgb(125,0,0)', fillStyle: 'rgb(60,0,0)',
		lineWidth: 1, millisPerLine: 250, verticalSections: 6,
		minValue: 0, maxValue: 1},
	labels: { fillStyle: 'rgb(60,255,0)' }
})
smoothie.streamTo(document.getElementById('myCanvas'))

//data
var line1 = new TimeSeries()
var line2 = new TimeSeries()

//add a random value to each line every second
setInterval(function() {
	line1.append(new Date().getTime(), Math.random()*1.25)
	line2.append(new Date().getTime(), Math.random())
}, 1000)

//add to SmoothieChart
smoothie.addTimeSeries(line1, {
	strokeStyle: 'rgb(0,255,0)', fillStyle: 'rgba(0,255,0,0.4)',
	lineWidth: 3
})
smoothie.addTimeSeries(line2, {
	strokeStyle: 'rgb(255,0, 255)', fillStyle: 'rgba(255,0, 255,0.3)',
	lineWidth: 3
})

smoothie.streamTo(document.getElementById('myCanvas'), 1000)

