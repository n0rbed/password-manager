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

    let logo = document.getElementById('logo')
    logo.classList.add("transition-all", "ease-in-out", "duration-100", "mt-6",
        "font-semibold", "text-xl", "ml-6", "hover:text-2xl", "hover:text-citrine",
        "hover:mt-4.5", "hover:ml-4.5", "text-white", "dark:hover:text-citrine")
})
