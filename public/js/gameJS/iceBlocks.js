hardMap = [
'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
'B  B   B       B      BB X              B B    B  B',
'B    B  B        BB  B   B            B     B     B',
'BBBB B BB   B        B B     B   B  B B B  B      B',
'B     BB  B BB  B           B  BBB B B  BBB B   B B',
'BB          B   B  B                 B   B  B  B BB',
'B  B    B     B               B     BB B          B',
'BB  B  B           B     B            B    B  B   B',
'B      B    B    B      B            B BB B B  B  B',
'B  B  BB B                          B   B   B B   B',
'B     BB B          B   BB   B     B B            B',
'B       B    B        BB          B       BBB     B',
'B  B     BB   B  B        B    BB     B        B BB',
'B    B        BB                B  B  B         BBB',
'B   B                  B   B   B  B      B       BB',
'B       B    BB        B B B    B                BB',
'B    B     B B     B   BBB   BBB                  B',
'B                     B   B  B        B      B   BB',
'BB     B       BB                BB    B  B B     B',
'B       B        B B B        B    B     B        B',
'BB   B     BBB     B  B B     B    B        B   B B',
'B            B     B   B    B   B   B         BB  B',
'B  B             B                B  B BB        BB',
'B  B     BB  B  B B     B B B          B          B',
'B   B  BB           B           B         B       B',
'B    B   B     BB    B          B                 B',
'BB B  B     BB       BBB  B       B  BBB    B     B',
'B        B    B                   B       B    B  B',
'B B BB    B B     B         BB  B  B            B B',
'BBBBBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBB',
'                                                   '
]

mediumMap = [
'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
'B   B         B    BBBBBBB    B    B',
'B  X       B        B    B         B',
'B      B    B         B  B         B',
'B   8        B         BBBB      B B',
'B        B          B B     B      B',
'B  B          B     B       B     BB',
'B      B             B      B     BB',
'B                  B          B    B',
'B   BBBBBB    B                 B  B',
'B         B  B                     B',
'B         B                  B     B',
'B     B                 B          B',
'B    B B      B           B        B',
'BBBBBBBBBBBBBBBBBBBBBBBBBBBBTBBBBBBB'
]

easyMap = [
'BBBBBBBBBBBBBB',
'B      X  B  B',
'B   B        B',
'B   B    B   B',
'B  B      B  B',
'B            B',
'B            B',
'B     B      B',
'B      B     B',
'B  B         B',
'B           BB',
'B  B         B',
'B          B B',
'BBBBBBBBBTBBBB'
]

var canvasWD = 100;
var canvas, ctx;
var yellow = "#F1DB4B"
var iceBlue = "#DBFCFF"
var fadedYellow = "#EEFCCE"
var background = "black"
var myPos, target
var time, moves
var locked = false
$(document).ready(function(){
	width = $(document).width()
	height = $(document).height()
	if (width <= 480 || height <= 480) {
		// mobile
		if (width*0.75 >= height*0.75)	{
			canvasWD = height*0.75
		}
		else {
			canvasWD = width*0.75
		}
	}
	else {
		if (width*0.6 >= height*0.6)	{
			canvasWD = height*0.6
		}
		else {
			canvasWD = width*0.6
		}
	}
	console.log(canvasWD)
	$("#canvas-wrapper").append(`<canvas id="myCanvas" width=${canvasWD} height=${canvasWD}></canvas>`)

	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	ctx.strokeStyle = iceBlue;
	console.log(ctx)
})

$('#myCanvas').ready(function(){
	setupBoard('easy')
})

