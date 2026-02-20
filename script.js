document.addEventListener("mousemove", function(e) {
    const bg = document.querySelector(".animated-bg");
    const x = e.clientX / window.innerWidth * 20;
    const y = e.clientY / window.innerHeight * 20;
    bg.style.transform = `translate(${x}px, ${y}px)`;
});
