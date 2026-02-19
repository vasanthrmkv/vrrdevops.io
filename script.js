document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Button clicked:", button.textContent);
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

});
