const menuIcon = document.querySelector("#menu-mobile")
const closeIcon = document.querySelector("#close")
const aside = document.querySelector("#aside")
const body = document.querySelector("#body")

menuIcon.addEventListener('click', showMenu)

function showMenu(){
    aside.classList.add('active')
}

closeIcon.addEventListener('click', hiddenMenu)

function hiddenMenu(){
    aside.classList.remove('active')
}

