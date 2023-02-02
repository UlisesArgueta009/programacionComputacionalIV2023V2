//guardando tabs
const optionCont1 = document.getElementById("optionCont1");
const optionCont2 = document.getElementById("optionCont2");
const optionCont3 = document.getElementById("optionCont3");

//contenido de las tabas
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const cont3 = document.getElementById("cont3");


//funcion mostrar contenido de cada tab
let chose = 1;

const changeOption = () => {
    chose == 1 ? (
        optionCont1.classList.value = 'nav-link active',
        cont1.classList.value = 'container tab-pane active'
    ) 
    : (
        optionCont1.classList.value = 'nav-link ',
        cont1.classList.value = 'container tab-pane'
    )

    chose == 2 ? (
        optionCont2.classList.value = 'nav-link active',
        cont2.classList.value = 'container tab-pane active'
    ) 
    : (
        optionCont2.classList.value = 'nav-link ',
        cont2.classList.value = 'container tab-pane'
    )

    chose == 3 ? (
        optionCont3.classList.value = 'nav-link active',
        cont3.classList.value = 'container tab-pane active'
    ) 
    : (
        optionCont3.classList.value = 'nav-link ',
        cont3.classList.value = 'container tab-pane'
    )
   
}

optionCont1.addEventListener('click', ()=>{
    chose = 1
    changeOption()
})

optionCont2.addEventListener('click', ()=>{
    chose = 2
    changeOption()
})

optionCont3.addEventListener('click', ()=>{
    chose = 3
    changeOption()
})