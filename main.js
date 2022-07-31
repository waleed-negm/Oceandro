let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".nums");
let mybutton = document.getElementById("myBtn");
let started = false;

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) mybutton.style.display = "block";
    else mybutton.style.display = "none";
    if (window.scrollY >= section.offsetTop - 250) {
        if (!started) {
            nums.forEach(num => {
                startCount(num);
            });
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2500 / goal);
}
// scroll to top
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
