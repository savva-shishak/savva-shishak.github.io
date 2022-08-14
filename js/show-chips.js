(function () {
    var chips = document.getElementsByClassName("position__chip");
    var cursor = 0;
    var toggle = false;

    window.addEventListener("scroll", function(e) {
        if (!toggle && document.getElementById("position-chips").getBoundingClientRect().y < this.window.innerHeight / 2 + 50) {
            setTimeout(showNext, 100);
            toggle = true;     
        }
    });

    function showNext() {
        chips[cursor].classList.add("position__chip_show");

        cursor++;

        if (chips.length !== cursor) {
            setTimeout(showNext, 1000);
        }
    }
})();