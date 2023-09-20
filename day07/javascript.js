const main = document.querySelector(".main");
const button = document.querySelector(".fas.fa-align-left");
const barra = document.querySelector(".barra");
const pesquisa = document.querySelector(".fas.fa-search")
const formulario = document.querySelector('.search-input')
let search = false;
let shifted = false;

pesquisa.addEventListener('click',()=>{
    if(search){
        formulario.style.display = "block";
    }
    else{
        formulario.style.display = "none";
    }
    search = !search
})

button.addEventListener("click", () => {
  if (shifted) {
    main.style.transform = "translate3d(0px,0px,0px)";
    barra.style.transform = "translate3d(50px,-150px,0px)";
  } else {
    main.style.transform = "translate3d(120px,0px,0px)";
    barra.style.transform = "translate3d(-100px,-140px,0px)";
  }

  shifted = !shifted;
});
