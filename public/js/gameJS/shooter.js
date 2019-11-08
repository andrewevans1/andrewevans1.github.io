var canvasWD = 100;
var canvas, ctx;
var yellow = "#F1DB4B"
var iceBlue = "#DBFCFF"
var fadedYellow = "#EEFCCE"
var background = "black"
var myPos, target
var time, moves
var locked = false

class Game {

  constructor() {
    //set up canvas
    let width = $(document).width()
    let height = $(document).height()
    this.width = width
    this.height = height
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
  	this.ctx = ctx = canvas.getContext("2d");
  	ctx.strokeStyle = iceBlue;
    //clear map
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //get dimensions
    let scaleW = canvas.width/100;
    let scaleH = canvas.height/100;

    //set up game logic
    this.difficulty = 'easy'

    //init character
    let startPos = [50*scaleW, 95*scaleH];
    let health = 100;
    this.hero = new Hero(ctx, this, startPos, scaleW*5, scaleH*5, health);

    this.enemies = []
    /*let numEnemies = 5
    for (var i = 0; i < numEnemies; i++) {
      startPos = [scaleW/(numEnemies-i-0.5), scaleH*5]
      this.enemies.push(new Enemy(ctx, startPos, scaleW*5, scaleW*5))
    }*/
    this.projectiles = []

    this.timer = setInterval( () => {
      this.ctx.clearRect(0,0,this.width, this.height)
      this.hero.render()
      for (let i = 0; i < this.enemies.length; i++){
        this.enemies[i].render()
      }
      for (let i = 0; i < this.projectiles.length; i++){
        this.projectiles[i].render()
      }
    }, 500)
  }

  updateScore(){
  	$("#time").text(time)
  	$("#moves").text(moves)
  }

}
class Hero {

  constructor(context, parent, startPos, width, height, hp) {
    this.ctx = context;
    this.parent = parent;
    this.pos = startPos;
    this.width = width;
    this.height = height;
    this.hp = hp;
    this.speed = 10;
    this.render();
  }

  move(direction) {
    this.clear()
    let movementVector = [0,0] //x,y
    switch (direction) {
  		case "d":
  			movementVector = [0,1]
  			break;
  		case "u":
  			movementVector = [0,-1]
  			break;
  		case "l":
  			movementVector = [-1,0]
  			break;
  		case "r":
  			movementVector = [1,0]
  			break;
  		default:

  	}
    this.pos = [this.pos[0] + movementVector[0]*this.speed,
                this.pos[1] + movementVector[1]*this.speed]
    this.render()
  }

  render() {
    ctx.fillStyle = yellow;

  	ctx.beginPath();
  	ctx.arc(this.pos[0] - this.width/2, this.pos[1]-this.height/2,this.width/2.1,0,2*Math.PI);
  	//ctx.stroke();
  	ctx.fill();
  }

  clear() {
    console.log("clearing")
    console.log(this.width)
    ctx.clearRect(this.pos[0] - this.width, this.pos[1]-this.height,
      this.width, this.height)
  }
  shoot(){
    console.log("shoot!")
    let size = 10;
    let direction = [0,-10];
    let speed = 15;
    let shape = "circle";
    this.parent.projectiles.push(new Projectile(this.pos, size, direction, speed, shape))
  }
}

class Enemy{

  constructor(context, startPos, height, width){
    this.ctx = context;
    this.pos = startPos;
    this.height = height;
    this.width = width;
  }

  move(direction) {
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
    this.pos = [this.pos[0] + movementVector[0],
                this.pos[1] + movementVector[1]]
    this.render()
  }

  render() {
    ctx.fillStyle = "red";

  	ctx.beginPath();
  	ctx.arc((position[1]+0.5)*scale,(position[0]+0.5)*scale,scale/2.1,0,2*Math.PI);
  	//ctx.stroke();
  	ctx.fill();
  }
  clear() {
    ctx.clearRect(this.pos[0] - this.width/2, this.pos[1]-this.height/2,
      this.width, this.height)
  }
}

class Projectile {

  constructor(startPos, size, direction, speed, shape) {
    console.log("new projectile")
     this.x = startPos[0]
     this.y = startPos[1]
     this.r = size
     this.direction = direction
     this.speed = speed
     this.shape = shape
     this.render()
     this.clear()

     //this.timer = setInterval(this.move, 1000/this.speed, this)
  }

  clear() {
    ctx.clearRect(this.x - this.r, this.y - this.r,
      this.r*2, this.r*2)
  }

  move(proj) {
    //proj.clear()
    proj.x = proj.x + proj.direction[0]
    proj.y = proj.y + proj.direction[1]
    //proj.render()
  }

  render() {
    if (this.shape == "meteor"){
      ctx.fillStyle = "white"
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.arc(this.x, this.y, this.r, -Math.PI/2, Math.PI/2)

      ctx.moveTo(this.x,this.y-this.r)
      ctx.lineTo(this.x-this.r, this.y-this.r*1.1)
      ctx.lineTo(this.x,this.y)
      ctx.lineTo(this.x-this.r,this.y+this.r*1.1)
      ctx.lineTo(this.x,this.y+this.r)
      ctx.fill()

      let r2 = this.r*7/8
      ctx.beginPath()
      ctx.arc(this.x-r2,this.y, r2, -Math.PI/2, Math.PI/2)
      ctx.moveTo(this.x-r2,this.y-r2)
      ctx.lineTo(this.x-r2*2, this.y-r2*1.1)
      ctx.lineTo(this.x-r2,this.y)
      ctx.lineTo(this.x-r2*2,this.y+r2*1.1)
      ctx.lineTo(this.x-r2,this.y+r2)
      ctx.fill()

      let r3 = r2*7/8
      ctx.beginPath()
      ctx.arc(this.x-r2-r3,this.y, r3, -Math.PI/2, Math.PI/2)
      ctx.moveTo(this.x-r2-r3,this.y-r3)
      ctx.lineTo(this.x-r2-r3*2, this.y-r3*1.1)
      ctx.lineTo(this.x-r2-r3,this.y)
      ctx.lineTo(this.x-r2-r3*2,this.y+r3*1.1)
      ctx.lineTo(this.x-r2-r3,this.y+r3)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(this.x, this.y-r2)
      ctx.lineTo(this.x-this.r*5,this.y)
      ctx.lineTo(this.x, this.y+r2)
      ctx.fill()
      ctx. closePath()
    }
    else if (this.shape == "circle"){
      ctx.fillStyle = "white"
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
      ctx.fill()
    }
  }
}




$('#myCanvas').ready(function(){
	var game = new Game()

  //set up hero control
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented || locked) {
      return; // Do nothing if the event was already processed
      //or movement is currently locked
    }
    console.log(event.key)
    switch (event.key) {
      case "ArrowDown":
      case "s":
        game.hero.move("d")
        break;
      case "ArrowUp":
      case "w":
        game.hero.move("u")
        // code for "up arrow" key press.
        break;
      case "ArrowLeft":
      case "a":
        game.hero.move("l")
        break;
      case "ArrowRight":
      case "d":
        game.hero.move("r")
        break;
      case " ": //space
        game.hero.shoot()
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




/* TODO: Touch control
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

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant
        if ( xDiff > 0 ) {
            // left swipe
						slide("l")
        } else {
            // right swipe
						slide("r")
        }
    } else {
        if ( yDiff > 0 ) {
            // up swipe
						slide("u")
        } else {
            // down swipe
						slide("d")
        }
    }
    // reset values
    xDown = null;
    yDown = null;
};*/
