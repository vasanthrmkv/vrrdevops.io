// Smooth scroll navigation

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){
e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});
}

});

});


console.log("🚀 DevOps Portfolio Loaded Successfully!");
