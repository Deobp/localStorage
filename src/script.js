let data = document.getElementById('text');

let ulList = document.getElementById('list');

let dataList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


//add value to localStorage
function submit(event) {
    dataList.push(data.value)

    localStorage.setItem('items', JSON.stringify(dataList));
    ul(data.value)
    data.value = '';
    event.preventDefault()
}
dataList.forEach((item) => ul(item))
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

function ul(itemInList) {
    let item = document.createElement('li');
    item.textContent = itemInList
    ulList.appendChild(item)
}


// create list item, add data, append to ulList


//problem to save previous result of localstorage to array
// see if ul function can be called when submit function is called