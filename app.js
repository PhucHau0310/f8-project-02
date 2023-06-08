const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const li = $$("li");
const liActive = $(".active");

li.forEach((li, index) => {
    li.onclick = function () {
        $(".active").classList.remove("active");
        this.classList.add("active");
    };
});
