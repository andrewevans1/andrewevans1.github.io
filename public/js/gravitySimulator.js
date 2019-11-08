var canvasExists = false
function simple() {
	if (canvasExists){
        var oldCanvas = document.getElementById('canvas')
        document.body.removeChild(oldCanvas)
        console.log('canvas removed')
    }
	//canvas init
	var canvas = document.createElement('canvas')
    document.body.append(canvas)
    canvas.id = 'canvas'
    var ctx = canvas.getContext('2d')
    canvasExists = true
	//canvas dimensions
	var W = window.innerWidth
	var H = window.innerHeight
	canvas.width = W*3/4
	canvas.height = H*3/4
	$(window).scrollTop($('canvas').offset().top);

	/*var canvas2 = document.createElement('canvas')
	document.body.append(canvas2)
	canvas2.id = "myCanvas"
	var ctx2 = canvas2.getContext('2d')

	canvas2.width = W*3/4
	canvas2.height = H/4
	*/

	var time = 10
	var max = 2
	var scale = 20
	var radius = 20
	var spawnX = [100, 400]
	var spawnY = [100, 400]
	var color = ["rgba(255,0,0,0.5)", "rgba(0,0,255,0.5)"]
	var particles = []
	for(let i=0; i<max; i++){
		particles.push({
			x: spawnX[i],
			y: spawnY[i],
			r: radius,
			v_x: 0,
			v_y: 0,
			a_x: 0,
			a_y: 0
		})
		console.log(particles[i])
	}

	function draw() {
		ctx.clearRect(0,0,W*3/4,H*3/4)

		//ctx.fillStyle = "white"
		for (var i = 0; i<max; i++){
			ctx.beginPath()
			ctx.fillStyle = color[i]
			let p = particles[i]
			//ctx.moveTo(p.x, p.y)
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)

			ctx.fill()
		}
		update()
	}

	var merged_v_x
	var merged_v_y
	var initial_merge = true

	function update() {
		var speed = 8
		var dist_x = Math.abs(particles[1].x - particles[0].x)
		var dist_y = Math.abs(particles[1].y - particles[0].y)
		//console.log(dist_x, dist_y)

			//calculate acceleration vectors
			if (dist_x != 0){
				var a_x = (particles[0].r) / Math.pow(dist_x, 2)
			}
			else {
				var a_x = 0
			}

			if (dist_y != 0){
				var a_y = (particles[0].r) / Math.pow(dist_y, 2)
			}
			else {
				var a_y = 0
			}

			var notMerged = true
			let middle_x = dist_x/2
			let middle_y = dist_y/2

			if(dist_x < radius && dist_y < radius){
				notMerged = false
				console.log("merged")
			}

			if(notMerged){
				//if first particle is to the left of the second,
				//accelerate it to the right and vice versa
				if (particles[0].x < particles[1].x){
					particles[0].v_x += (a_x * time)
					particles[1].v_x -= (a_x * time)
				}
				else {
					particles[0].v_x -= (a_x * time)
					particles[1].v_x += (a_x * time)
				}
				//if first particle is above the second,
				//accelerate it down and vice versa
				if (particles[0].y < particles[1].y){
					particles[0].v_y += (a_y * time)
					particles[1].v_y -= (a_y * time)
				}
				else {
					particles[0].v_y -= (a_y * time)
					particles[1].v_y += (a_y * time)
				}
			}
			else {
				//bring the two together
				if (particles[0].x < particles[1].x){
					particles[0].x += middle_x
					particles[1].x -= middle_x
				}
				else {
					particles[0].x -= middle_x
					particles[1].x += middle_x
				}
				if (particles[0].y < particles[1].y){
					particles[0].y += middle_y
					particles[1].y -= middle_y
				}
				else {
					particles[0].y -= middle_y
					particles[1].y += middle_y
				}

				if(initial_merge){
					merged_v_x = particles[1].v_x+particles[0].v_x
					merged_v_y = particles[1].v_y+particles[0].v_y

					particles[0].v_x = merged_v_x
					particles[1].v_x = merged_v_x
					particles[0].v_y = merged_v_y
					particles[1].v_y = merged_v_y

					particles[0].r += 2/3 * radius
					particles[1].r += 2/3 * radius
					initial_merge = false
				}
			}

		particles[0].x += (particles[0].v_x * time)
		particles[1].x += (particles[1].v_x * time)
		particles[0].y += (particles[0].v_y * time)
		particles[1].y += (particles[1].v_y * time)

		console.log(particles[0].v_x, particles[0].v_y)
		//console.log('second: ' + particles[1].v_x, particles[1].v_y)
		}

	/*
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

	//add a velocity value to each line
	setInterval(function() {
		line1.append(new Date().getTime(), particles[0].v_x)
		line2.append(new Date().getTime(), particles[0].v_y)
	}, time*5)

	//add to SmoothieChart
	smoothie.addTimeSeries(line1, {
		strokeStyle: 'rgb(0,255,0)', fillStyle: 'rgba(0,255,0,0.4)',
		lineWidth: 3
	})
	smoothie.addTimeSeries(line2, {
		strokeStyle: 'rgb(255,0, 255)', fillStyle: 'rgba(255,0, 255,0.3)',
		lineWidth: 3
	})

	smoothie.streamTo(document.getElementById('myCanvas'), time*5)
	*/

	setInterval(draw, time*5)

}


