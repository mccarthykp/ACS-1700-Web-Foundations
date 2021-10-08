const wReader = document.getElementById('width-reader')
const hReader = document.getElementById('height-reader')
const cReader = document.getElementById('color-reader')
const outputBox = document.getElementById('outputBox')
const body = document.querySelector('body')


body.addEventListener('input', onInput);

function onInput(e) {
    console.log(e.target.value)
    if (e.target.matches('input[label=Width]')) {
        wReader.innerHTML = e.target.value + 'px';
        console.log(wReader.innerHTML)
        outputBox.style.width = e.target.value + 'px';
    } else if (e.target.matches('input[label=Height]')) {
        hReader.innerHTML = e.target.value + 'px';
        outputBox.style.height = e.target.value + 'px';
    } else if (e.target.matches('input[label=Color]')) {
        cReader.innerHTML = e.target.value;
        outputBox.style.background = e.target.value;
    }
}