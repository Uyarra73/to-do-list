const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Agregar tareas a la lista//
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

// Completar y eliminar tareas de la lista//
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


//Conserva las tareas al refrescar el navegador//
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Muestra datos guardados al volver abrir el navegador//
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();