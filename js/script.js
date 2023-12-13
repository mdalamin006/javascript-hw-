let mode = document.getElementById("modeChange");

function backgroundColorChange() {

    mode.classList.add("cl_ass");

}
function backgroundColorChange2() {

    mode.classList.remove("cl_ass");

}
// Date
function dateSee() {
    document.getElementById("dateSee").innerHTML = (Date());
}
// Text change
function textchange() {
    document.getElementById("changetext").innerHTML = ("Hello World");
}
// Bulb on off
function onBlub() {
    document.getElementById("offblub").src = "images/onblub.gif";
}
function offBlub() {
    document.getElementById("offblub").src = "images/offblub.gif";
}
// Happy Or sad Gif
function happyGif() {
    document.getElementById("happy").src = "images/happy.gif";
}
function sadGif() {
    document.getElementById("happy").src = "images/sad.gif";
}
// show border
function showBorder() {
    document.getElementById('sb').style.border = "5px solid black";

}
// Font Size Change
function fontSize() {
    document.getElementById("fontsize").style.fontSize = "35px";
}
// Hide the text
function hideText() {
    document.getElementById("texthide").style.display = "none";
}
// Show text
function showtext() {
    document.getElementById("texthide").style.display = "block";
}
// Alert
function clickAlert() {
    alert("Warning........!");
}
// Console LOg text
function consoleLog() {
    console.log("Hello This is text");
}
// Print 
function printpage() {
    print();
}
// JavaScript Statements
function statement() {
    let x, y, z;
    x = 10;
    y = 20;
    z = 30;
    result = x + y + z;
    document.getElementById("demo").innerHTML = ("sum result is = " + result);
}
// let x, y, z;  // Statement 1
// x = 5;        // Statement 2
// y = 6;        // Statement 3
// z = x + y;    // Statement 4

// document.getElementById("demo").innerHTML =
// "The value of z is " + z + ".";  
// background color
function backgroundColor() {
    document.getElementById("hoverbg").style.backgroundColor = "red";
}
// document.write
function bg() {
    document.getElementsByClassName('para')[0].style.backgroundColor = 'bisque';

}
// Mixed variables
var sum1 = 3;
let sum2 = 5;
const sum3 = 6;
const sum = sum1 + sum2 + sum3;
function mixed() {
    document.getElementById('mixed').innerHTML = "result of sum= " + sum;
}
// simple calculator
{
    const x = "John Doe";
    console.log(x);
}
{
    let x = "John Doe2";


    console.log(x);
}
let x;
{
    console.log(x)
}
y = 6;
{
    console.log(y)
}
var y;
// Const Uses
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
function constTest() {
    document.getElementById("constUses").innerHTML = cars;

}

// // array usess 2
// let country1=["bangladesh ","bhutan ","chaina "];
// let country2=["india ","pakistan ","japan "];
// let country=country1.concat(country2);
// function arrayUses(){
//     document.getElementById("arrayUsees").innerHTML= country;
// }

// Loop in array

//  let num=new Array();
// for (let i=0; i<5; i++){
//     num[i] = parseInt(prompt("Enter the number : "));
// }
//   let sumNum=0;
//  for (let i=0; i<=4; i++)
//  {
//     console.log(num[i]);
//     sumNum=sumNum+num[i];


//  }
//  console.log("sum result is =" + sumNum)

//  Array Method
//  let arrayMethod=[" HTML"," CSS"," BT"," Js"]
//  arrayMethod.shift();
//  arrayMethod.unshift("JQ");
// //  arrayMethod.splice(2,2);
// arrayMethod.sort(); 
// arrayMethod.reverse();
// document.getElementById("arrayUsees").innerHTML=arrayMethod;
// //  let newarrayMethod= arrayMethod.slice(1);
// // console.log(newarrayMethod);
// let arrayMethodNumber=[1,3,5,2,4];
// arrayMethodNumber.sort(function(a,b){
//     return a-b
// });
// console.log(arrayMethodNumber);
// Array Method
let arrayMethod = [" HTML", " CSS", " BT", " Js"];
function arrayUses() {
    document.getElementById("arrayUsees").innerHTML = arrayMethod;
}
// Task 8
let score = [10, 9, 20, 59, 50];

