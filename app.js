var backgroundCounter = document.getElementById("background-counter")

var buttonOne = document.getElementById("button-one")
var buttonTwo = document.getElementById("button-two")
var buttonThree = document.getElementById("button-three")

var toggleOff = "#222427"
var toggleOn = "#ffffff"

function slideOne() {
    var div = document.getElementById("container-inner-box");
    div.style.backgroundImage = "url('https://images.unsplash.com/photo-1687981576001-1417d139c229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"

    buttonOne.style.backgroundColor = toggleOn
    buttonTwo.style.backgroundColor = toggleOff
    buttonThree.style.backgroundColor = toggleOff

    backgroundCounter.textContent = "1"
}

function slideTwo() {
    var div = document.getElementById("container-inner-box");
    div.style.backgroundImage = "url('https://images.unsplash.com/photo-1688141585146-1fb4a1358c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"

    buttonOne.style.backgroundColor = toggleOff
    buttonTwo.style.backgroundColor = toggleOn
    buttonThree.style.backgroundColor = toggleOff

    backgroundCounter.textContent = "2"
}

function slideThree() {
    var div = document.getElementById("container-inner-box");
    div.style.backgroundImage = "url('https://images.unsplash.com/photo-1682686581264-c47e25e61d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')"

    buttonOne.style.backgroundColor = toggleOff
    buttonTwo.style.backgroundColor = toggleOff
    buttonThree.style.backgroundColor = toggleOn

    backgroundCounter.textContent = "3"
}

function resetBg() {
    var div = document.getElementById("container-inner-box");
    div.style.backgroundImage = "none"

    buttonOne.style.backgroundColor = toggleOff
    buttonTwo.style.backgroundColor = toggleOff
    buttonThree.style.backgroundColor = toggleOff

    backgroundCounter.textContent = "..."
}