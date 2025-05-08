
let fatherDiv=document.querySelector(".fatherDiv")
const butDiv=document.querySelector(".butDiv")

const resetBut=document.createElement("button")
// adc classe?
resetBut.textContent="Reset"

const gridbtn=document.createElement("button")
gridbtn.classList.add("gridbtn")
gridbtn.textContent="Change number of squares per side"

butDiv.appendChild(gridbtn)
butDiv.appendChild(resetBut)

const rootDiv=document.querySelector(".rootDiv")


let squareWidth=40;
let squaresPerSide=640/squareWidth;
let totalSquares=squaresPerSide*squaresPerSide

for(let i=0;i<totalSquares;i++){
    let newDiv=document.createElement("div")
    newDiv.classList.add("grid-item")
    fatherDiv.appendChild(newDiv)
}
    applyHoverEffect();

// debugger;

gridbtn.addEventListener("click",()=>{
    const squaresPerSide=prompt("What is the new value for squares per side?(Maximum of 100")
    if (squaresPerSide>100){
        alert("It has to be less or equal to a 100 squares per side")
        return
    }
    let totalSquares=Math.pow(squaresPerSide,2)
    squareWidth=640/squaresPerSide
    console.log(fatherDiv)
    fatherDiv.remove()
    fatherDiv=document.createElement("div")
    fatherDiv.classList.add("fatherDiv")
    rootDiv.appendChild(fatherDiv)

    for(let i=0;i<totalSquares;i++){
        let newDiv=document.createElement("div")
        newDiv.classList.add("grid-item")
        newDiv.style.width=squareWidth + "px"
        newDiv.style.height=squareWidth+"px"
        fatherDiv.appendChild(newDiv)
    }
    applyHoverEffect();

})




function applyHoverEffect(){
    let squares=document.querySelectorAll(".grid-item")

    squares.forEach(square=>{
        square.classList.add("unpainted"); // quando inicializa
        square.addEventListener("mouseover",()=>{
            if (!square.classList.contains("unpainted")){
                let opacity=parseFloat(square.dataset.opacity)
                if(opacity<1){
                    opacity+=0.1;
                    square.dataset.opacity = opacity.toFixed(2);
                    const r = square.dataset.r;
                    const g = square.dataset.g;
                    const b = square.dataset.b;
                    square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                }
                return
            } 
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            let opacity= 0.3;
            // square.style.backgroundColor="purple"
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            square.dataset.r = r;
            square.dataset.g = g;
            square.dataset.b = b;
            square.dataset.opacity = opacity;
            square.classList.remove("unpainted");
        })
    })
    resetBut.addEventListener("click",()=>{
        squares.forEach(square=>{
            square.style.backgroundColor="gray"
        })
    })

}


