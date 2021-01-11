import {getRandomNumber} from "./randomNumber.js";

import {colors} from "./colors and hex arrays.js";

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {

    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
