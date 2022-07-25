const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const bodybcg = document.querySelector('body');

function changecolor() {
    if (bodybcg.style.backgroundColor == 'white') {
        bodybcg.style.backgroundColor = 'black';
        bodybcg.style.color = 'white';
        btn1.textContent = "To Make Life Brighter, Click Here!"

    } else {
        bodybcg.style.backgroundColor = 'white';
        bodybcg.style.color = 'black';
        btn1.textContent = "To Make Life Darker,  Click Here!"
    }}

const hexpossibilities = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function changerandomcolor() {
    var hex = '#'
    for (var i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() *hexpossibilities.length);
        hex += hexpossibilities[random];

    }
    bodybcg.style.backgroundColor = hex
    btn1.textContent = "To Make Life Brighter, Click Here!"
}


btn1.addEventListener('click', changecolor);
btn2.addEventListener('click', changerandomcolor);