


//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomLetter(){
    console.log(alphabet[Math.floor(Math.random()*26)]);
}
randomLetter();

function randomNumber(){  
    console.log(Math.random()*21);
}
randomNumber();

function randomFood(){
    console.log(foods[Math.floor(Math.random()*6)]);
}
randomFood();

function randomStudent(){
    console.log(students[Math.floor(Math.random()*7)]);
}
randomStudent();

function randomGroup(){
    console.log(students[Math.floor(Math.random()*7)], students[Math.floor(Math.random()*7)], students[Math.floor(Math.random()*7)]);
}
randomGroup();
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////