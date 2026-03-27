let sc = 0;
const body = document.body;
const mydiv = document.getElementById("Start");
let button = document.getElementById("EpN");
let startButton = document.createElement("input");
let para1 = document.createElement("p");
let playerName = document.getElementById("playerName");
let nameinput;

para1.innerHTML = "Welcome to a low budget definitely legal sim " + nameinput + ". I suck at exposition (plus have a $0 budget, photos were made in MS paint.) so... have fun. I Guess.";

button.addEventListener('click',function(){nameinput=playerName.value; console.log(nameinput)});
button.addEventListener('click',function(){mydiv.append(para1)});
button.addEventListener('clcick',function(){mydiv.append(startButton)});
// values used at the start of the game or frequently through the game ^

let begining = document.getElementById("begin");

function begin() {
    let clear = document.getElementsByClassName('start');
    while(clear[0]){
        clear[0].parentNode.removeChild(clear[0])
    } //https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    var G = document.getElementById("game"); 
    G.style.display = "block";
    body.style.backgroundImage = "url('Meeting_Room_Jamaica.png')";
    body.style.backgroundSize = "auto 100%";
    body.style.fontWeight = "bold";
}
// Script: https://stackoverflow.com/questions/56111480/how-can-i-hide-a-div-until-a-button-is-clicked

begining.addEventListener('click', begin);

let cont1 = document.getElementById("continue1");
function PoF1(){
    let clear = document.getElementsByClassName('F1');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }
    var G2 = document.getElementById("G2"); 
    G2.style.display = "block";
}
cont1.addEventListener('click',PoF1);


let cont2 = document.getElementById("continue2");
function PoF2(){
    let clear = document.getElementsByClassName('F2');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }
    var G3 = document.getElementById("G3"); 
    G3.style.display = "block";
}
cont2.addEventListener('click',PoF2);


let cont3 = document.getElementById("continue3");
function PoF3(){
    let clear = document.getElementsByClassName('F3');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }
    var ending = document.getElementById("Ending");
    ending.style.display = "block";
}
cont3.addEventListener('click',PoF3);

begining.addEventListener('click',begin);


//actual game

//Fight 1:   
    
let choice1_1 = document.getElementById("choice1-1");
let choice1_2 = document.getElementById("choice1-2");
let choice1_3 = document.getElementById("choice1-3");

let t1;
let t2;
let t3;

let x;
let y;
let z;

choice1_1.addEventListener('click',c11);
choice1_2.addEventListener('click',c12);
choice1_3.addEventListener('click',c13);

choice1_1.addEventListener('click',results1);
choice1_2.addEventListener('click',results1);
choice1_3.addEventListener('click',results1);

function c11(){x=-1/3; F1();t1 = true}
function c12(){x=0; F1();t2 = true}
function c13(){x=2/3; F1();t3 = true}

function results1(){
    if(t1 == true){
        let clear = document.getElementsByClassName('Set1');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C1R")
        choi.innerHTML = "Solid decision, can't go wrong with a classic."
    }else if(t2 == true){
        let clear = document.getElementsByClassName('Set1');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C1R")
        choi.innerHTML = "feeling a little risky, but it could work out."
    }else{
        let clear = document.getElementsByClassName('Set1');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C1R")
        choi.innerHTML = "Not the best choice, but hey, it might work out."
    }
}

function F1(){
    let win1;
    let round;
    let how;
    let ma=Math.random()
    let PoC1 = document.getElementById("PoC1");

    if(x+ma<0.333){
        round=1;
    } else if(x+ma<0.666) {
        round=2;
    } else{
        round=3;
    }

    if (x+ma<0.5){
        win1 = true;
        sc--;
    } else {
        win1 = false;
        sc++;
    }

    if (ma<0.25 && win1==true) {
        how='KO';
    } else if(ma<0.5 && win1==true) {
        how='By decision';
    } else {
        how='Lost';
    }
    console.log(win1, how, sc, round)
    if (win1 == true){        
        PoC1.innerHTML = "vicory by " + how + " in round " + round;
        } else {
        PoC1.innerHTML = "defeat";
    }
    return PoC1
}

//Fight 2:

let choice2_1 = document.getElementById("choice2-1");
let choice2_2 = document.getElementById("choice2-2");
let choice2_3 = document.getElementById("choice2-3");

choice2_1.addEventListener('click',c21);
choice2_2.addEventListener('click',c22);
choice2_3.addEventListener('click',c23);

