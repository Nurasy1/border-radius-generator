let shape = document.querySelector(".shape");
let topinp = document.querySelector(".top");
let bottominp = document.querySelector(".bottom");
let rightinp = document.querySelector(".right");
let leftinp = document.querySelector(".left");
let codecont = document.querySelector(".code-value");

let rangeinps = document.querySelectorAll(".range");
console.log(rangeinps)
rangeinps.forEach((inp) => {
    inp.addEventListener("change", () => {
        console.log(leftinp.value)
        codecont.innerHTML = `${topinp.value}  ${bottominp.value} ${leftinp.value}  ${rightinp.value}`
        shape.style.borderRadius = `${topinp.value}px ${bottominp.value}px ${leftinp.value}px ${rightinp.value}px`
    })

})