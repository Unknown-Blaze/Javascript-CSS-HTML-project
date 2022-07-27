// Comments indicate which project it comes under
// Ones that come in multiple have a *. The lowest numbered project is given.

// Project 1: Black and white background
// Project 2: Random hex background
// Project 3: Support me!
// Project 4: Remove support 
// Project 5: Animate my picture

const btn1 = document.querySelector('#btn1'); // 1
const btn2 = document.querySelector('#btn2'); // 2
const bodybcg = document.querySelector('body'); // 1*

// 1
function changecolor() {
    removealert()
    if (bodybcg.style.backgroundColor == 'white') {
        bodybcg.style.backgroundColor = 'black';
        bodybcg.style.color = 'white';
        btn1.innerHTML = "To Make Life Brighter, Click Here!"

    } else {
        bodybcg.style.backgroundColor = 'white';
        bodybcg.style.color = 'black';
        btn1.innerHTML = "To Make Life Darker,  Click Here!"
    }}

// 2
const hexpossibilities = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function changerandomcolor() {
    removealert()
    var hex = '#'
    for (var i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() *hexpossibilities.length);
        hex += hexpossibilities[random];

    }
    bodybcg.style.backgroundColor = hex
    btn1.innerHTML = "To Make Life Brighter, Click Here!"
}

// 3
let count = 0;
let btn3 = document.querySelector('#btn3');
let counter = document.querySelector('#counter');

function changecount(){
    removealert()
    count++;
    counter.innerHTML = count;
}

// 4
let btn4 = document.querySelector('#btn4');
let prompt = document.querySelector('#prompt');

function alert(){
    prompt.innerHTML = "Did you just try to remove your support? That won't be possible.";
}
function removealert(){
    prompt.innerHTML = "";
}

// 5
let btn0 = document.querySelector('#btn0');
let image = document.querySelector('#image');
function showimage(){
    if (image.src != "https://www.liveabout.com/thmb/FsMqvs790om98KpvoiI-OjCn3B8=/2415x1811/smart/filters:no_upscale()/GettyImages-183031147-5904fc1f3df78c5456de8820.jpg"){
    image.src = "https://www.liveabout.com/thmb/FsMqvs790om98KpvoiI-OjCn3B8=/2415x1811/smart/filters:no_upscale()/GettyImages-183031147-5904fc1f3df78c5456de8820.jpg";
    image.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 5000, fill: 'forwards'})
}}

btn1.addEventListener('click', changecolor); // 1
btn2.addEventListener('click', changerandomcolor); // 2
btn3.addEventListener('click', changecount); // 3
btn4.addEventListener('click', alert); // 4
btn0.addEventListener('click', showimage); // 5
