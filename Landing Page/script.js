document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelectorAll('.menu-item');

    menu.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = '#fff';
            item.style.color = 'black' 
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = ''; 
            item.style.color = '' 
        });
    });
});