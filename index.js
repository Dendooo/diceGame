var randomNumber1 = Math.floor(Math.random() * 6 + 1);// random 1-6

var randomDice1 = "dice" + randomNumber1 + ".png";// dice file dice1.png - dice6.png

var randomImage1 = "images/" + randomDice1; // changing source images/dice1.png-dice6.png

var image = document.querySelectorAll("img")[0];// select first pict

image.setAttribute("src", randomImage1)

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomDice2;

document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "You Win!"
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Computer Win!"
}

else {
  document.querySelector("h1").innerHTML = "Oops.. Draw"
}
