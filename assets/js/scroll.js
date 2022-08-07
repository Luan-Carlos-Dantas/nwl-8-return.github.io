function onScroll(){
    let menu = document.querySelector('#navigation')

    if(scrollY != 0){
        menu.classList.add("scroll")
    }else{
        menu.classList.remove("scroll")
    }
}
