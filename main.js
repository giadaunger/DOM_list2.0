var newEl = document.getElementById("newtodo"); 
var buttonEl = document.getElementById("newtodobutton"); 
var todoEL = document.getElementById("todolist"); 
var delButton = document.getElementById("clearbutton");
var message = document.getElementById("message");

buttonEl.addEventListener("click", createElement);
delButton.addEventListener("click", deleteList);
newEl.addEventListener("keydown", checkInput);


window.onload = start;

function start(){
    buttonEl.disabled = true;
}

function createElement(){
    var x = document.createElement("article");
    var newText = document.createTextNode(newEl.value);
    x.appendChild(newText);
    x.id = "todolist";
    todoEL.appendChild(x);
    newEl.value = " ";

    x.addEventListener('click', function test(event){        
        event.target.remove();
    });
}

function checkInput(){
    var input = newEl.value;
    if(input.length >= 6){
        buttonEl.disabled = false;
        message.innerHTML = '';
    }
    else{
        buttonEl.disabled = true;
        message.innerHTML = "För kort";

    }
}

function deleteList(){
    todoEL.remove();
}