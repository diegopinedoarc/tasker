// -- Traigo el input text --
let inputText = document.querySelector('#inputText');
// -- Traigo el boton para agregar tareas --
let addTaskBtn = document.getElementById('addTask');
// -- Traigo la lista donde van colocadas las tareas --
let listContainer = document.getElementsByClassName('list_container');
// -- Compruebo estar trayendo bien los elementos --
// console.log(inputText);
// console.log(addTask);
// console.log(listContainer);
//-- Creo un array vacio para alojar las tareas --
let tasks = [];
// -- Indico al boton que tiene que hacer cuando le hagan click --
addTaskBtn.addEventListener('click', addTasks);

function addTasks() {
    // -- Reinicio el valor del input, para que este vacio --
    const task = input.value;
    // -- Con if le damos 2 opciones al input: --
    if (task === '') {
        showError('La tarea esta vacia');
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
    input.value = "";

}

function createHTML() {
    listContainer.innerHTML = "";
    tasks.forEach((task) => {
        
    })
}

