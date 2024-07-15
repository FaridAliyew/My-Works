const input = document.querySelector(".todoInput");
const submit = document.querySelector(".submitButton");
const div = document.querySelector(".addTodo");

const todo = JSON.parse(localStorage.getItem("Todo")) || [];


// ekranda todo nun gosterilmesi 
window.addEventListener("load", () => {
    todo.forEach(addTodoToDOM);
});


submit.addEventListener("click", myFunc);

function myFunc() {
    if (input.value != null && input.value.trim() != "") {
        let inputValue = input.value;

        addTodoToDOM(inputValue);
        todo.push(inputValue);
        localStorage.setItem("Todo", JSON.stringify(todo));

        input.value = "";
    }
}

function addTodoToDOM(inputValue) {
    // p tag creat
    let p = document.createElement("p");
    p.className = "myParagraf";
    p.textContent = inputValue;

    // i tag creat
    let i = document.createElement("i");
    i.className = "fa-solid fa-rectangle-xmark";

    div.appendChild(p);
    p.appendChild(i);

    // deleted element
    i.addEventListener("click", () => {
        p.remove();
        removeFromLocalStorage(inputValue);
    });
}

function removeFromLocalStorage(inputValue) {
    const index = todo.indexOf(inputValue);
    if (index > -1) {
        todo.splice(index, 1);
        localStorage.setItem("Todo", JSON.stringify(todo));
    }
}
