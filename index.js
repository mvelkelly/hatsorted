var buttons = document.querySelectorAll(".house");
var hat     = document.querySelector(".hat");
var ranNum  = Math.floor(Math.random() * 4);
var hufflepuff = document.querySelectorAll(".hufflepuff");
var slytherin = document.querySelectorAll(".slytherin");
var ravenclaw = document.querySelectorAll(".ravenclaw");
var gryffindor = document.querySelectorAll(".gryffindor");
console.log(ranNum);



var arr = ["hufflepuff", "gryffindorf", "ravenclaw", "slytherin"];
var addRand = arr[ranNum];

for(var i = 0; i < arr.length; i++) {
  hat.addEventListener("click", function() {
    if(addRand === "hufflepuff") {
      var hufflepuff = new Audio("sounds/Hufflepuff.mp3");
      hufflepuff.play();
    } else if (addRand === "gryffindorf") {
      var gryffindorf = new Audio("sounds/gryffindor.mp3");
      gryffindorf.play();
    } else if (addRand === "ravenclaw") {
      var ravenclaw =   new Audio("sounds/ravenclaw.mp3");
      ravenclaw.play();
    } else if(addRand === "slytherin") {
      var slytherin  = new Audio("sounds/slytherin.mp3");
      slytherin.play();
    }
    reload();
  });
}


function reload(){
  setTimeout(function(){
    window.location.reload();
  }, 10000);
}
// for(var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     var buttonInnerhtml = this.innerHTML;
//     switch(buttonInnerhtml) {
//
//     }
//   });
// }
