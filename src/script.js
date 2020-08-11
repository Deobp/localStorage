let data = document.getElementById('text');
let b = document.getElementById('button')
let arr = [];
//add value to localStorage
function submit() {
    arr.push(data.value)
    arr.push('1')
    localStorage.setItem(arr.length() + 1, arr)
}

form.addEventListener('submit', submit)

//clear localStorage
function clearLS() {
    localStorage.clear();
}

clearL.addEventListener('click', clearLS)


//problem to save previous result of localstorage to array