function setupBoard(level){
	switch (level) {
		case 'easy':
			map = easyMap
			break;
		case 'medium':
			map = mediumMap
			break;
		case 'hard':
			map = hardMap
			break;
		default:
			return
	}
	//clear map
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//draw map
	scale = canvasWD/map[0].length
	console.log(map)
	console.log(scale)
	for (i=0; i<map.length; i++){
		row = map[i]
		for (j=0; j<row.length; j++){
			if (row[j] == "B") {
				pos = [(i+0.5)*scale, (j+0.5)*scale]
				//console.log(pos)
				ctx.beginPath();
				ctx.arc(pos[1],pos[0],scale/2.2,0,2*Math.PI);
				ctx.stroke();
			}
			else if (row[j] == "X") {
				myPos = [i,j]
			}
			else if (row[j] == "T") {
				target = [i,j]
			}
		}
	}
	//draw character
	//myPos = [1,25]
	//target = [29,25]
	time = 0
	moves = 0
	drawCharacter(myPos)
	updateScore(time, moves)
}
	// for x in map:
	// 	print(x)
	//
	// while True:
	//
	// 	move = input("move: ")
	// 	temp = map[pos[0]][:pos[1]] + ' ' + map[pos[0]][pos[1]+1:]
	// 	map[pos[0]] = temp
	//
	// 	if move == 'u':
	// 		if map[pos[0] - 1][pos[1]] == 'B':
	// 			continue
	// 		else:
	// 			while map[pos[0] - 1][pos[1]] != 'B':
	// 				pos[0] = pos[0] - 1
	// 				time += 1
	// 			time += 60
	// 	elif move == 'd':
	// 		if map[pos[0] + 1][pos[1]] == 'B':
	// 			continue
	// 		else:
	// 			while map[pos[0] + 1][pos[1]] != 'B':
	// 				pos[0] = pos[0] + 1
	// 				time += 1
	// 			time += 60
	// 	elif move == 'l':
	// 		if map[pos[0]][pos[1] - 1] == 'B':
	// 			continue
	// 		else:
	// 			while map[pos[0]][pos[1] - 1] != 'B':
	// 				pos[1] = pos[1] - 1
	// 				time += 1
	// 			time += 60
	// 	elif move == 'r':
	// 		if map[pos[0]][pos[1] + 1] == 'B':
	// 			continue
	// 		else:
	// 			while map[pos[0]][pos[1] + 1] != 'B':
	// 				pos[1] = pos[1] + 1
	// 				time += 1
	// 			time += 60
	//
	// 	temp = map[pos[0]][:pos[1]] + 'X' + map[pos[0]][pos[1]+1:]
	// 	map[pos[0]] = temp
	//
	// 	print('time ', time)
	// 	for x in map:
	// 		print(x)
	// 	if pos == target:
	// 		print("WINNER")
	// 		break
	//
	// print(time)
function drawCharacter(position){
	ctx.fillStyle = yellow;

	ctx.beginPath();
	ctx.arc((position[1]+0.5)*scale,(position[0]+0.5)*scale,scale/2.1,0,2*Math.PI);
	//ctx.stroke();
	ctx.fill();
}
function clearCharacter(position){
	ctx.strokeStyle = fadedYellow;
	ctx.fillStyle = background;
	ctx.beginPath();
	ctx.arc((position[1]+0.5)*scale,(position[0]+0.5)*scale,scale/2.2,0,2*Math.PI);
	ctx.fill();
	//ctx.stroke();
}

function updateScore(){
	$("#time").text(time)
	$("#moves").text(moves)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function slide(direction){
	locked = true
	switch (direction) {
		case "d":
			movementVector = [1,0]
			break;
		case "u":
			movementVector = [-1,0]
			break;
		case "l":
			movementVector = [0,-1]
			break;
		case "r":
			movementVector = [0,1]
			break;
		default:
			movementVector = [0,0]
	}

	for (moveTo = [myPos[0]+movementVector[0], myPos[1]+movementVector[1]]; map[moveTo[0]][moveTo[1]] != "B"; 	moveTo = [myPos[0]+movementVector[0], myPos[1]+movementVector[1]]
){
		clearCharacter(myPos)
		myPos = moveTo
		drawCharacter(myPos)
		time += 1;
		await sleep(50);
		if (myPos[0] == target[0] && myPos[1] == target[1]){
			alert("WINNER!")
			break
		}
		updateScore()
	}
	console.log("boulder")
	time += 60;
	moves += 1;
	updateScore()
	locked = false
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented || locked) {
    return; // Do nothing if the event was already processed
		//or movement is currently locked
  }
	console.log(event.key)
  switch (event.key) {
    case "ArrowDown":
		case "s":
      slide("d")
			break;
    case "ArrowUp":
		case "w":
			slide("u")
      // code for "up arrow" key press.
      break;
    case "ArrowLeft":
		case "a":
			slide("l")
      break;
    case "ArrowRight":
		case "d":
			slide("r")
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown || locked) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
						slide("l")
        } else {
            /* right swipe */
						slide("r")
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
						slide("u")
        } else {
            /* down swipe */
						slide("d")
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
