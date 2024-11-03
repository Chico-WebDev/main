const MenuBurger = document.querySelector(".hamburger");
const del = document.querySelector(".delete");
const menu = document.querySelector(".menu");


MenuBurger.addEventListener("click", function () {
    MenuBurger.style.display = "none";
    del.style.display = "block";
    menu.style.display = "flex";
});

del.addEventListener("click", function () {
    MenuBurger.style.display = "block";
    del.style.display = "none";
    menu.style.display = "none";
});



window.onscroll = function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

    document.getElementById("backToTopBtn").onclick = function()  {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

