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
    if((i+1) % 3 == 0) {
        table_data[i].classList.add('text-blue-500', 'hover:text-blue-800',
            'dark:hover:text-blue-200', 'transition', 'ease-in-out', 'duration-150')
    }
};

for (let i = 0; i < table_rows.length; i++) {
    table_rows[i].classList.add('border-b', 'bg-gray-50', 'dark:bg-gray-800')
}


