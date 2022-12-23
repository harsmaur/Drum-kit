
//document.querySelector("button").addEventListener("click",handle_click);
//() is not added while calling  the function just so that it
//doesnt get triggered
//when the browser loads the index.js file but when a
//click is encountered

// function handle_click(){
//   alert("I got clicked! ");
// }
var num_of_btns = document.querySelectorAll(".drum").length;


function checkforkey(key){
  switch (key) {
    case "w":

        var crash = new Audio("sounds/crash.mp3");
        crash.play();

      break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
       break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
       break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
       break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
       break;

    case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
       break;

    case "l":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    default:
    console.log(buttonInnerHTML);

  }
}


//mouse clicks
function handle_click(){

    this.style.color = "white";  // this is the current object instance like c++ this
    var buttonInnerHTML= this.innerHTML;  //stored the button inner html eg: w
    checkforkey( buttonInnerHTML);   //CALLED THE KEY PRESS FUNCTION HERE
    ButtonAnimation( buttonInnerHTML);
}


for(var i =0; i < num_of_btns; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handle_click);

}

//for keypresses
document.addEventListener("keydown", function(event){  //here function() is a anonymous function
checkforkey(event.key);
ButtonAnimation(event.key);


});


function ButtonAnimation(currentkey){
var active_button = document.querySelector("."+currentkey);
    active_button.classList.add("pressed");

    setTimeout(function(){
      active_button.classList.remove("pressed");
    }, 100);
}
