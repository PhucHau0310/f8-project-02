const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const li = $$("li");
const liActive = $(".active");
const feedbackItems = $$(".feedback-item");
const dots = $$(".dot");

li.forEach((li, index) => {
    li.onclick = function () {
        $(".active").classList.remove("active");
        this.classList.add("active");
    };
});

// dots.forEach((dot, index) => {
//     dot.onclick = function () {
//         $(".active").classList.remove("active");
//         this.classList.add("active");
//     };
// });

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        // Remove the active class from all dots and feedback items
        dots.forEach((dot) => dot.classList.remove("active"));
        feedbackItems.forEach((item) => item.classList.remove("active"));

        // Add the active class to the clicked dot and corresponding feedback item
        dot.classList.add("active");
        feedbackItems[index].classList.add("active");
    });
});
