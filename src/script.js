let data = document.getElementById('text');

let arr = [];

let ulList = document.getElementById('list');


//add value to localStorage
function submit() {
    arr.push(data.value)
    localStorage.setItem('data', arr)
    return false;
}

form.addEventListener('submit', submit)

//clear localStorage
function clearLS() {
    localStorage.clear();
}

clearL.addEventListener('click', clearLS)

//add data to ul

function ul() {
    let list = document.createElement('li');
    // create list item, add data, append to ulList
}


form.addEventListener('submit', ul)
    //problem to save previous result of localstorage to array
    // see if ul function can be called when submit function is called