function starRotate(){
    let star = document.querySelector(".p1 i");
    gsap.from(star,{
    rotate:360,
    duration: 2,
    repeat: -1,
    ease: "none"
    });
}
let input = document.querySelector(".p3 input");
let navLayer = document.querySelector(".navLayer");
let p2 = document.querySelectorAll(".p2 h3");
let menu = document.querySelector("#menu");
let zoom = document.querySelector(".p3 img");
function navAnimation(){
    gsap.from(navLayer,{
        duration: 0.5,
        ease: "none",
        opacity: 0,
        delay:1
    });
    gsap.from(p2,{
        y:10,
        duration: 0.4,
        ease: 'ease',
        opacity: 0,
        delay:1,
        stagger:0.2
    });
    gsap.from(menu,{
        x:20,
        duration: 1,
        ease: 'ease',
        opacity: 0,
        delay:1 
    });
    gsap.from(zoom,{
        scale:0,
        rotate:90,
        duration: 1,
        ease: 'ease',
        opacity: 0,
        delay:1
    });
    gsap.from(input,{
        width :0,
        duration: 2,
        ease: 'power3.out',
        opacity: 0,
        delay:1
    });
}
starRotate()
navAnimation()