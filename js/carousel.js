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
    console.log(slide);

    slide.onclick = getSlideHandler(+slide.getAttribute("carousel-item"));
}


function getSlideHandler(num) {
    return function (e) {
        row.style.marginLeft = "calc(50% - " + ((num - 0.5)*slideSize) + "px)";
    }
}