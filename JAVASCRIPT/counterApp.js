
let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let countStr = count + " - " // increment().countEl.innerText + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}

// let store = 0 
// let saveBTN = document.getElementById("save-btn")
// function saveApp() { 
//     store = counterApp.countEl.innerText
//     saveBTN.textContent = store
// }

// let name = "Taofeek" // saveApp.saveEl.innerText
// let greeting = "Welcome back, " // "Saved counts is, "
// let welcomeEl = document.getElementById("welcome-el")
// welcomeEl.innerText = greeting + name;
// welcomeEl.innerText += "👋"

