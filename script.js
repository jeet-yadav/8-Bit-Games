let star = document.querySelector(".p1 i");
function starRotate(){
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
function starStart(){
    gsap.from(star,{
        scale:150,
        duration: 2,
        ease: "xepo",
    })
}
starRotate()
navAnimation()
let info = document.querySelector(".info");

let titleImage = document.querySelector(".center img");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let currentY = 0;
left.addEventListener("click",()=>{
    gsap.to(titleImage,{
        x: currentY - 600,
        duration: 1.5,
        ease: "power3.inOut",
    })
    currentY -= 600
})
right.addEventListener("click",()=>{
    gsap.to(titleImage,{
        x: currentY + 600,
        duration: 1.5,
        ease: "power3.inOut",
    })
    currentY += 600;
})

let menuBar = document.querySelector("#menu");
let x = document.querySelector("#full i");

let tl = gsap.timeline();
gsap.to("#full",{
    right:0,
    duration:0,
    ease: "power5.out"
})
tl.from("#full h1",{
    x:100,
    duration:1,
    opacity:0,
    stagger:0.1
})
tl.from("#x",{
    opacity:0
})

// menuBar.addEventListener("click",function(){
//     gsap.to("#full",{
//         right:0,
//         duration:0.9,
//         ease: "power5.out"
//     })
//     tl.from("#full h1",{
//         x:100,
//         duration:1,
//         opacity:0,
//         stagger:0.1
//     })
//     tl.from("#x",{
//         opacity:0
//     })
// })
// x.addEventListener("click",function(){
//     gsap.to("#full",{
//         right:"-40%",
//         duration:0.9,
//         ease: "power5.out"
//     })
// })