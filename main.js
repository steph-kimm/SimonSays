 let playerName ;

 function setName(){
    event.preventDefault()
    playerName = document.getElementById("playerName").value;
    console.log(playerName)
    document.querySelector("#intro").style.display = "none";

    //start the game 
    setCompMoves()
    playCompMoves()
 }

 let colors={
     yellow: "lightgoldenrodyellow",
     blue: "lightblue",
     red: "pink",
     green: "lightgreen"
 }

 let possibleMoves= ["yellow" , "blue" , "red" , "green"]
 let compMoves= [] ;
 function setCompMoves(){
    for(let i = 0 ; i < 4 ; i++){
        let randomNum = Math.floor(Math.random()*4) ;
        compMoves.push(possibleMoves[randomNum])
    }

    console.log(compMoves)
 }

 let compTimer = 2000
 function playCompMoves(){
    for(let i =0; i < compMoves.length ; i++){
        let color = compMoves[i]
        
        
        setTimeout(function() {
            console.log("waiting...")
            playMove(color)

        }, compTimer);
        //pause()
        compTimer += 2000;
    }
 }
 let backTimer = 1500;
 function playMove(color){
    document.getElementById(color).style.background = colors[color]
    setTimeout(function() {
        document.getElementById(color).style.background = color
        
    }, backTimer);
    //backTimer+= 1500
 }

//  function pause(){
//     setTimeout(function() {
//         console.log("waiting...")
//     }, 2000);
//  }
let points = 0;
let playerMoves = []
function addBlue(){
    playerMoves.push("blue")
    console.log(playerMoves)
    if(checkMove()){ // if they are right 
        points++
        console.log("running..")
        document.getElementById("points").innerHTML = "Points: " + points
        
        if(playerMoves.length == compMoves.length){
            addCompMove()
            playCompMoves()
            playerMoves = []
        }
    }else{
        document.getElementById("points").innerHTML = "Game Over! You got " + points + " points!"
    }
    console.log(checkMove())
}
function addGreen(){
    playerMoves.push("green")
    console.log(playerMoves)
    if(checkMove()){ // if they are right 
        points++
        console.log("running..")
        document.getElementById("points").innerHTML = "Points: " + points
        if(playerMoves.length == compMoves.length){
            addCompMove()
            playCompMoves()
            playerMoves = []
        }
        //document.getElementById("status").innerHTML = "Wait for Simon's Turn..."
    }else{
        document.getElementById("points").innerHTML = "Game Over! You got " + points + " points!"
    }
    console.log(checkMove())
}
function addRed(){
    playerMoves.push("red")
    console.log(playerMoves)
    if(checkMove()){ // if they are right 
        points++
        console.log("running..")
        document.getElementById("points").innerHTML = "Points: " + points
        if(playerMoves.length == compMoves.length){
            addCompMove()
            playCompMoves()
            playerMoves = []
        }
    }else{
        document.getElementById("points").innerHTML = "Game Over! You got " + points + " points!"
    }
    console.log(checkMove())
}
function addYellow(){
    playerMoves.push("yellow")
    console.log(playerMoves)
    if(checkMove()){ // if they are right 
        points++
        console.log("running..")
        document.getElementById("points").innerHTML = "Points: " + points
        if(playerMoves.length == compMoves.length){
            addCompMove()
            playCompMoves()
            playerMoves = []
        }
    }else{
        document.getElementById("points").innerHTML = "Game Over! You got " + points + " points!"
    }
    console.log(checkMove())
}

//returns true if the move is correct else false 
function checkMove(){
    if(playerMoves[playerMoves.length -1] == compMoves[playerMoves.length -1]) return true;
    else return false 
}

function addCompMove(){
    let randomNum = Math.floor(Math.random()*4) ;
    compMoves.push(possibleMoves[randomNum])
}