// -- Traigo el input text --
let inputText = document.querySelector('#inputText');
// -- Traigo el boton para agregar tareas --
let addTaskBtn = document.getElementById('addTask');
// -- Traigo la lista donde van colocadas las tareas --
let listContainer = document.getElementById('list_container');
// - Traigo el icono de check para borrar tarea --
let checked = document.querySelector('#checked');
// -- Compruebo estar trayendo bien los elementos --
// console.log(inputText);
// console.log(addTask);
// console.log(listContainer);
// console.log(checked)
//-- Creo un array vacio para alojar las tareas --
let tasks = [];
// -- Indico al boton que tiene que hacer cuando le hagan click --
addTaskBtn.addEventListener('click', addTasks);

function addTasks() {
    // -- Reinicio el valor del input, para que este vacio --
    const task = inputText.value;
    // -- Con if le damos 2 opciones al input: --
    if (task === "") {
        showError('La tarea esta vacia');
        return;
    }
    // -- Creo un objeto, que contendra la informacion del input --
    const taskObj = {
        task: task,
        id: Date.now(),
    };
    // -- Reasigno el contenido del objeto al array vacio --
    tasks = [...tasks, taskObj];
    
    // -- Ejecutamos la funcion que crea el li 
    createHTML();
    inputText.value = "";

}

function createHTML() {
    listContainer.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.innerHTML = `<li id="i" onclick="remove(event)">${task.task} <span data-id='${task.id}'><i class="fa-solid fa-square-check"></i></span></li>`;
        listContainer.appendChild(li);
    });
}

let showError = (error) => {
    const msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    listContainer.appendChild(msgError);
    setTimeout(()=> {
        msgError.remove();
    },2000);

}
function remove(e) {
    let element = e.target;
    element.remove();
    listContainer.innerHTML = "";
    
  }

// function remove() {
//     let element = document.getElementById("checked");
//     // element.remove();
    

//   }
// checked.addEventListener('click', remove);
// let borrarElemento = () => {
//    tasks.forEach((borrar) => {
//     borrar.li.remove();
//    })
// } 

// console.log(checked) 