//js-file
const div = document.querySelector(".container");

//create div for 16x16 grid
// let rowdiv = document.createElement("div");

//make a function to create 16 times each 
const makeDiv = function(num) {
    let times = num*num;
    let pixel = 800/num + "px";
    for (let i = 0; i< times; i++) {
        let divs = document.createElement("div");
        divs.setAttribute("id","box"+i);
        // divs.setAttribute("draggable","true");
        divs.classList.add("item");
        div.appendChild(divs);
        document.getElementById("box"+i).style.width = pixel;
    }
    
    
}

makeDiv(16);
let drag = false;
//hover effect 
div.addEventListener("mousedown", function(e) {
    // console.log(e.target);
    e.target.style.backgroundColor = "black";
});
div.addEventListener("mousemove", function(e) {
    if (e.buttons == 1) {
        e.preventDefault();
        e.target.style.backgroundColor = "black";

    }
    
}) 

const textDiv = document.querySelector(".textBox");
const btn = textDiv.querySelector(".btn");
let getInput = document.getElementById("text");



btn.addEventListener("click", () => {
    let items = div.querySelectorAll(".item");
    // console.log(items);
    let array = Array.from(items);
    
    // console.log(array);
    array.forEach( (e) => {
        div.removeChild(e);
    });
    let value = Number(getInput.value);
    if (value <= 100) return(makeDiv(value));
    getInput.value = " ";
    
    
});

