const arrow = document.getElementById('arrow')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen = false

function openMenu() {
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.visibility = 'visible'
}

function closeMenu() {
    menuOpen = false
    overlay.style.display = 'none'
    sidebar.style.visibility = 'hidden'
}

arrow.addEventListener('click', function () {
    if (!menuOpen) {
        openMenu()
    }
})

overlay.addEventListener('click', function () {
    if (menuOpen) {
        closeMenu()
    }
})