var highScore = 0
var canvasExists = false
var paused = true
var firstPress = true

function startGame(){
    console.log("something happened")
    //canvas init 
    if (canvasExists){
        var oldCanvas = document.getElementById('canvas')
        document.body.removeChild(oldCanvas)
        //console.log('canvas removed')
    }
    var canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    document.body.append(canvas)
    canvasExists = true

    var ctx = canvas.getContext('2d')

    //canvas dimensions
    var W = window.innerWidth
    var H = window.innerHeight
    canvas.width = W -50
    canvas.height = H -100
    $(window).scrollTop($('canvas').offset().top)

    var mouseX = 0
    var mouseY = 0
    var score = 0

    canvas.addEventListener('mousemove', function(evt) {
        let rect = canvas.getBoundingClientRect()
        mouseX = evt.clientX - rect.left
        mouseY = evt.clientY - rect.top
        }, false);
    
    document.addEventListener("keydown", function(event) {
        console.log(event.key)
        if(event.key == 'q'){
            if(firstPress){
                paused = true
                ctx.font = '64pt Genome'
                ctx.fillStyle = 'red'
                ctx.fillText('PAUSED', W/2 - 190, 275)
                firstPress = false
            }
            else{
                paused = false
                firstPress = true
            }
        }
    })

    //cubesats init
    // Create sprite sheet
    ELFIN = new Image();    
    
    // Create sprite
    cubesat = sprite({
        context: canvas.getContext("2d"),
        width: 128,
        height: 32,
        image: ELFIN,
        numberOfFrames: 4,
        ticksPerFrame: 4
    });

    var max = document.getElementById('slider').value * 6
    var scale = 12
    var cubesats = []
    for(let i=0; i<max; i++){
        cubesats.push({
            x: Math.random()* W * 3/4,
            y: Math.random()*H,
            r: 16,
            d: Math.random()*max //density
        })
        console.log(cubesats[i])
    }

    let timer = 3
    countdown(canvas, timer)

    //draw cubesats
    for(let i=0; i<max; i++){
    var cubesat,
        ELFIN,
        canvas;                 
    var x = 0
    var y = 0
    
    function gameLoop () {
    
      window.requestAnimationFrame(gameLoop);

      updatePos()
      checkCrash()
      showScore()
          
      cubesat.update();
      cubesat.render();

    }
    
    function sprite (options) {
    
        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;
        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        
        that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;
                
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {  
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }

            //console.log("updated")
        };
        
        that.render = function () {
        
          // Clear the canvas
          that.context.clearRect(s.x, s.y, that.width, that.height);

          // Draw the animation
          that.context.drawImage(
            that.image,
            frameIndex * that.width / numberOfFrames,
            0,
            that.width / numberOfFrames,
            that.height,
            x, //x coordinate on canvas
            y, // y ^
            that.width / numberOfFrames,
            that.height);
        };
        
        return that;
    }
    
    // Load sprite sheet
    ELFIN.addEventListener("load", gameLoop);
    ELFIN.src = "../Images/ELFIN.png";          
    }

    function updatePos(){
        angle=0
        for(var i = 0; i < max; i++){
            angle = (i + 1) * Math.PI / 4
            var s = stars[i]
            if(s.x < W/10){
                s.x += 50*Math.sin(Math.PI*0.8*s.x/W)
            }
            else{
                s.x += 25*Math.sin(Math.PI*0.8*s.x/W)
            }
            s.y += (15*Math.sin(s.y/H))
            
            //check if star is out of frame
            if(s.x>W+5 || s.y>H){
                stars[i] = {x: Math.random()*W/4, y: Math.random()*H, r: s.r, d: s.d}
                //score increases for each meteor(star) that goes out of frame
                score++
            }
        }
    }

    function checkCrash() {
        //rectangle around piece
        let myGamePiece = {
            top: mouseY - scale,
            bottom: mouseY + scale, 
            left: mouseX - scale,
            right: mouseX + scale
        }
        //check for crossing with rectangle around stars
        for (let i = 0; i<max; i++){
            let p = myGamePiece
            let s = stars[i]
            s.top = s.y - s.r
            s.bottom = s.y + s.r
            s.left = s.x - s.r*5
            s.right = s.x + s.r
            if (p.top < s.bottom && p.bottom > s.top && p.left < s.right && p.right > s.left){
                endGame(canvas, "Game Over!")
                clearInterval(isRunning)
            }
        }
    }

    function showScore(canvas) {
        ctx.font = '32pt Genome'
        ctx.fillStyle = 'white'
        ctx.fillText('Score: ' + score, (W-300), 100)
        updateHighScore()
        ctx.fillText('High Score: ' + highScore, (W-400), 50)
    }

    function countdown(canvas, timer) {
        ctx.font = '64pt Genome'
        ctx.fillStyle = 'red'
            var countdownRunning = setInterval(function() {
                if(timer>0){
                    ctx.clearRect(0,0,W,H)
                    ctx.fillText(timer, W/2, H/2)
                    timer--
                }
                else{
                    paused = false
                    clearInterval(countdownRunning)
                }
            }, 950)
    }

    function updateHighScore(){
        if (score > highScore) {
            highScore = score
        }
    }

    function endGame(canvas, message) {
        ctx.font = '64pt Genome'
        ctx.fillStyle = 'red'
        ctx.fillText(message, W/2 - 240, 275)
    }  

    //loop animation
    let isRunning = setInterval(draw, 20)
}

function updateSlider() {
    let value = document.getElementById('slider').value
    document.getElementById('sliderValue').innerHTML = 'Level ' + value
}
