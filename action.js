let consent=prompt("Ready to play game \n y/n: ");
if(consent=='y'){
    let iswin=false;
    let hint;
let max=prompt("Enter the max number: ");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the Number: ");
while((guess.toLowerCase())!="quit"){
    if(guess==random){
        console.log("Congratulation, correct guess..");
        alert("Congratulation, correct guess..");
        iswin=true;
        break;
    }else{
        let avg=(parseInt(max)+1)/2;
        if(Math.abs(random-parseInt(guess))<avg){
            if(Math.abs(random-parseInt(guess))<5){
            hint="too close to";
            }else{
                hint="close to"; 
            }
        }else if(Math.abs(random-parseInt(guess))>avg){
            hint="far from"
        }
        guess=prompt(` Wrong guess\n Try Again:\n\n Hints: Previous guess is ${hint} actual number `);

    }
}

    consent=prompt("want to quit? \n y/n")
    if(consent=='y'){
    alert("Thanks you!")
    }else{
        alert("Refresh the page.To restart the game.")
    }

}