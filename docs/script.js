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

    window.onscroll = function() {
        var scroll = window.scrollY;
        var div =  document.getElementsByClassName('animation')[0];
        if (scroll >= 50) { // check if scroll event happened
            div.style.opacity = "1"; // make div visible
            div.style.backgroundColor = "white"; 
        } else {
          
            div.style.backgroundColor = "transparent"; 
            
        }
        
    };