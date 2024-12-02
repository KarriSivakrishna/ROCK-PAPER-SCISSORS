let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
 console.log(" THE GAME WAS DRAW");
 msg.innerText="Game draw play again";
 msg.style.backgroundColor="Green";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you WIN");
        msg.innerText=`you WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="blue";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you LOOSE");
        msg.innerText=`you LOOSE!  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}



const playGame =(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);
     
    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;

        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};



choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const  userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});
