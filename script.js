

// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

// Toggle menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler-btn');
    const menu = document.getElementById('menu');

    toggler.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});


const mainContent = document.getElementById('mainContent');

function hideSidebars(){
    const sidebars = document.querySelector('.sidebars')
    sidebars.style.display = 'none'
    mainContent.classList.add('blur');
   }
function showSidebars(){
    const sidebars = document.querySelector('.sidebars')
    sidebars.style.display = 'flex'
    mainContent.classList.remove('blur');
}
