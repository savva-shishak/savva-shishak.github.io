var SIZES = [
//  [window, slide]
    [550,    250],
    [700,    400],
    [2000,   500],
];


var row = document.getElementById("carousel-row");
var carouselState = 2;
var slideSize = 
    document.body.clientWidth < 550? 
        250 
        :
    document.body.clientWidth < 700?
        400
        :
        500;

for (var i = 0; i < row.children.length; i++) {
    var slide = row.children[i];

    slide.onclick = getSlideHandler(+slide.getAttribute("carousel-item"));
}

var currentSlide = 1;

function getSlideHandler(num) {
    return function (e) {
        console.log('test');
        currentSlide = num;
        row.style.marginLeft = "calc(50% - " + ((currentSlide - 0.5)*slideSize) + "px)";
    }
}

var leftArrow = document.getElementById("carousel-left-arrow");
var rightArrow = document.getElementById("carousel-right-arrow");

leftArrow.addEventListener('click', function () {
    currentSlide = Math.max(currentSlide - 1, 1);
    console.log(currentSlide);
    row.style.marginLeft = "calc(50% - " + ((currentSlide - 0.5)*slideSize) + "px)";
});

rightArrow.addEventListener('click', function () {
    currentSlide = Math.min(currentSlide + 1, row.children.length);
    console.log(Math.min(currentSlide + 1, row.children.length), currentSlide, currentSlide + 1, row.children.length);
    row.style.marginLeft = "calc(50% - " + ((currentSlide - 0.5)*slideSize) + "px)";
});