const playerScore = document.getElementById("playerScore")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const max = document.getElementById("select")
const image = document.getElementById("image")
const player1Color = document.getElementById("player1Color")
const player2Color = document.getElementById("player2Color")
let player1Score = 0
let player2Score = 0





button1.addEventListener("click", (e) => {

    if (player1Score < max.value) {
        player1Score += 1
        player1Color.innerText = player1Score
        if (player1Score >= max.value) {
            player1Color.style.color = "green"
            button1.disabled = true
            button2.disabled = true
            image.setAttribute("src", "./img/win.jpg")
            image.style.objectPosition = "center"
        }
    }
})

button2.addEventListener("click", (e) => {
    if (player2Score < max.value) {
        player2Score += 1
        player2Color.innerText = player2Score
        if (player2Score >= max.value) {
            player2Color.style.color = "blue"
            button1.disabled = true
            button2.disabled = true
            image.setAttribute("src", "./img/win.jpg")
            image.style.objectPosition = "center"
        }
    }
})

button3.addEventListener("click", () => {
    player1Score = 0
    player2Score = 0
    player1Color.innerText = player1Score
    player2Color.innerText = player2Score
    player1Color.style.color = "black"
    player2Color.style.color = "black"
    button1.disabled = false
    button2.disabled = false
    image.setAttribute("src", "./img/ping.jpg")
    image.style.objectPosition = "bottom"

})


// button1.addEventListener("click", () => {
//     player1Score += 1
//     playerScore.innerHTML = `<span id="player1Color">${player1Score}</span> to <span id="player2Color">${player2Score}</span>`
//     if (player1Score === maxScore){
//         player1Color.classList.add("player1ColorWin")
//     }
// })


// button1.addEventListener("click", () => {
//     player1Score += 1
//     player1Color.innerText = `${player1Score}`
//     player2Color.innerText = `${player2Score}`
//     if (player1Score >= max.value){
//         player1Color.style.color = "green"
//     }
// })
