console.log("Java Script Running");

var todoName = document.getElementById("inputBox");
var listContainer = document.getElementById("list-container");

//  This function will handle to add the task into our list
function addTask(){
    if(todoName.value === ''){
        alert("Listed down you todo's");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoName.value;
        listContainer.appendChild(li);

        // Add the cross item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    // After add test into list inputbox will empty
    todoName.value = "";
    saveData();
}

listContainer.addEventListener("click" , function(event){

    // This will check the todo item
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
        saveData();
    }
    // This will remove todo task from list.
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);


// Use Local storage
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();







// function addTodoList(){

//     var todoName = document.getElementById("inputBox").value;
//     var lsitElement = document.createElement("li");
//     lsitElement.innerHTML = todoName;
//     document.body.appendChild(lsitElement);
//     console.log(todoName);
//     var container = document.getElementById("taskList");
//     container.appendChild(lsitElement);

//     inputBox.value = "";
// }
// document.getElementById("addTask").onclick = addTodoList;
