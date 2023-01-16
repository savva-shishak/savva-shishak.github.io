var header = document.getElementById("header");
var toggler = false;

window.addEventListener("scroll", function(e) {
    var bottom = document.body.clientHeight - window.scrollY - window.innerHeight;

    header.classList[window.scrollY < 30 || bottom < 30 ? "remove" : "add"]("header_small");
    header.classList[bottom < 30 ? "add" : "remove"]("header_bottom");
});

var numCircles = Math.random() * 15 + 5;

setInterval(() => {
    var square = document.createElement('div');

    square.classList.add('header__square');

    square.style.top = 50 + (Math.random() * header.clientHeight - 200) + 'px';
    square.style.left = 50 + (Math.random() * header.clientWidth - 200) + 'px';

    var size = Math.random() * 80 + 20;
    square.style.width = size + 'px';
    square.style.height = size + 'px';

    header.appendChild(square);

    setTimeout(() => header.removeChild(square), 9000);
}, 727);
