
function battle(){
ranNum=Math.floor(Math.random()*6)+1;

if (ranNum===1){
document.getElementsByClassName("img1")[0].src="images/dice1.png";}

if (ranNum===2){
document.getElementsByClassName("img1")[0].src="images/dice2.png";}

if (ranNum===3){
document.getElementsByClassName("img1")[0].src="images/dice3.png";}

if (ranNum===4){
document.getElementsByClassName("img1")[0].src="images/dice4.png";}

if (ranNum===5){
document.getElementsByClassName("img1")[0].src="images/dice5.png";}

if (ranNum===6){
document.getElementsByClassName("img1")[0].src="images/dice6.png";}

ranNum2=Math.floor(Math.random()*6)+1;

if (ranNum2===1){
document.getElementsByClassName("img2")[0].src="images/dice1.png";}

if (ranNum2===2){
document.getElementsByClassName("img2")[0].src="images/dice2.png";}

if (ranNum2===3){
document.getElementsByClassName("img2")[0].src="images/dice3.png";}

if (ranNum2===4){
document.getElementsByClassName("img2")[0].src="images/dice4.png";}

if (ranNum2===5){
document.getElementsByClassName("img2")[0].src="images/dice5.png";}

if (ranNum2===6){
document.getElementsByClassName("img2")[0].src="images/dice6.png";}

if (ranNum>ranNum2){
document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
}

else if (ranNum<ranNum2){
document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
}

else{
document.getElementsByTagName("h1")[0].innerHTML="Tie!";
}}
