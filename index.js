const hamburger = document.querySelector(".hamburger")
const header = document.querySelector(".header")
const navContents = document.querySelector(".nav-contents")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("clicked")
    header.classList.toggle("shownNav")
    navContents.classList.toggle("shownNavContents")
})
