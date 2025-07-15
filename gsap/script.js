// gsap.from('#box',{
//     x:1200,
//     duration:2,
//     delay:1, 
//     backgroundColor: "red",
//     rotate:360, 
//     borderRadius:"50%",
//     scale:0.5,

// })



// gsap.from("h1",{
//     y:60,
//     duration:1,
//     opacity:0,
//     delay:1,
//     stagger:0.2
// })   


gsap.to("#circle", {
    x:1200,
    borderRadius: "10px",
    duration:2.5,
    delay:1, 
    rotate:360, 
    backgroundColor: "red",
    repeat:- 1,
    yoyo:true,

})