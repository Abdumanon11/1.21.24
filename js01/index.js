




 
/* let box = document.qureSelector(`.box`) */
//let body = document.body
/* let boxes = document.qureSelectorAll(`#imposter`)
 */
 /* box.onclick = () => {
    //console.log(`click`); */
 //}
// box.ondblclick = () => {
    /* console.log(`doble click`);
// }
 //box.onmouseenter = () => {
    console.log(`entered`);
 //}
//box.onmouseleave = () =>{
   //}
box.onmousemove = () =>{
    console.log(`movig...`);
}
body.onscroll = () =>{
    console.log(`scroll...`);
}

/* console.log(boxes); */

/* let on = document.querySelector(`one`)
let off = document.querySelector(`two`)
 */


/* button.onclick = () => {

    if(button.classList.contains('blue')) 
    { button.classList.remove('blue')
    } else {
    button.classList.add('blue')
    }
}
 */




let numContainer = document.getElementById("num");
let value = 0;

let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");
let btnRam = document.querySelector(".random")

btnInc.addEventListener("click", () => {
  value++ 
  numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});

btnReset.addEventListener("click", () => {
  value = 0;
  numContainer.textContent = value;
});

btnRam.addEventListener(`click` , () => {
    value = Math.random()
    numContainer.textContent = value
})



