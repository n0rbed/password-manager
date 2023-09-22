window.addEventListener('load', () => {
    let nav_container = document.getElementById('nav_container');
    nav_container.classList.add("fixed", 'top-0', 'w-screen', 'h-16', 'm-0', 'flex', 'flex-row', 'bg-gray-900', "text-white", "shadow-lg", "justify-around");

    let lis = document.getElementsByClassName("li");
    for (let i = 0; i < lis.length; i++){
        lis[i].classList.add('inline', 'p-3');
    }
    
    function redirect_login(){
        window.location.assign('/login');
    }

    function redirect_signup(){
        window.location.assign('/signup');
    }

    let nav_buttons = document.getElementsByClassName("nav_buttons")
    for (let i = 0; i < nav_buttons.length; i++){
        if(nav_buttons[i].innerHTML == "Login"){
            nav_buttons[i].onclick = redirect_login
        } else {
            nav_buttons[i].onclick = redirect_signup
        }

        nav_buttons[i].classList.add("transition", "ease-in-out", "bg-white", 
            "hover:bg-rose-200", "text-gray-800", "hover:text-gray-1000", 
            "font-semibold", "py-2", "px-4", "border", "border-gray-400",
            "rounded", "shadow")
    }

})

