const body=document.querySelector("body");
const container=document.getElementById("container");
const grid=document.querySelector(".grid");
const btn=document.createElement("button");
btn.classList.add("btn");
body.appendChild(btn);
body.appendChild(container);
btn.textContent="Add divs";

function randomInteger(min,max){
    return min+Math.floor(Math.random()*(max-min+1));
}
let r=randomInteger(0,255);
let b=randomInteger(0,255);
let g=randomInteger(0,255);
let rgb=`rgb(${r},${g},${b})`;
let opacity1=100;







btn.addEventListener("click",()=>{
    
    let output=parseInt(prompt("Choose between one and 100 divs"));
   
    if (isNaN(output)||output <1||output>100){
        alert("Please choose a number between 1 and 100");
    }
    else{
        removeAllDivs(container);
        for (let i=1;i<=output;i++){
            for(let j=1;j<=output;j++){
                const divs=document.createElement("div");
                container.appendChild(divs);
                divs.classList.add("grid");
                divs.addEventListener("mouseover",()=>{
                    if ("mouseover"){
                        r=randomInteger(0,255);
                        g=randomInteger(0,255);
                        b=randomInteger(0,255);
                        let rgb=`rgb(${r},${g},${b})`;
                        divs.style.backgroundColor=rgb;
                    }
                        
                });
            }
            
        }
    }
});
for (let i=1;i<=16;i++){
    for(let j=1;j<=16;j++){
        const divs=document.createElement("div");
        container.appendChild(divs);
        divs.classList.add("grid");
        divs.addEventListener("mouseover",()=>{
            if ("mouseover"){
                r=randomInteger(0,255);
                g=randomInteger(0,255);
                b=randomInteger(0,255);
                let rgb=`rgb(${r},${g},${b})`;
                divs.style.backgroundColor=rgb;
            }
               
        });
    }
    
}


function removeAllDivs(container) {
    if (container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
}