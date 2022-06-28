// ------- Version tasker 2.0 simplificado ASI ANDA POR AHORA-------------
const input = document.querySelector("input");
const addBtn = document.querySelector(".addTask");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    li.className = "liAdded"

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}


// //  ------- Version tasker 1.0 NO LO PUDE HACER ANDAR -----------
// // -- Traigo el input text --
// let inputText = document.querySelector('#inputText');
// // -- Traigo el boton para agregar tareas --
// let addTaskBtn = document.getElementById('addTask');
// // -- Traigo la lista donde van colocadas las tareas --
// let listContainer = document.getElementById('list_container');
// // - Traigo el icono de check para borrar tarea --
// let checked = document.querySelector('#checked');
// // -- Compruebo estar trayendo bien los elementos --
// // console.log(inputText);
// // console.log(addTask);
// // console.log(listContainer);
// // console.log(checked)
// //-- Creo un array vacio para alojar las tareas --
// let tasks = [];
// // -- Indico al boton que tiene que hacer cuando le hagan click --
// addTaskBtn.addEventListener('click', addTasks);

// function addTasks() {
//     // -- Reinicio el valor del input, para que este vacio --
//     const task = inputText.value;
//     // -- Con if le damos 2 opciones al input: --
//     if (task === "") {
//         showError('La tarea esta vacia');
//         return;
//     }
//     // -- Creo un objeto, que contendra la informacion del input --
//     const taskObj = {
//         task: task,
//         id: Date.now(),
//     };
//     // -- Reasigno el contenido del objeto al array vacio --
//     tasks = [...tasks, taskObj];
    
//     // -- Ejecutamos la funcion que crea el li 
//     createHTML();
//     inputText.value = "";

// }
// // Creamos una funcion, que va a crear un li y lo va a agregar a la lista
// function createHTML() {
//     // Aca resetamos el contenido de la lista
//     listContainer.innerHTML = "";
//     tasks.forEach((task) => {
//         const li = document.createElement('li');
//         li.innerHTML = `<li class="liAdded" id="i" onclick="remove(event)">${task.task} <span data-id='${task.id}' ><i class="fa-solid fa-square-check"></i></span></li>`;
//         listContainer.appendChild(li);
//         li.appendChild(addDeleteBtn());
        
//     });
// }
// // -- Creamos una funcion que nos muestre un error, cuando el input esta vacio --
// let showError = (error) => {
//     // -- Creamos una variable que crea un p --
//     const msgError = document.createElement("p");
//     // -- le agregamos el texto al p --
//     msgError.textContent = error;
//     // -- Le damos estilo al p, agregandole una clase --
//     msgError.classList.add("error");
    
//     listContainer.appendChild(msgError);
//     // -- Agregamos un timer para que desaparezca el cartel luego de 2s --
//     setTimeout(()=> {
//         msgError.remove();
//     },2000);

// }
// // function remove(e) {
// //     let element = e.target;
// //     element.remove();
// //     listContainer.innerHTML = "";
    
// // }
// // Creamos una funcion, que agregue un boton para eliminar de la lista la tarea
// let addDeleteBtn = () => {
//     // Guardamos en una variable el boton a crear
//     const deleteBtn = document.createElement('button');
//     // Le agregamos texto al boton
//     deleteBtn.textContent = "x";
//     // Le agregamos una clase para darle estilo al boton
//     deleteBtn.className = "btn-delete";
//     // Le agregamos un eventlistener al boton para que al hacerle click, elimine la tarea.
//     deleteBtn.addEventListener('click', (e) => {
//         //Aca le indicamos que queremos seleccionar el elemento padre del seleccionado
//         const item = e.target.parentElement;
//         // Aca le indicamos que queremos borrar el elemento hijo
//         listContainer.removeChild(item);
//         tasks.splice(tasks.length - 1, tasks.length - 0);
//     })
//     return deleteBtn;

// }