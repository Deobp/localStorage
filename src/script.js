let clearButton = document.getElementById('clearLS');
let data = document.getElementById('text');
let lsButton = document.getElementById('button');

function submit() {
    localStorage.setItem('text', data.value)
}

form.addEventListener('submit', submit);
