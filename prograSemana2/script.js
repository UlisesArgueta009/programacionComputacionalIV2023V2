//mostrar ocultar div
const   hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//
const addItemInput = document.querySelector ('#addItem')
//const addItemButon = document.querySelector('#addItemButton')
const addItemBtn =  document.querySelector('#addItemButton');



//agregar los eventso al boton ocultar/mostrar
hidebtn.addEventListener('click',()=> {
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block' 
        hidebtn.textContent = 'ocultar'
       } else{
       listDiv.style.display = 'none' 
       hidebtn.textContent = 'mostrar'
       }
})

//Agregar elementos a la lista

addItemBtn.addEventListener('click',()=> {
    desicion = prompt("Desea agregar el archivo a la lista digite YES si no digite NO")
    if (desicion == "YES" || desicion == "yes") 
    {
        let list = document.querySelector('ul')
        let li = document.createElement('li')
        li.textContent = addItemInput.value
        list.appendChild(li)
    } else {
        alert("no se agregara el archivo a la lista")
    }
    
})

//Pregunta si desea agregar elemento a la lista
function desicionAgregar(respuesta) {
   
   
    
}

/*
//funcion para obtener el indice del elemento en la lista.
var list = docuemtn.getElementById('listItems'),
items =list.getElementByTagName('li')

const findIndex = (element)=> {
    var len = items.length
    for(var i=0; i<len; i++){
        if(items[i]=== element){
            return i
        }
    }
}

list.onclick   =(e) =>{
    let even = e || window.event
    src=event.target

    let myIndex =findIndex(src)
    index = myIndex
    //alert(myIndex)
    list.querySelectorAll('li').forEach(el =>el.classList.
        remove('alert', 'alert-danger'));
    items[myIndex].classList.add('alert','alert-danger');
}*/