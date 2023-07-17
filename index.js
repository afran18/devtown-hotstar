
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    //creating DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
    imgElement.className = 'slider-img';

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30*(sliders.length - 2)}px)`;
    }

}

//call sliders func
for(let i = 0; i<3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// CARD CONTAINERS

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
});