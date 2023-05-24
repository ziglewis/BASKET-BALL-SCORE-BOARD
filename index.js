

// I am grabbing all elements i need to manipulate the DOM
const homeScore = document.querySelector("#home-team-score")
const awayScore = document.getElementById("away-team-score")
const allScoreBtns = document.querySelectorAll(".all-score-btns").length //i could take this line off and hardcode 12 into the for loop as i<12 but if anyday an extra button is added and the total class now then equalls 13, all of those buttons greater than my hard coded 12 will not work because the for loop will not iterate to their index. Although this scenerior will be rare.
const timeStartBtn = document.getElementById("time-start-btn")
const timePauseOrEndBtn = document.querySelector(".time-pause-or-end-btn")
const countUpTime = document.querySelector(".timer")
const resetBtn = document.getElementById("RESET-ALL")

// declaring the variables I need for my digital time
let alreadyCounting = false;
let pause = false;
let seconds = 0 ;
let minutes = 0 ;


// This code controls all about adding and subtracting on scoreboard and displaying .
for (let i = 0; i < allScoreBtns ; i++) {
        document.querySelectorAll(".all-score-btns")[i].addEventListener("click", function() {
         if( this.className.includes("away")) { 
              awayScore.textContent = Number(awayScore.textContent) + Number(this.textContent)
         } else{ homeScore.textContent = Number(homeScore.textContent) + Number(this.textContent)
              }
         });
// The code ends here

// the next code controls the start/pause and reset for new game button also the time counting


 function timer() {

     if (pause === true) {return}//this makes the pause to work
     
      alreadyCounting = true ;
      if (seconds === 60) { minutes += 1
               seconds = 0 } ;
          
          let displaySec = 0  // I am saving seconds into this for display
          let displayMin = 0  // I am saving minutes into this for display

          if (seconds < 10){ displaySec = "0" + seconds} 
          else{ displaySec = seconds} ;
          if (minutes < 10){ displayMin = "0" + minutes}
          else{ displayMin = minutes} ;
          
        countUpTime.textContent = displayMin + ":" + displaySec // to give me the format of standard game time
        
        async function secondsCounter() {  
          await new Promise(resolve => setInterval(resolve, 1000));
          seconds += 1 // every 1000 millisecond which is one second, my seconds increases by 1
          timer() ;  // a sort of recursion i.e after every second, repeat the process which will still delay by 1 second. so with that our countupTime keeps running on and on like an infinite loop. Warning never change setInterval to setTimeout, it wont work.
            }
      secondsCounter() // I am invoking the secondsCounter function so it can get to work
        }  } 

        
         timeStartBtn.addEventListener("click", function(){
            if (alreadyCounting === true) {return} //this will prevent the function being called again if its already working by clicking start button again.
            pause = false  // without this, the timer will not continue after a stop or pause.
             timer()    
                 }) ;
             
          timePauseOrEndBtn.addEventListener("click", function(){
             alreadyCounting = false
             pause = true           
                }) ;

                resetBtn.addEventListener("mouseout", function(){
                    alert("If you double clicked, you just reset the score board, you can edit the names of the teams directly also. If not...Are you sure you want to reset the whole game? Every data will be wiped. If YES, double click the Reset button!! If NO, just click Ok to exit this alert message!!")
                       }) ;
                

    // code for real time clock
                setInterval(myTimer, 1000);

                    function myTimer() {
                    const digitalTime = document.querySelector(".display")
                     const date = new Date();
                    digitalTime.textContent = date.toLocaleTimeString(); }
                    
                
    
            // THE VABOSE code for acheiving time 
             
            //  setInterval(function(){
            //               const digitalTime = document.querySelector(".display");
            //               let time = new Date();
            //               let sec = time.getSeconds();
            //               let min = time.getMinutes();
            //               let hr = time.getHours();
            //               let day = 'AM';
            //               if(hr > 12){
            //                 day = 'PM';
            //                 hr = hr - 12;
            //               }
            //               if(hr == 0){
            //                 hr = 12;
            //               }
            //               if(sec < 10){
            //                 sec = '0' + sec;
            //               }
            //               if(min < 10){
            //                 min = '0' + min;
            //               }
            //               if(hr < 10){
            //                 hr = '0' + hr;
            //               }
            //               clock.textContent = hr + ':' + min + ':' + sec + " " + day;
            //             });





 // my initial vabose approach before refactoring WARNING: let it alone

// let homeScore = document.querySelector("#home-team-score")
// let awayScore = document.getElementById("away-team-score")


// let homeAddOne = document.getElementById("home-add-1")
// let homeAddTwo = document.getElementById("home-add-2")
// let homeAddThree = document.getElementById("home-add-3")
// let homeMinusOne = document.getElementById("home-subtract-1")
// let homeMinusTwo = document.getElementById("home-subtract-2")
// let homeMinusThree = document.getElementById("home-subtract-3")
// let allAwayBtns = document.querySelectorAll(".away-score-btns").length

// console.log(allAwayBtns)

// for (let i = 0; i < allAwayBtns ; i++) {
//         document.querySelectorAll(".away-score-btns")[i].addEventListener("click", function() {
//         console.log(this.className)
//         add(Number(this.textContent))
//          });
// }


// function add(buttonValue) {
//     homeScore.textContent = Number(homeScore.textContent) + buttonValue
    
// }

// // homeAddOne.addEventListener("click", function () {
// //     add(1)   
// // })

// // homeAddTwo.addEventListener("click", function () {
// //     add(2)   
// // })



// // awayScore.textContent += 5