function highestScore() {
    let max = score[0];

    for (let x = 1; x < score.length; x++) {
        if (max < score[x]) {
            max = score[x];
        }

    }
    return max;
}

let maxhighestScore = highestScore(score);
console.log("max is " + maxhighestScore);
// 2d array
let playersInfo = [
    ["AL-Amin", 20],
    ["Karim", 20],


    ["Rahim", 3],
    ["Akash", 5]
]
function playerHighestRunScore() {
    let playerHighestScorer = playersInfo[0][0];
    let playerHighestScore = playersInfo[0][1];
    for (let z = 1; z < playersInfo.length; z++) {
        if (playerHighestScore < playersInfo[z][1]) {
            playerHighestScore = playersInfo[z][1];
            playerHighestScorer = playersInfo[z][0];
        }
    }
    return playerHighestScorer;
}
let player = playerHighestRunScore();
console.log(player);




// Object Use
// Constaructor Object
function Alamin(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;



    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gpa);

    }
}
let student1 = new Alamin("Md.Al-Amin", 209, 3.69);
let student2 = new Alamin("Karim", 9, 0.69);
student1.display();
student2.display();


// Date Methods
let date = new Date();
let todayDateOn = date.getDate();
let toYear = date.getFullYear();
let toMonth = date.getMonth();
let toTime = date.getHours();
let toSeceod = date.getMinutes();
let miliSecond = date.getSeconds();
function thisYear() {
    document.getElementById("ty").innerHTML = "Year is = " + toYear;
}
function thisMonth() {
    document.getElementById("tm").innerHTML = "Month Is = " + toMonth;
}

function todaysDate() {


    document.getElementById("td").innerHTML = "Today Date is = " + todayDateOn;
}

function thisHour() {
    document.getElementById("hr").innerHTML = "Time is = " + toTime + "Hours" + ". " + toSeceod + "Minutes" + " ." + miliSecond + "seconds";
}
// querySelector
function qSedit() {
    document.querySelector("#qs").innerHTML = "Text Is change by Query Selector";
}

function qSedit2() {
    document.querySelector(".myDiv a").innerHTML = "Text Is change by Query Selector";
}
// Img Change
function changeImg1() {
    document.querySelector("#chimg").src = "images/jslogo.png";
}

function changeImg2() {
    document.querySelector("#chimg").src = "images/jqimg.jpg";
}
// Find element
// Create Element
let addingelement = document.getElementsByClassName("dom-manu")[0];

// h5 1
let heading5 = document.getElementsByTagName("h5")[0];
// h5 2

let heading2 = document.getElementsByTagName("h5")[1];
// remove elemnet
addingelement.removeChild(heading2);
// add element
let heading1 = document.createElement("h5");
let text = document.createTextNode("This is text");
heading1.appendChild(text);
addingelement.appendChild(heading1);

// Add element 1st
let heading0 = document.createElement("h5");
let text0 = document.createTextNode("This is text0");
heading0.appendChild(text0);
addingelement.insertBefore(heading0, heading5);
// Slider
// let photos = ["images/jqimg.jpg", "images/css.jpg", "images/jslogo.png"]
// let imgTag = document.querySelector("#c_img");
// let count = 0;
// function next() {
//     count++;
//     if (count >= photos.length) 
//     {
//         count = 0;
//         imgTag.src = photos[count];
//     } 
//     else {
//         imgTag.src = photos[count];
//     }

// }
// function prev(){
//     count--;
//     if (count < 0)
//     {
//         count = photos.length-1;
//         imgTag.src = photos[count];
//     } 
//     else {
//         imgTag.src = photos[count];
//     }
// }

