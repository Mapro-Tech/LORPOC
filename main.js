document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.images-guide');

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('fullscreen')) {
                image.classList.remove('fullscreen');
            } else {
                image.classList.add('fullscreen');
            }
        });
    });
});


  
  
  


  