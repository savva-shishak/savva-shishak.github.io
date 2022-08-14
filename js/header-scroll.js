var header = document.getElementById("header");
var toggler = false;

window.addEventListener("scroll", function(e) {
    var bottom = document.body.clientHeight - window.scrollY - window.innerHeight;

    header.classList[window.scrollY < 30 || bottom < 30 ? "remove" : "add"]("header_small");
    header.classList[bottom < 30 ? "add" : "remove"]("header_bottom");
});
