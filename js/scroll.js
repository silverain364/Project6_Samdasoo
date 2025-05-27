window.addEventListener('DOMContentLoaded', ()=>{
    gsap.registerPlugin(ScrollTrigger);

    //0
    const tl = gsap.timeline()

    tl.fromTo('.sc0 .text>*', {
        opacity:0,
    },{
        opacity:1,
        stagger:.3
    })

    tl.fromTo('fixed-samdasoo', {
        opacity:0,
        bottom:'40%'
    }, {
        opacity:1,
        bottom:'50%'
    })

    //1
    const scene1 = gsap.timeline()

    ScrollTrigger.create({
        animation:scene1,
        trigger:'.sc1',
        start:'top 30%',
        end:'top 50%',
        scrub:3
    })

    scene1.fromTo('.sc1 .text>*', {
        opacity:0,
    },{
        opacity:1,
        stagger:.3
    })

    //2
    const scene2 = gsap.timeline()

    ScrollTrigger.create({
        animation:scene2,
        trigger:'.sc2',
        start:'top 30%',
        end:'top 50%',
        scrub:3
    })

    scene2.fromTo('.sc2 .text>*', {
        opacity:0,
    },{
        opacity:1,
        stagger:.3
    })

     const scene3 = gsap.timeline()

    ScrollTrigger.create({
        animation:scene3,
        trigger:'.sc3',
        start:'top 30%',
        end:'top 50%',
        scrub:3
    })

    scene3.fromTo('.sc3 .text>*', {
        opacity:0,
    },{
        opacity:1,
        stagger:.3
    })
    

    //3
    ScrollTrigger.create({
        trigger:'.sc3',
        start:'top 90%',
        end:'bottom 10%',
        toggleAction:'play reverse play reverse',
        onEnter:()=>{
            gsap.to('.fixed-samdasoo img', {
                opacity:0,
                y:20,
                duration:.2,
                ease:"power2.out"
            })
        },
        onLeaveBack:()=>{
            gsap.to('.fixed-samdasoo img', {
                opacity:1,
                y:0,
                duration:.2,
                ease:"power2.out"
            })
        },
    })

})