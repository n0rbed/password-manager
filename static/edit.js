let main_container = document.getElementById('main_container');
main_container.classList.add('mt-40', 'mx-auto', 'w-52', 'flex', 'flex-col', 
'items-center', 'h-80')

main_children = main_container.children;

for (let i = 0; i < main_children.length; i++) {
    main_children[i].classList.add('m-3')
}

document.getElementById('old_account').value = document.getElementsByTagName('p')[0].textContent.slice(5)
