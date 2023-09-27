let main_container = document.getElementById('main_container');
main_container.classList.add('mt-40')

let form_container = document.getElementById('form_container')
form_container.classList.add('ml-20')

let welcome_text = document.getElementById('welcome')
welcome_text.classList.add('font-semibold', 'text-2xl')

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

