document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementsByClassName('hamburger-menu')[0].addEventListener('click', function() {
            document.getElementById('modal').classList.add('style-modal');
            document.getElementsByClassName('layer')[0].classList.add('modal-open');
        }); 
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal-open')) {
            document.getElementById('modal').classList.remove('style-modal');
            document.getElementsByClassName('layer')[0].classList.remove('modal-open');
        }
    });