var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = (dets.x)- 12 + "px"
    crsr.style.top = dets.y -12 + "px"
})

document.addEventListener("mousemove",function(dets){
    crsrBlur.style.left = (dets.x) - 150 + "px"
    crsrBlur.style.top = dets.y -150 + "px"
})

var navh4All = document.querySelectorAll("#nav h4")
navh4All.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})
navh4All.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "none"
        crsr.style.backgroundColor = "aqua"
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top-10%",
        end: "top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        scroller:"body",
        trigger:"#main",
        start:"top 5%",
        end:"top -75%",
        scrub:2
    }
})
gsap.from("#aboutUs img,#aboutUsIn",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub : 3
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
    }
})
gsap.from("#buff2",{
    y:-70,
    x:-70,
    width:"50px",
    height:"50px",
    scrollTrigger:{
        trigger:"#buff2",
        scroller:"body",
        start:"top 75%",
        end:"top 65%",
        scrub : 5
    }
})
gsap.from("#buff1",{
    y:150,
    x:150,
    width:"50px",
    height:"50px",
    scrollTrigger:{
        trigger:"#buff1",
        scroller:"body",
        start:"top 95%",
        end:"top 75%",
        scrub : 5
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})