// Slider img
const photos = ["images/jqimg.jpg", "images/css.jpg", "images/jslogo.png"];
const imgTag = document.querySelector("#c_img");
let count = 0;
function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    }
    else {
        imgTag.src = photos[count];
    }
}
function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else {
        imgTag.src = photos[count];
    }
}
// Style
function addStyle() {
    let textStyle = document.querySelector("#h5_style");
    textStyle.classList.add("style");
}
function removeStyle() {
    let textStyle = document.querySelector("#h5_style");
    textStyle.classList.remove("style");
}


// Event Listener
const header6 = document.querySelector("h6");
header6.addEventListener("mouseover", function () {
    this.innerHTML = "Hello world!";
    header6.classList.add("event");
})
// Multiple Event Listener
// let multipleLenght=document.querySelectorAll(".myButton").length;
// for(let a=0;a<multipleLenght;a++){
//     let len= document.querySelectorAll(".myButton")[a];
//     len.addEventListener("click", function(){
//         let multipleText=this.innerHTML;
//         document.querySelector(".m_e_l").innerHTML=multipleText+ " is Clicked"
//     })

// }
// Add Audio
// for (let a = 0; a < 3; a++) {
//     document.querySelectorAll(".myButton")[a].addEventListener("click", function () {
// var Mdtext = this.innerHTML;
     
//         console.log(Mdtext);
//         audioPlay(Mdtext);
//         playAnim(Mdtext);
//     })

// }
// function audioPlay(Mdtext){
//     switch (Mdtext) {
//         case 'Play-Audio-1st':
//             var audio = new Audio("sounds/sound1.mp3");
//             audio.play();

//         case 'Play-Audio-2nd':
//             var audio = new Audio("sounds/sound2.mp3");
//             audio.play();

//         case 'Play-Audio-3rd':
//             var audio = new Audio("sounds/sound2.mp3");
//             audio.play();
//     }
// }
// function playAnim(Mdtext){
//     var selectedText=document.querySelector("."+Mdtext);
//     selectedText.classList.add("anim");

//     setTimeout(function(){
//     selectedText.classList.remove("anim");

//     },1000)

// }

// // play audio
// let btnLen=document.querySelectorAll(".myButton").length;
// for (let a=0;a<btnLen;a++){
//     document.querySelectorAll(".myButton")[a].addEventListener("click", function(){
//         let text=this.innerHTML;
//         console.log(text);
//         audioPlay(text);
//         playAnim(text);
//     })
  
// }
// function audioPlay(text){
//     switch(text){
//         case'Play-Audio-1st':
//         var audio=new Audio("sounds/sound1.mp3");
//         audio.play();
//         break;

//         case'Play-Audio-2nd':
//         var audio=new Audio("sounds/sound2.mp3");
//         audio.play();
//         break;

//         case'Play-Audio-3rd':
//         var audio=new Audio("sounds/sound3.mp3");
//         audio.play();
//         break;

//     }
// }


// function playAnim(text){
//     // let selectButton=document.querySelector("."+text);
//        selectButton.classList.add("anim");
//        setTimeout(function(){
//            selectButton.classList.remove("anim");
//        },1000);
//    }
//    document.addEventListener("keypress",function(event){
//     var text=event.key;
//     playAnim(text);
//    })
   // // play and pause
// let audio = new Audio();

// for (let a = 0; a < 3; a++) {
//         document.querySelectorAll(".myButton")[a].addEventListener("click", function () {
//     var Mdtext = this.innerHTML;
         
//     console.log(Mdtext);
//     audio.pause();
//     audio.currentTime = 0.0;
//         })

  

//   switch (Mdtext) {
//     case "a":
//       audio = new Audio("sounds/sound1.mp3");
//       break;

//     case "b":
//       audio = new Audio("sounds/sound2.mp3");
//       break;

//     case "c":
//       audio = new Audio("sounds/sound1.mp3");
//       break;
//   }
//   audio.play();
// };
// Keypress
document.querySelector("textarea").addEventListener("keypress",function(event){

    var textKey=event.key;
    document.querySelector(".para").innerHTML="You Pressed =" +textKey;
})































































































































































































































































































