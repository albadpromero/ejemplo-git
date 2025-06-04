const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir, .cerrar");


for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){
        navegacion.className = i == 0 ? "desplegado" : ""; 
    });   
}