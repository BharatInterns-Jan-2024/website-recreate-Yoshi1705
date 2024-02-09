document.addEventListener("DOMContentLoaded", (event) => {
        var svgs = document.querySelectorAll(".s-1 svg");
      
        for (let i = 0; i < svgs.length; i++) {
          svgs[i].addEventListener("click", function () {
            // Get the hidden div
            var hiddenDiv = this.parentElement.nextElementSibling;
      
            // Toggle the visibility of the hidden div
            if (hiddenDiv.style.display === 'none') {
              hiddenDiv.style.display = 'block';
            } else {
              hiddenDiv.style.display = 'none';
            }
          });
        }
      });