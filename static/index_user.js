let password_container = document.getElementById('password_container');
password_container.classList.add('mt-40', 'overflow-x-auto', 'w-3/4', 'mx-auto',
                                'rounded-lg');

let log_out = document.getElementById('log_out');
log_out.onclick = () => { location.href = '/logout'};

let table = document.getElementsByTagName('table')[0];
table.classList.add('w-full', 'text-m', 'text-left', 'text-chineseviolet-400', 
                    'mb-8');

let table_head = document.getElementsByTagName('thead')[0];
table_head.classList.add('text-sm', 'uppercase', 'bg-gray-50', 'dark:bg-gray-900',
    'dark:text-chineseviolet-400');


let table_heads = document.getElementsByTagName('th');
let table_data = document.getElementsByTagName('td');
let table_rows = document.getElementsByTagName('tr');

for (let i = 0; i < table_heads.length; i++) {
    table_heads[i].classList.add('px-6', 'py-3');
};

for (let i = 0; i < table_data.length; i++) {
    table_data[i].classList.add('px-6', 'py-4');
};
as = document.getElementsByTagName('a')
for (let i = 0; i < as.length; i++){
    as[i].classList.add('text-blue-500', 'hover:text-blue-800',
        'dark:hover:text-blue-200', 'transition', 'ease-in-out', 'duration-150')
}

for (let i = 0; i < table_rows.length; i++) {
    table_rows[i].classList.add('border-b', 'bg-gray-50', 'dark:bg-gray-800', 
    'transition-all', 'ease-in-out', 'duration-150')
};


let form = document.getElementsByTagName('form');
form = form[form.length - 1]
form.classList.add('flex', 'flex-col', 'items-center')

let inputs = document.getElementsByTagName('label');
[].forEach.call(inputs, (input) => {
    input.classList.add('my-1', 'mx-1');
});

let edits = document.getElementsByClassName('edits')
let deletes = document.getElementsByClassName('deletes')


for (let i = 0; i < deletes.length; i++) {
    deletes[i].classList.add('text-white', 'bg-red-500', 'rounded-lg', 'w-16', 'h-10',
                            'dark:text-black', 'dark:bg-red-600', 'transition-all', 
                            'ease-in-out', 'duration-150')

    edits[i].classList.add('text-white', 'bg-blue-500', 'rounded-lg', 'w-16', 'h-10',
                            'dark:text-black', 'dark:bg-blue-600', 'transition-all', 
                            'ease-in-out', 'duration-150')

    deletes[i].value = deletes[i].parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent.trim();
    edits[i].value = deletes[i].value;


}

function check(button) {
    let result = confirm('Are you sure?');
    if (result == false){
        button.parentNode.method = 'get';
        button.parentNode.action = '/';
    }
}

