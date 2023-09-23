window.addEventListener('load', () => {
    let nav_container = document.getElementById('nav_container');
    nav_container.classList.add("fixed", 'top-0', 'w-screen', 'h-20', 'm-0',
        'flex', 'flex-row', 'bg-gray-900', "text-white", "shadow-lg", "justify-between");

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

    let signup_button = document.getElementById('signup_button');
    signup_button.classList.add("text-white", "bg-blue-700", "hover:bg-blue-800", 
        "focus:outline-none", "focus:ring-4", "focus:ring-blue-300", 
        "font-medium", "rounded-full", "text-sm", "px-5", "py-2.5", 
        "text-center", "mr-2", "mb-2", "dark:bg-blue-600", "dark:hover:bg-blue-700", 
        "dark:focus:ring-blue-800", "transition", "ease-in", "duration-75");

    let login_button = document.getElementById('login_button');
    login_button.classList.add("py-2.5", "px-5", "mr-2", "mb-2", "text-sm",
        "font-medium", "text-gray-900", "focus:outline-none", "bg-white",
        "rounded-full", "border", "border-gray-200", "hover:bg-gray-100",
        "hover:text-blue-700", "focus:z-10", "focus:ring-4", "focus:ring-gray-200",
        "dark:focus:ring-gray-700", "dark:bg-gray-800", "dark:text-gray-400",
        "dark:border-gray-600", "dark:hover:text-white", "dark:hover:bg-gray-700",
        "transition", "ease-in", "duration-75");

    signup_button.onclick = () => { location.href = '/signup' };
    login_button.onclick = () => { location.href = '/login' };

    let logo = document.getElementById('logo')
    logo.classList.add("transition-all", "ease-in-out", "duration-100", "mt-6",
        "font-semibold", "text-xl", "ml-6", "hover:text-2xl", "hover:text-sky-200",
        "hover:mt-4.5", "hover:ml-4.5")
})
