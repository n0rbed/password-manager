let main_container = document.getElementById('main_container');
main_container.classList.add('mt-40', 'mx-auto', 'w-3/4', 'flex', 'flex-col',
    'items-center', 'bg-chineseviolet-100', 'rounded-lg')


let welcome_text = document.getElementById('welcome')
welcome_text.classList.add('font-semibold', 'text-2xl', 'text-center', 'm-5')

let form = document.getElementsByTagName('form')[0];
form.classList.add('flex', 'flex-col', 'items-center')

form_children = form.children;
for (let i = 0; i < form_children.length; i++) {
    form_children[i].classList.add('mb-2', 'uppercase', 'font-bold', 'text-lg')
}
inputs = document.getElementsByTagName('input')
for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.add('border', 'py-1', 'px-1')
}

button = document.getElementsByTagName('button')
button = button[button.length - 1]

button.classList.add('block', 'bg-chineseviolet-500', 'hover:bg-chineseviolet-900', 
    'text-white', 'uppercase', 'text-lg', 'mx-auto', 'p-2', 'rounded-lg',
'transition-all', 'ease-in-out', 'duration-150', 'my-4')
