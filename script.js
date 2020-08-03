let input = document.getElementById('data');


function test(ar) {
    localStorage.setItem('text', `${input.value}`)
}
input.oninput = test