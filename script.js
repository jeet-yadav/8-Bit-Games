let star = document.querySelector(".p1 i");
gsap.from(star,{
    rotate:360,
    duration: 2,
    repeat: -1,
    ease: "none"
});
star.addEventListener("hover", () => {
    gsap.from(star,{
        rotate:360,
        duration: 0.5,
        repeat: -1,
        ease: "none"
    });
})