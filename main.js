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

 function playCompMoves(){
    for(let i =0; i < compMoves.length ; i++){
        let color = compMoves[i]
        playMove(color)
        
        setTimeout(function() {
            console.log("waiting...")
        }, 2000);
        //pause()
        
    }
 }

 function playMove(color){
    document.getElementById(color).style.background = colors[color]
 }

//  function pause(){
//     setTimeout(function() {
//         console.log("waiting...")
//     }, 2000);
//  }

 function addCompMove(){

}