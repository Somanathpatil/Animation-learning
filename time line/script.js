var tl =gsap.timeline();

tl.to("#box1",{
    x:1500,
    duration:2,
    delay:1.5,
})

tl.to("#box2",{
    x:1500,
    duration:2,
    rotate:360,
})

tl.to("#box3",{
    x:800,
    duration:2,
    rotate:-360,
})