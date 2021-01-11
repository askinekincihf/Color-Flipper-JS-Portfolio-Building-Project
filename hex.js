import { getRandomNumberHex } from "./randomNumber.js";

import { hex } from "./colors and hex arrays.js";

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumberHex()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});
