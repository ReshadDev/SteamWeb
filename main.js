const list1 = document.querySelector('.games-one');
const list2 = document.querySelector('.games-two');
const list3 = document.querySelector('.games-three');
const list4 = document.querySelector('.games-four');
const list5 = document.querySelector('.games-five');
const button1 = document.querySelector('.new');
const button2 = document.querySelector('.top');
const button3 = document.querySelector('.being');
const button4 = document.querySelector('.rated');
const button5 = document.querySelector('.upcom');

const infoFunc =(e)=>{
    e.preventDefault()
list1.style.display = "block";
list2.style.display = "none";
list3.style.display = "none";
list4.style.display = "none";
list5.style.display = "none";

}

button1.addEventListener('click', infoFunc);

const infoFuncOne=(e)=>{
    e.preventDefault()
list1.style.display = "none";
list2.style.display = "block";
list3.style.display = "none";
list4.style.display = "none";
list5.style.display = "none";

}

button2.addEventListener('click', infoFuncOne);


const infoFuncTwo=(e)=>{
    e.preventDefault()
list1.style.display = "none";
list2.style.display = "none";
list3.style.display = "block";
list4.style.display = "none";
list5.style.display = "none";

}

button3.addEventListener('click', infoFuncTwo);

const infoFuncThree=(e)=>{
    e.preventDefault()
list1.style.display = "none";
list2.style.display = "none";
list3.style.display = "none";
list4.style.display = "block";
list5.style.display = "none";

}

button4.addEventListener('click', infoFuncThree)

const infoFuncFour=(e)=>{
    e.preventDefault()
list1.style.display = "none";
list2.style.display = "none";
list3.style.display = "none";
list4.style.display = "none";
list5.style.display = "block";

}
button5.addEventListener('click', infoFuncFour)

window.addEventListener('DOMContentLoaded',infoFuncFive)

const infoFuncFive=(e)=>{
    e.preventDefault()
list1.style.display = "none";
list2.style.display = "none";
list3.style.display = "none";
list4.style.display = "none";
list5.style.display = "none";

}
