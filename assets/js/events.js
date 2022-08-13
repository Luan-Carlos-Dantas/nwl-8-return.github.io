window.addEventListener('scroll', onScroll)
onScroll()
function onScroll(){
    showNavOnScroll()
    showBackToTopButton()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function showNavOnScroll(){
    let menu = document.querySelector('#navigation')

    if(scrollY != 0){
        menu.classList.add("scroll")
    }else{
        menu.classList.remove("scroll")
    }
}

function showBackToTopButton(){
    let backBtn = document.querySelector('#backToTopBtn')

    if(scrollY > 500){
        backBtn.classList.add("show")
    }else{
        backBtn.classList.remove("show")
    }
}

function openMenu(){
    let menu_xl = document.querySelector('body')

    if(!menu_xl.classList.contains("menu-expanded")){
        menu_xl.classList.add("menu-expanded")
    }
}

function closeMenu(){
    let menu_xl = document.querySelector('body')

    if(menu_xl.classList.contains("menu-expanded")){
        menu_xl.classList.remove("menu-expanded")
    }
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + (innerHeight / 2)

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionEndAt = sectionTop + sectionHeight

    const sectionTopReachOrPassedTargetLine =  targetLine >= sectionTop
    const sectionEndOrPassedTargetLine =  sectionEndAt <= targetLine  

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndOrPassedTargetLine

    const currentSection = section.getAttribute('id')


    const menuElement = document.querySelector(`.menu a[href*=${currentSection}]`)

    menuElement.classList.remove('active')

    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}

ScrollReveal().reveal(`#home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contact, #contact article`, { origin: 'top', distance: '50px', duration: 800});
