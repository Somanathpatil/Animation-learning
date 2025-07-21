gsap.from("#page1 #box",{
    scale:0,
    rotate:360,
    duration:1,
    delay:1,
})

gsap.from("#page2 #box",{
    x:400,
    duration:1,

    scrollTrigger:{
        trigger:'#page2 #box',
        scroller:'body',
        markers:true,
        start:"top 57%",
        end:"top 30%",
        scrub:0.5
    }
})

gsap.from("#page3  #box",{
    scale:0,
    rotate:360,
    duration:1,
  

    scrollTrigger:{
        trigger:'#page3 #box',
        scroller:'body',
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1


    }
})