const button = document.querySelector('button');
const text = document.querySelector('p')
const headerText = document.querySelector('h1')

const myFunc =()=>{
    text.innerHTML = "Hello";
    headerText.style.background="red"
}

button.addEventListener('click',myFunc);