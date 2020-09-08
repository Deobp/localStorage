let clearButton = document.getElementById('clearLS');
let data = document.getElementById('text');
let b = document.getElementById('button')

function submit() {
    localStorage.setItem('text', data.value)
}

form.addEventListener('submit', submit)
