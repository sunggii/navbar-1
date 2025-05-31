function clickBtn() {
    let toggleBtn = document.querySelector('.toggle-btn') 
    let dropdownMenu = document.querySelector('.dropdown-menu')

    dropdownMenu.classList.toggle('open') 
    const isOpen = dropdownMenu.classList.contains('open')

    let toggleBtnIcon = document.querySelector('.toggle-btn i') 
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
