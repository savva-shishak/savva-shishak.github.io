(function () {
    var block = document.getElementById("about-me");

    var paragraphs = [
        "Специализируюсь на React Typescript.",
        "На новом месте работы хочется иметь возможность заниматься помимо Web Frontend также мобильной и серверной разработкой",
        "Планирую получить коммерческий опыт создания серверных приложений и стать fullstack разработчиком (уже могу делать полноценные приложения на Java Spring, Node.ts)",
        " В будущем хочу стать программным архитектором/ведущим руководителем fullstack разработчиков, создавать большие проекты в команде",
        "Быстро учусь и дополняю рабочий процесс своими идеями и наработками )",
    ];

    var paragraph = 0;
    var symbol = 0;

    function print() {
        if (paragraph === paragraphs.length) {
            return;
        }

        if (symbol === paragraphs[paragraph].length) {
            paragraph++;
            symbol = 0;
            print();
        }

        render();
        symbol++;

        setTimeout(print, 100);
    }

    function render() {
        var res = "";

        for (var i = 0; i < paragraph; i++) {
            res += "<p>" + paragraphs[i] + "</p>";
        }

        res += "<p>";

        for (var i = 0; i < symbol; i++) {
            res += paragraphs[paragraph].charAt(i);
        }

        res += "</p>"

        block.innerHTML = res;
    }

    var toggle = false;

    window.addEventListener("scroll", function(e) {
        if (!toggle && block.getBoundingClientRect().y < this.window.innerHeight / 2 + 50) {
            setTimeout(print, 100);
            toggle = true;     
        }
    });

    block.innerHTML = "";
})();