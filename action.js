let movie='Kalki';
let consent=prompt("Want to start game: \n y/n")
if(consent.toLowerCase()=='y'||consent.toLowerCase()=='yes'){
let guess=prompt("Guess the movie: ");
guess=guess.toLowerCase();
movie=movie.toLowerCase();
let close=false;
while(guess!==movie){
    console.log("Wrong guess....");
    guess=prompt("Try Again, \n Guess the movie: ");
    if(guess=='quit'){
        close=true;
        break;
    }
}
if(!close){
    alert("Congatulation, correct guess....")
    console.log("Congatulation, correct guess....");
}
}else{
    alert("Okay,\n Just refresh the page. If you want to play... \n\n");
}