function complex() {
	if (canvasExists){
        var oldCanvas = document.getElementById('canvas')
        document.body.removeChild(oldCanvas)
        console.log('canvas removed')
    }
    //canvas init
	var canvas = document.createElement('canvas')
    document.body.append(canvas)
    canvas.id = 'canvas'
    canvasExists= true
    var ctx = canvas.getContext('2d')

	//canvas dimensions
	var W = window.innerWidth*3/4
	var H = window.innerHeight*3/4
	canvas.width = W
	canvas.height = H
	$(window).scrollTop($('canvas').offset().top);

	var time = 10
	var max = 3
	var scale = 20
	var radius = 20
	var spawnX = [0, 250, 500]
	var spawnY = [0, 250, 500]
	var color = ["rgba(255,0,0,0.33)", "rgba(0,0,255,0.33)", "rgba(0,255,0,0.33)"]
	var particles = []
	for(let i=0; i<max; i++){
		particles.push({
			x: spawnX[i],
			y: spawnY[i],
			//x: Math.random()*W,
			//y: Math.random()*H,
			r: radius + Math.random()*20,
			color: color[i],
			v_x: 0,
			v_y: 0,
			a_x: 0,
			a_y: 0,
			merged: false,
			initial_merge: true
		})
		console.log(particles[i])
	}

	function draw() {
		ctx.clearRect(0,0,W,H)

		for (var i = 0; i<max; i++){
			ctx.beginPath()
			ctx.fillStyle = particles[i].color
			let p = particles[i]
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)

			ctx.fill()
		}
		update()
	}

	var dist_x
	var dist_y
	//var notMerged = true
	var merged_v_x
	var merged_v_y
	var speed = 8

	function update() {
		for (var i = 0; i<max; i++){
			for (var j = 0; j<max; j++){
				if(i!=j){
					dist_x = Math.abs(particles[j].x - particles[i].x)
					dist_y = Math.abs(particles[j].y - particles[i].y)
					//console.log(dist_x, dist_y)

					//calculate acceleration vectors
					if (dist_x != 0){
						var a_x = (particles[i].r) / Math.pow(dist_x, 2)
					}
					else {
						var a_x = 0
					}

					if (dist_y != 0){
						var a_y = (particles[i].r) / Math.pow(dist_y, 2)
					}
					else {
						var a_y = 0
					}


					var middle_x = dist_x/2
					var middle_y = dist_y/2
					//check for collision
					if(dist_x < radius && dist_y < radius){
						particles[j].merged = true
						console.log(j+" merged")
					}

					if(!particles[j].merged){
						//if first particle is to the left of the second,
						//accelerate it to the right and vice versa
						if (particles[i].x < particles[j].x){
							particles[i].v_x += (a_x * time)
							particles[j].v_x -= (a_x * time)
						}
						else {
							particles[i].v_x -= (a_x * time)
							particles[j].v_x += (a_x * time)
						}
						//if first particle is above the second,
						//accelerate it down and vice versa
						if (particles[i].y < particles[j].y){
							particles[i].v_y += (a_y * time)
							particles[j].v_y -= (a_y * time)
						}
						else {
							particles[i].v_y -= (a_y * time)
							particles[j].v_y += (a_y * time)
						}
					}
					else {
						//bring the two together
						if (particles[i].x < particles[j].x){
							particles[i].x += middle_x
							particles[j].x -= middle_x
						}
						else {
							particles[i].x -= middle_x
							particles[j].x += middle_x
						}
						if (particles[i].y < particles[j].y){
							particles[i].y += middle_y
							particles[j].y -= middle_y
						}
						else {
							particles[i].y -= middle_y
							particles[j].y += middle_y
						}

						if(particles[j].initial_merge){
							merged_v_x = particles[j].v_x+particles[i].v_x
							merged_v_y = particles[j].v_y+particles[i].v_y

							particles[i].v_x = merged_v_x
							particles[j].v_x = merged_v_x
							particles[i].v_y = merged_v_y
							particles[j].v_y = merged_v_y

							particles[j].r += 2/3 * radius
							particles[i].r += 2/3 * radius
							particles[j].initial_merge = false
						}
					}
				//console.log(particles[i].v_x, particles[i].v_y)
				}
			}
		}

		//after calculating all velocities,
		//then change the position of eacch particle
		for(i=0; i<max; i++){
			particles[i].x += (particles[i].v_x * time)
			particles[i].y += (particles[i].v_y * time)
		}

	}

	setInterval(draw, time*5)
}