choice2_1.addEventListener('click',results2);
choice2_2.addEventListener('click',results2);
choice2_3.addEventListener('click',results2);

function c21(){x=-1/3; F2();t1 = true}
function c22(){x=0; F2();t2 = true}
function c23(){x=2/3; F2();t3 = true}

function results2(){
    if(t1 == true){
        let clear = document.getElementsByClassName('Set2');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C2R")
        choi.innerHTML = "Hilariously evil, and definitely effective."
    }else if(t2 == true){
        let clear = document.getElementsByClassName('Set2');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C2R")
        choi.innerHTML = "Staying clean, but it might not be enough to win."
    }else{
        let clear = document.getElementsByClassName('Set2');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C2R")
        choi.innerHTML = "Why would you do this? This is the worst possible choice, and it will probably end in disaster."
    }
}

function F2(){
    let win2;
    let round;
    let how;
    let ma=Math.random()
    let PoC2 = document.getElementById("PoC2");

    if(x+ma<0.333){
        round=1;
    } else if(x+ma<0.666) {
        round=2;
    } else{
        round=3;
    }

    if (x+ma<0.5){
        win2 = true;
        sc--;
    } else {
        win2 = false;
        sc++;
    }

    if (ma<0.25 && win2==true) {
        how='KO';
    } else if(ma<0.5 && win2==true) {
        how='By decision';
    } else {
        how='Lost';
    }
    console.log(win2, how, sc, round)
    if (win2 == true){        
        PoC2.innerHTML = "vicory by " + how + " in round " + round;
        } else {
        PoC2.innerHTML = "defeat";
    }
    return PoC2
}

let choice3_1 = document.getElementById("choice3-1");
let choice3_2 = document.getElementById("choice3-2");
let choice3_3 = document.getElementById("choice3-3");

choice3_1.addEventListener('click',c31);
choice3_2.addEventListener('click',c32);
choice3_3.addEventListener('click',c33);

choice3_1.addEventListener('click',results3);
choice3_2.addEventListener('click',results3);
choice3_3.addEventListener('click',results3);

function c31(){x=-1/3; F3();t1 = true}
function c32(){x=0; F3();t2 = true}
function c33(){x=2/3; F3();t3 = true}

function results3(){
    if(t1 == true){
        let clear = document.getElementsByClassName('Set3');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C3R")
        choi.innerHTML = "Bold and Clever, I like it."
    }else if(t2 == true){
        let clear = document.getElementsByClassName('Set3');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C3R")
        choi.innerHTML = "You Buzzkill, but we'll see."
    }else{
        let clear = document.getElementsByClassName('Set3');
        while(clear[0]){
            clear[0].parentNode.removeChild(clear[0])
        }

        let choi = document.getElementById("C3R")
        choi.innerHTML = "You do realize that you shot YOUR boxer in the leg, right?"
    }
}

function F3(){
    let win3;
    let round;
    let how;
    let ma=Math.random()
    let PoC3 = document.getElementById("PoC3");

    if(x+ma<0.333){
        round=1;
    } else if(x+ma<0.666) {
        round=2;
    } else{
        round=3;
    }

    if (x+ma<0.5){
        win3 = true;
        sc--;
    } else {
        win3 = false;
        sc++;
    }

    if (ma<0.25 && win3==true) {
        how='KO';
    } else if(ma<0.5 && win3==true) {
        how='By decision';
    } else {
        how='Lost';
    }
    console.log(win3, how, sc, round)
    if (win3 == true){        
        PoC3.innerHTML = "vicory by " + how + " in round " + round;
        } else {
        PoC3.innerHTML = "defeat";
    }
    return PoC3
}

function end(){
    let end = document.getElementById("end");
    if (sc==1){
        end.innerHTML = "You lost, but not too bad. You can still work for the mob, but you might want to lay low for a while.";
    } else if (sc==3){
        end.innerHTML = "You royally screwed up, and you definitely are going to die. you might want to start writing your will.";
        body.style.backgroundImage = "url('Player_dead.png')";
        body.style.backgroundSize = "auto 100%";
    } else if (sc==-1){
        end.innerHTML = "Good job, you managed to avoid a disaster. You can keep working for the mob, but you probably won't get any promotions.";
    } else if (sc==-3){
        end.innerHTML = "Excellent work, you've gotten 2 promotions, and you're well on your way to becoming the boss.";
    } else{
        end.innerHTML="error";
    }
}
cont3.addEventListener('click',end);
