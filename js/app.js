const navbar = document.querySelector('nav');

const hamburger = document.querySelector('.hamburger');
let isMenuCover = false;

hamburger.addEventListener('click', () => {
    if (!isMenuCover){
        isMenuCover = true;

        navbar.style.height = "100vh";
        navbar.style.backgroundColor = "#F39B06";

        if (window.innerWidth < 880){
            document.querySelector('.nav-links').style.display = "flex";
        }
    }else{
        isMenuCover = false;

        navbar.style.height = "13vh";

        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if (scrolled * 100 / scrollable < 78){
            navbar.style.backgroundColor = "unset";
        }
        if (window.innerWidth < 880){
            document.querySelector('.nav-links').style.display = "none";
        }
    }
});

window.addEventListener('scroll', () => {
    if (!isMenuCover){
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        console.log(scrolled * 100 / scrollable )
        if (scrolled * 100 / scrollable > 78){
            navbar.style.backgroundColor = "#F39B06";
        }else{
            navbar.style.backgroundColor = "unset";
        }

        document.querySelector(".hero").style.transform = `translateY(${scrolled * 0.9}px)`;
        document.querySelector(".hero-content").style.transform = `translate(-50%,${scrolled * 0.3}px)`;
    }
});