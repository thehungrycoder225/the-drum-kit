let btn = document.querySelectorAll(".drum");
let audio;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let btnInnerHtml = this.innerHTML;
    keyClick(btnInnerHtml);
    btnAnimate(btnInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  keyPressed(event.key);
  btnAnimate(event.key);
});

function keyPressed(key) {
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function keyClick(btnInnerHtml) {
  switch (btnInnerHtml) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function btnAnimate(currentKey) {
  let btnActive = document.querySelector("." + currentKey);
  btnActive.classList.add("active");
  setTimeout(function () {
    btnActive.classList.remove("active");
  }, 100);
}
