let data = document.getElementById('text');

let ulList = document.getElementById('list');


//add value to localStorage
function submit() {

    localStorage.setItem(data.value, data.value);

    return false;
}


form.addEventListener('submit', submit)

//clear localStorage
function clearLS() {
    localStorage.clear();
}

clearL.addEventListener('click', clearLS)

//add data to ul

// function ul() {
//     let json = JSON.stringify(localStorage);

//     for (let key in json) {
//         let item = document.createElement('li');
//         item.value = 'yo'
//         ulList.appendChild(item)
//     }
//}

function ul() {

    let item = document.createElement('li');
    item.value = 'yo'
    ulList.appendChild(item)
}
// create list item, add data, append to ulList

ul()
    //problem to save previous result of localstorage to array
    // see if ul function can be called when submit function is called