// const wReader = document.getElementById('width-reader')
// const hReader = document.getElementById('height-reader')
// const cReader = document.getElementById('color-reader')
// const outputBox = document.getElementById('outputBox')
// const body = document.querySelector('body')


document.addEventListener('input', onInput);

function onInput(e) {
    console.log(e.target.value)
    if (e.target.matches('input[label=Width]')) {
        document.getElementById('width-reader').innerHTML = e.target.value + 'px';
        console.log(document.getElementById('width-reader').innerHTML)
        document.getElementById('outputBox').style.width = e.target.value + 'px';
    } else if (e.target.matches('input[label=Height]')) {
        document.getElementById('height-reader').innerHTML = e.target.value + 'px';
        document.getElementById('outputBox').style.height = e.target.value + 'px';
    } else if (e.target.matches('input[label=Color]')) {
        document.getElementById('color-reader').innerHTML = e.target.value;
        document.getElementById('outputBox').style.background = e.target.value;
    }
}