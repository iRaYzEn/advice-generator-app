const btn = document.querySelector(".btn");
const adviceP = document.querySelector(".advice__advice");
const adviceNum = document.querySelector(".advice__num");
let num = 1

async function advice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceP.textContent = data.slip.advice;
}

window.addEventListener("load", advice)

btn.addEventListener("click", () => {
    num++
   adviceNum.textContent = num
   advice()
});
