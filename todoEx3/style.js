let addTodo = document.getElementById('addTodo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addTodo.addEventListener("click", () => {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-throgh';
    })
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);

    })
})