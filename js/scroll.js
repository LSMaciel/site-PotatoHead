gsap.registerPlugin(ScrollTrigger)



gsap.set("#braco__direito", {
       x: -350,
       y: -700,
       scale: .6,
       opacity: .5
     
    })


gsap.to("#braco__direito", {
    scrollTrigger: {
        trigger: "h1", 
        toggleActions: "restart pause none none",
        start: "-50px",
        end: "330px",
        scrub: true,
        
    },
        x: 0,
        y: 0,
        scale: 1,
        rotation: 360,
        opacity: 1
});



gsap.set("#braco__esquerdo", {
    x: 350,
    y: -700,
    opacity: 1,
    scale: .5,
    opacity: .6
 })


gsap.to("#braco__esquerdo", {
 scrollTrigger: {
     trigger: "h1", 
     toggleActions: "restart pause none none",
     start: "-50px",
        end: "330px",
     scrub: true,
     
 },
     x: 0,
     y: 0,
     scale: 1,
     rotation: 360,
     opacity: 1

});


gsap.set("#olho-esquerdo", {
    x: 350,
    y: -300,
    opacity: 1,
    scale: .5,
    opacity: .6
 })


gsap.to("#olho-esquerdo", {
 scrollTrigger: {
     trigger: "h1", 
     toggleActions: "restart pause none none",
     start: "-50px",
        end: "300px",
     scrub: true,
     
 },
     x: 0,
     y: 0,
     scale: 1,
     rotation: 360,
     opacity: 1

});


gsap.set("#olho__direito", {
    x: -350,
    y: -300,
    opacity: 1,
    scale: .5,
    opacity: .6
 })


gsap.to("#olho__direito", {
 scrollTrigger: {
     trigger: "h1", 
     toggleActions: "restart pause none none",
     start: "-50px",
        end: "250px",
     scrub: true,
     
 },
     x: 0,
     y: 0,
     scale: 1,
     rotation: 360,
     opacity: 1

});

gsap.set("#nariz", {
    x: -350,
    y: -30,
    opacity: 1,
    scale: .5,
    opacity: .6
 })


gsap.to("#nariz", {
 scrollTrigger: {
     trigger: "h1", 
     toggleActions: "restart pause none none",
     start: "-50px",
     end: "200px",
     scrub: true,
     
 },
     x: 0,
     y: 0,
     scale: 1,
     rotation: 360,
     opacity: 1
});

