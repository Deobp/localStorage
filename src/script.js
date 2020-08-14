let data = document.getElementById("text");

let ulList = document.getElementById("list");

let dataList = localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")) :
    [];

//add value to localStorage
function submit(event) {
    dataList.push(data.value);

    localStorage.setItem("items", JSON.stringify(dataList));
    ul(data.value);
    data.value = "";
    event.preventDefault();
}
dataList.forEach((item) => ul(item));
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