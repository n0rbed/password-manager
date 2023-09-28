let container = document.getElementById('main_container');
container.classList.add('flex', 'mt-40', 'items-center','justify-center', 'mx-auto',
                        'outline-dashed', 'outline-2', 'w-80', 'rounded-lg');

document.getElementById('form').classList.add('flex', 'flex-col', 'items-center');

let title = document.getElementById('title');
title.classList.add('w-14', 'font-semibold', 'mb-4', 'mt-2');

let submit_button = document.getElementById('submit_login')
submit_button.classList.add('bg-chineseviolet-900', 'rounded-lg', 'text-antiwhite-200',
                            'w-20', 'h-8', 'my-2');

let inputs = document.getElementsByTagName('input');
[].forEach.call(inputs, (input) => {
    input.classList.add('my-1');
});

