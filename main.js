let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let inputButton = document.querySelector('.input-button');

let list = document.querySelector('.list');

function getSum() {
    return Number(input1.value) + Number(input2.value);
}

function createListItem(text) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let btn = document.createElement('button');

    span.textContent = text;
    btn.textContent = 'delete';

    li.appendChild(span);
    li.appendChild(btn);

    return li;
}

inputButton.addEventListener('click', event => {
    let listItem = createListItem(getSum());
    list.appendChild(listItem);
});