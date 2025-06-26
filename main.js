"use strict";


const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calc = document.querySelector("#calc");
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    height.value = "";
    weight.value = "";
});

const inputScreen = document.querySelector(".input-screen");
const resultScreen = document.querySelector(".result-screen");
const h2 = document.querySelector("h2");

calc.addEventListener("click", () => {
    if (!height.value || !weight.value) return;

    height.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\d.,]/g, "");
    });
    weight.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\d.,]/g, "");
    });

    if (!height.value.includes(",") && !height.value.includes(".")) height.value = height.value / 100;

    resultScreen.classList.remove("hidden");
    inputScreen.classList.add("hidden");
    
    let imc = weight.value / (height.value * height.value);
    imc = imc.toFixed(1);
    const currentStatus = document.querySelector("#current-status");
    let userStatus = String();

    if (imc < 18.5) {
        userStatus = "thinnless";
        currentStatus.innerHTML = `Situação atual: <span class="${userStatus}">Magreza</span>`;
    } else if (imc >= 18.5 && imc < 25) {
        userStatus = "normal";
        currentStatus.innerHTML = `Situação atual: <span class="${userStatus}">Normal</span>`;
    } else if (imc >= 25 && imc < 30) {
        userStatus = "overweight";
        currentStatus.innerHTML = `Situação atual: <span class="${userStatus}">Sobrepeso</span>`;
    } else if (imc >= 30 && imc < 40) {
        userStatus = "obesity";
        currentStatus.innerHTML = `Situação atual: <span class="${userStatus}">Obesidade</span>`;
    } else {
        userStatus = "severe-obesity";
        currentStatus.innerHTML = `Situação atual: <span class="${userStatus}">Obesidade grave</span>`;
    }

    h2.innerHTML = `Seu IMC: <span class="${userStatus}">${imc}</span>`;

});

const back = document.querySelector("#back");

back.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    inputScreen.classList.remove("hidden");
    height.value = "";
    weight.value = "";
});
