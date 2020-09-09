let clearButton = document.getElementById('clearLS');
let data = document.getElementById('text');
let lsButton = document.getElementById('button');

function dataToLs() {
    localStorage.setItem('text', data.value)
}

form.addEventListener('dataToLs', submit);
