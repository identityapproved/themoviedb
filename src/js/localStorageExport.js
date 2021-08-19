import filmCardInList from "../templates/filmCardInList.hbs";
import getRefs from "./get-refs"

let watchedBtn = ''
let queueBtn = ''

getRefs().myLibBtn.addEventListener("click", onMyLibClick)

function onMyLibClick() {
    watchedBtn = document.querySelector(".btn-watched")
    watchedBtn.addEventListener("click", onShowWathched)
    queueBtn = document.querySelector(".btn-queue")
    queueBtn.addEventListener("click", onShowQueue)
    onToggleClass(watchedBtn, 'button--checked')
    showWathched()
}

function onShowWathched(ev) {
    if (!ev.target.classList.contains('button--checked')) {
        onToggleClass(watchedBtn, 'button--checked', queueBtn)
    }
    showWathched()
}

function showWathched() {
    let watchedList = localStorage.getItem("watched");
    if (watchedList) {
        if (JSON.parse(watchedList).length) {
            const watchedFilmList = JSON.parse(localStorage.getItem("watched"))
            getRefs().filmList.innerHTML = watchedFilmList.map(filmCardInList).join("")
        } else {
            showMessageEmpty()
        }
    } else {
        showMessageEmpty()
    }
}

function onShowQueue(ev) {
    if (!ev.target.classList.contains('button--checked')) {
        onToggleClass(queueBtn, 'button--checked', watchedBtn)
    }
    let queueList = localStorage.getItem("queue")
    if (queueList) {
        if (JSON.parse(queueList).length) {
            const queueFilmList = JSON.parse(localStorage.getItem("queue"))
            getRefs().filmList.innerHTML = queueFilmList.map(filmCardInList).join("") 
        } else {
            showMessageEmpty()
        }
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

function onToggleClass(elNew = '', cls= '', elOld = '' ) {
    elNew.classList.toggle(cls);
    if (elOld) {
        elOld.classList.toggle(cls);
    }
}