import filmCardInList from "../templates/filmCardInList.hbs";
import getRefs from "./get-refs"

let watchedBtn = ''
let queueBtn = ''

getRefs().myLibBtn.addEventListener("click", onMyLibClick)

function onMyLibClick() {
    watchedBtn = document.querySelector(".btn-watched")
    watchedBtn.addEventListener("click", showWathched)
    queueBtn = document.querySelector(".btn-queue")
    queueBtn.addEventListener("click", showQueue)
    showWathched()
}

function showWathched() {
    let watchedListLength = JSON.parse(localStorage.getItem("watched")).length
    if (watchedListLength) {
        const watchedFilmList = JSON.parse(localStorage.getItem("watched"))
        getRefs().filmList.innerHTML = watchedFilmList.map(filmCardInList).join("")
    } else {
        showMessageEmpty()
    }
}

function showQueue() {
    let queueListLength = JSON.parse(localStorage.getItem("queue")).length
    if (queueListLength) {
        const queueFilmList = JSON.parse(localStorage.getItem("queue"))
        getRefs().filmList.innerHTML = queueFilmList.map(filmCardInList).join("")  
    } else {
        showMessageEmpty()     
    }
}

function showMessageEmpty() {
    const dataToShow = `
    <div class="empty-film-list">
        <p class="empty-film-list--row">Heeeyy!</p>
        <p class="empty-film-list--row">You didn't add any film:(</p>
        <p class="empty-film-list--row">Oooopss.... </p>
    </div>`
    getRefs().filmList.innerHTML = dataToShow
}