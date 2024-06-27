document.addEventListener('DOMContentLoaded', function () {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
  
    img1.style.transition = 'opacity 0.5s ease-in-out';
    img2.style.transition = 'opacity 0.5s ease-in-out 0.3s';
    img3.style.transition = 'opacity 0.5s ease-in-out 0.3s';

    img2.addEventListener('mouseover', function () {
      img1.style.opacity = '0.5';
    });
  
    img2.addEventListener('mouseout', function () {
      img1.style.opacity = '1';
    });
  
    img3.addEventListener('mouseover', function () {
      img1.style.opacity = '0.5';
    });
  
    img3.addEventListener('mouseout', function () {
      img1.style.opacity = '1';
    });
  });
  