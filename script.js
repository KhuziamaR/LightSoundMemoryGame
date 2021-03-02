// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var strikes = 0
var pattern = []
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.6;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikesElement = document.getElementById("strikesLabel")
var timer = document.getElementById('counter');
var timerId = setInterval(function(){ countdown(); },1000);

for(var i=0;i<6;i++){
  pattern.push(Math.floor(Math.random() * 8) + 1) 
}

function startGame(){
    //initialize game variables
    if (timer.innerHTML == 0){
      var timerId = setInterval(function(){ countdown(); },1000);
    }
    clueHoldTime = 1000
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    timer.innerHTML = parseInt("15"); 
}

function stopGame(){
    
    if (timer.innerHTML == 0){
      var timerId = setInterval(function(){ countdown(); },1000);
    }
    clueHoldTime = 1000
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");  
    strikes = 0
    strikesElement.innerHTML = ""+strikes
    timer.innerHTML = parseInt("15");
}

// Sound Synthesis Functions
const freqMap = {
  1: 650,
  2: 550,
  3: 300,
  4: 250,
  5: 500,
  6: 600,
  7: 480,
  8: 220
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}
// lighting or clearning button functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// playing a single clue 
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function countdown() {
    timer.innerHTML = parseInt(timer.innerHTML)-1;
    if (parseInt(timer.innerHTML)==0) {
       clearInterval(timerId);
    }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    // speed it up 
    if (clueHoldTime > 500){
      clueHoldTime = clueHoldTime - 90
    }else if(clueHoldTime > 300){
      clueHoldTime = clueHoldTime - 45
    }else if(clueHoldTime > 80){
      clueHoldTime = clueHoldTime - 30
    } 
  }  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!")
}
function guess(btn){  
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (parseInt(timer.innerHTML) <= 0){
    strikes++
    if (strikes >=3){
      loseGame();
    }
  }
  // add game logic here
  if (pattern[guessCounter] != btn){
    strikes++
    strikesElement.innerHTML = ""+strikes
    //Guess was incorrect
    //GAME OVER: LOSE!
    if (strikes < 3){
      progress++;
      playClueSequence();
    }else{
      loseGame();
    }
    }
  if(pattern[guessCounter] == btn){
    //Guess was correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
        timer.innerHTML = parseInt(15);
        

      }
    }else{
      //so far so good... check the next guess
      
      guessCounter++;
    }
  }
}
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
