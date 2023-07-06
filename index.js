function RandomGenerating()
{
    
var randomNum1 = Math.floor(Math.random() * 6 ) + 1;
var randomImage = "dice" + randomNum1 + ".png";
var randomSource1 = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomSource1);


var randomNum2 = Math.floor(Math.random() * 6 ) + 1;
var randomImage = "dice" + randomNum2 + ".png";
var randomSource2 = "images/" + randomImage;

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomSource2);

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw the Game!"
}

}

RandomGenerating(); 