function containParticles() {
	console.log("new")
	if (canvasExists){
        var oldCanvas = document.getElementById('canvas')
        document.body.removeChild(oldCanvas)
        console.log('canvas removed')
        clearInterval(isRunning)
    }
    //canvas init
	var canvas = document.createElement('canvas')
    document.body.append(canvas)
    canvas.id = 'canvas'
    canvasExists= true
    var ctx = canvas.getContext('2d')

	//canvas dimensions
	var W = window.innerWidth*3/4
	var H = window.innerHeight*3/4
	canvas.width = W
	canvas.height = H
	$(window).scrollTop($('canvas').offset().top);

	var time = 10
	var max = 5
	var scale = 20
	var radius = 20
	var particles = []
	for(let i=0; i<max; i++){
		particles.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: radius + Math.random()*20,
			color: 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.5)',
			v_x: 0,
			v_y: 0,
			a_x: 0,
			a_y: 0,
			merged: false,
			initial_merge: true
		})
		console.log(particles[i])
	}

	function draw() {
		ctx.clearRect(0,0,W,H)

		for (var i = 0; i<max; i++){
			ctx.beginPath()
			//ctx.fillStyle = "rgba(particles[i].color_r, particles[i].color_g, particles[i].color_b, 0.5)"
			ctx.fillStyle = particles[i].color
			let p = particles[i]
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)

			ctx.fill()
		}
		update()
	}

	var dist_x
	var dist_y
	//var notMerged = true
	var merged_v_x
	var merged_v_y
	var speed = 8

	function update() {
		for (var i = 0; i<max; i++){
			for (var j = 0; j<max; j++){
				if(i!=j){
					dist_x = Math.abs(particles[j].x - particles[i].x)
					dist_y = Math.abs(particles[j].y - particles[i].y)
					//console.log(dist_x, dist_y)

					//calculate acceleration vectors
					if (dist_x != 0){
						var a_x = (particles[i].r) / Math.pow(dist_x, 2)
					}
					else {
						var a_x = 0
					}

					if (dist_y != 0){
						var a_y = (particles[i].r) / Math.pow(dist_y, 2)
					}
					else {
						var a_y = 0
					}


					var middle_x = dist_x/2
					var middle_y = dist_y/2
					//check for collision
					if(dist_x < radius && dist_y < radius){
						particles[j].merged = true
						console.log(j+" merged")
					}

					if(!particles[j].merged){
						//if first particle is to the left of the second,
						//accelerate it to the right and vice versa
						if (particles[i].x < particles[j].x){
							particles[i].v_x += (a_x * time)
							particles[j].v_x -= (a_x * time)
						}
						else {
							particles[i].v_x -= (a_x * time)
							particles[j].v_x += (a_x * time)
						}
						//if first particle is above the second,
						//accelerate it down and vice versa
						if (particles[i].y < particles[j].y){
							particles[i].v_y += (a_y * time)
							particles[j].v_y -= (a_y * time)
						}
						else {
							particles[i].v_y -= (a_y * time)
							particles[j].v_y += (a_y * time)
						}
					}
					else {
						//bring the two together
						if (particles[i].x < particles[j].x){
							particles[i].x += middle_x
							particles[j].x -= middle_x
						}
						else {
							particles[i].x -= middle_x
							particles[j].x += middle_x
						}
						if (particles[i].y < particles[j].y){
							particles[i].y += middle_y
							particles[j].y -= middle_y
						}
						else {
							particles[i].y -= middle_y
							particles[j].y += middle_y
						}

						if(particles[j].initial_merge){
							merged_v_x = particles[j].v_x+particles[i].v_x
							merged_v_y = particles[j].v_y+particles[i].v_y

							particles[i].v_x = merged_v_x
							particles[j].v_x = merged_v_x
							particles[i].v_y = merged_v_y
							particles[j].v_y = merged_v_y

							particles[j].r += 2/3 * radius
							particles[i].r += 2/3 * radius
							particles[j].initial_merge = false
						}
					}

				//console.log(particles[i].v_x, particles[i].v_y)
				}
			}
			//check to make sure particles are in box
			//if they aren't, turn them around
			if(particles[i].x < 0){
				particles[i].x = 0
				particles[i].v_x = -particles[i].v_x/2
				console.log(i+ " brought back")
			}
			if(particles[i].x > W){
				particles[i].x = W
				particles[i].v_x = -particles[i].v_x/2
				console.log(i+ " brought back")
			}
			if(particles[i].y < 0){
				particles[i].y = 0
				particles[i].v_y = -particles[i].v_y/2
				console.log(i+ " brought back")
			}
			if(particles[i].y > H){
				particles[i].y = H
				particles[i].v_y = -particles[i].v_y/2
				console.log(i+ " brought back")
			}


		}

		//after calculating all velocities,
		//then change the position of eacch particle
		for(i=0; i<max; i++){
			particles[i].x += (particles[i].v_x * time)
			particles[i].y += (particles[i].v_y * time)
		}

	}
	var isRunning = setInterval(draw, time*5)
}


