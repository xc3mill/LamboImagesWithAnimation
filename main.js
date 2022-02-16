let activeElement = 0;
const timeChange = 5000;

const firstImgHtml = document.querySelector('.img-1')
const secondImgHtml = document.querySelector('.img-2')
const thirdImgHtml = document.querySelector('.img-3')

const firstImg = ['images/lambo-3.jpg', 'images/lambo-2yellow.jpg', 'images/lambo-3.jpg', 'images/lambo-4.jpg', 'images/lambo-5.jpg'];
const secondImg = ['images/lambo-5.jpg', 'images/lambo-1yellow.jpg', 'images/lambo-2.jpg', 'images/lambo-3.jpg', 'images/lambo-2.jpg'];
const thirdImg = ['images/lambo-2.jpg', 'images/lambo-3yellow.jpg', 'images/lambo-4.jpg', 'images/lambo-5.jpg', 'images/lambo-3.jpg'];

function changeElement() {
    activeElement++;
    if (activeElement == firstImg.length){
        activeElement = 0;
    }
    firstImgHtml.src = firstImg[activeElement];
    secondImgHtml.src = secondImg[activeElement];
    thirdImgHtml.src = thirdImg[activeElement];
}
setInterval(changeElement, timeChange)

// ScrollReveal({ 
//     reset: true, 
//     distance: '60px',
//     duration: 2500,
//     delay: 400
// });

// ScrollReveal().reveal('.fronttxt', { delay: 500, origin: 'left' });
