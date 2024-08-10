let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["red", "green", "yellow", "purple"];

document.addEventListener("keypress", function() {
    if (!start) {
        console.log("Game is started");
        start = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn flash
    let renIdx = Math.floor(Math.random() * btns.length);  
    let renClr = btns[renIdx];
    let renBtn = document.querySelector(`.${renClr}`);
    gameSeq.push(renClr);
    console.log(gameSeq);
    btnFlash(renBtn);  // pass the button element correctly
}

function checkAns (idx){
    // console.log("current level is ", level );
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp, 1000);
        }
    }else {
        console.log("diff value");
        h2.innerHTML = `Game is over! Your score was <b>${level-1} </b> </br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnPress(){
    let btn = console.log(this);
    userFlash(this); 

    userColor = this.getAttribute('id');
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}