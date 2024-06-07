const container=document.getElementById("container");
const grid=document.querySelector(".grid");
const btn=document.createElement("button");
btn.classList.add("btn");
container.appendChild(btn);
btn.textContent="Add divs";

btn.addEventListener("click",()=>{
    prompt("Escribe cuantos divs quieres que existan");
});

for (let i=1;i<=16;i++){
    const divs=document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("grid");
    divs.addEventListener("mouseover",()=>{
        if ("mouseover"){
            divs.style.backgroundColor="blue";
        }
        
    });
}

