window.addEventListener('load', () => {
    let dark_mode = document.getElementById('dark_mode');
    dark_mode.classList.add('h-full')

    let dark_mode_svg = document.getElementById('dark_mode_svg')
    dark_mode_svg.classList.add('h-full', 'w-10', 'mt-2')

    let html_tag = document.getElementsByTagName('html')[0];
    dark_mode.onclick = () => {
        if (html_tag.classList.contains('dark')){
            html_tag.classList.remove('dark')
            dark_mode_svg.src = '../static/moon.png'
        } else {
            html_tag.classList.add('dark');
            dark_mode_svg.src = '../static/sun.png'
        }
    }

    document.body.classList.add('bg-antiwhite-100', 'dark:bg-antiwhite-300')
    let nav_container = document.getElementById('nav_container');
    nav_container.classList.add("fixed", 'top-0', 'w-screen', 'h-20', 'm-0',
        'flex', 'flex-row', 'bg-gray-900', "text-white", "shadow-lg", "justify-between");

    let lis = document.getElementsByClassName("li");
    for (let i = 0; i < lis.length; i++){
        lis[i].classList.add('inline', 'p-3');
    }

    let signup_button = document.getElementById('signup_button');
    signup_button.classList.add("text-white", "bg-chineseviolet-600", "hover:bg-chineseviolet-700", 
        "focus:outline-none", "focus:ring-4", "focus:ring-chineseviolet-300", 
        "font-medium", "rounded-full", "text-sm", "px-5", "py-2.5", 
        "text-center", "dark:bg-chineseviolet-700", "dark:hover:bg-chineseviolet-800", 
        "dark:focus:ring-chineseviolet-800", "transition", "ease-in", "duration-75");

    let login_button = document.getElementById('login_button');
    login_button.classList.add("py-2.5", "px-5", "text-sm",
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
        "font-semibold", "text-xl", "ml-6", "hover:text-2xl", "hover:text-citrine",
        "hover:mt-4.5", "hover:ml-4.5")

    let padlock = document.getElementById('padlock')
    padlock.classList.add('mt-8', 'ml-16', 'w-5/12')

    let main_container = document.getElementById('main_container')
    main_container.classList.add('flex', 'flex-row', 'mt-40')

    let slogan = document.getElementById('slogan')
    slogan.classList.add('font-extrabold', 'text-4xl', 'mt-48')

})