function gravSimV2() {
	console.log("new")
	if (canvasExists){
        var oldCanvas = document.getElementById('canvas')
        document.body.removeChild(oldCanvas)
        console.log('canvas removed')
        clearInterval(isRunning)
    }
    //canvas init
	var canvas = document.createElement('canvas')
    document.body.append(canvas)
    canvas.id = 'canvas'
    canvasExists= true
    var ctx = canvas.getContext('2d')

	//canvas dimensions
	var W = window.innerWidth*3/4
	var H = window.innerHeight*3/4
	canvas.width = W
	canvas.height = H
	$(window).scrollTop($('canvas').offset().top);

	var time = 10
	var max = 10
	var scale = 20
	var radius = 20
	var particles = []
	var velocities = []
	var accelerations = []
	var times = []
	var currentTime = 0
	for(let i=0; i<max; i++){
		particles.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: radius + Math.random()*20,
			color: 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.5)',
			v_x: 0,
			v_y: 0,
			a_x: 0,
			a_y: 0,
			merged: false,
			initial_merge: true
		})
		console.log(particles[i])
	}

	function draw() {
		ctx.clearRect(0,0,W,H)

		for (var i = 0; i<max; i++){
			ctx.beginPath()
			//ctx.fillStyle = "rgba(particles[i].color_r, particles[i].color_g, particles[i].color_b, 0.5)"
			ctx.fillStyle = particles[i].color
			let p = particles[i]
			ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI)

			ctx.fill()
			ctx.moveTo(p.x, p.y)
			//ctx.beginPath()
			ctx.strokeStyle = "yellow"
			ctx.lineWidth = 5
			ctx.lineTo(p.x + p.a_x*10000, p.y + p.a_y*10000)
			//ctx.arc(currentTime/10 - times[i]/10, velocities[i], 5, 0, 2*Math.PI)
			//ctx.fill()
			ctx.stroke()
			//reset accelerations after drawing
			particles[i].a_x = 0
			particles[i].a_y = 0
		}

		update()
	}

	var dist_x
	var dist_y
	//var notMerged = true
	var merged_v_x
	var merged_v_y
	var speed = 1

	function update() {
		// calculate accelerations
		for (var i = 0; i<max; i++){
			for (var j = 0; j<max; j++){
				if(j >= i){ // lower left triangle
					dist_x = particles[j].x - particles[i].x
					dist_y = particles[j].y - particles[i].y

					dist = Math.sqrt(dist_x**2 + dist_y**2)
					theta = Math.atan2(dist_y, dist_x)

					//calculate acceleration vectors
					if (dist != 0){
						var a = -(particles[i].r) / Math.pow(dist, 2)
					}
					else {
						var a = 0
					}

					particles[j].a_x += a*Math.cos(theta)
					particles[j].a_y += a*Math.sin(theta)

				}
			}
		}

		//after calculating all accelerations, calculate velocities,,
		//then change the position of eacch particle
		for(i=0; i<max; i++){
			particles[i].v_x += (particles[i].a_x * time)
			particles[i].v_y += (particles[i].a_y * time)

			// particles[i].x += ((particles[i].v_x + particles[i].v0_x)/2 * time)
			// particles[i].y += ((particles[i].v_y + particles[i].v0_y)/2 * time)
			particles[i].x += (particles[i].v_x * time)
			particles[i].y += (particles[i].v_y * time)
			// particles[i].v0_x = particles[i].v_x
			// particles[i].v0_y = particles[i].v_y

			if(particles[i].x < 0){
				particles[i].x = 0
				particles[i].v_x = -particles[i].v_x*2/3
				//console.log(i+ " brought back")
			}
			if(particles[i].x > W){
				particles[i].x = W
				particles[i].v_x = -particles[i].v_x*2/3
				//console.log(i+ " brought back")
			}
			if(particles[i].y < 0){
				particles[i].y = 0
				particles[i].v_y = -particles[i].v_y*2/3
				//console.log(i+ " brought back")
			}
			if(particles[i].y > H){
				particles[i].y = H
				particles[i].v_y = -particles[i].v_y*2/3
				//console.log(i+ " brought back")
			}

		}

		//check for collision
		for (var i = 0; i<max; i++){
			for (var j = 0; j<max; j++){
				if (j>i){
					let dist_x = Math.abs(particles[i].x - particles[j].x)
					let dist_y = Math.abs(particles[i].y - particles[j].y)
					let middle_x = dist_x/2
					let middle_y = dist_y/2

					if(Math.sqrt(dist_x**2 + dist_y**2) < 1.5*radius){
						particles[j].merged = true
						//console.log(j+" merged, " + particles[j].initial_merge)
						//bring the two together
						if (particles[i].x < particles[j].x){
							particles[i].x += middle_x
						}
						else {
							particles[i].x -= middle_x
						}
						if (particles[i].y < particles[j].y){
							particles[i].y += middle_y
						}
						else {
							particles[i].y -= middle_y
						}

						merged_v_x = (particles[j].v_x*particles[j].r+particles[i].v_x*particles[i].r)/(particles[i].r+particles[j].r)
						merged_v_y = (particles[j].v_y*particles[j].r+particles[i].v_y*particles[i].r)/(particles[i].r+particles[j].r)

						particles[i].v_x = merged_v_x
						particles[i].v_y = merged_v_y

						let new_r = Math.sqrt(particles[i].r**2 + particles[j].r**2)
						particles[i].r = new_r

						//once particles are merged, get rid of one
						particles.splice(j,1)
						max -= 1

					}
				}

			}
		}
	}

	var isRunning = setInterval(draw, time*5)
}
