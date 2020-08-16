let data = document.getElementById("text");

let ulList = document.getElementById("list");

let dataList = localStorage.getItem("items") ?

    if (localStorage.length > 1) {
        for (let i = 1; i <= localStorage.length; i++) {
            ul(localStorage.key(i));
        }
    }

    //add value to localStorage
function submit(event) {


    localStorage.setItem(`${localStorage.length+1}`, data.value);
    ul(localStorage.key(localStorage.length))
    event.preventDefault();
}


form.addEventListener("submit", submit);

//clear localStorage
function clearLS() {
    localStorage.clear();
}

clearL.addEventListener("click", clearLS);


//add localStorage data to ul
function ul(itemInList) {
    let item = document.createElement("li");
    item.textContent = itemInList;
    ulList.appendChild(item);
}