const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links li');

burger.addEventListener("click", ()=>{
    navLinks.classList.toggle('active');
//the Links Fade
    links.forEach(link => {
        link.classList.toggle('fade');
    });
//the X transition
    burger.classList.toggle('toggle');
});

