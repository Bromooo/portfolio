var texts = ["Loading .", "Loading . .","Loading . . ." ];
var nout = 0;
var cover= document.querySelector(".cover");
var year = new Date().getFullYear();

$('#cryr').text(year);

 
 
setInterval(function() { 
  $('.loading').text(texts[nout]); 
 
  nout++; 
  if (nout == texts.length) { 
    nout = 0; 
  }
  }, 800);



function loadd(){
    //cover.css.display = "hidden";
    gsap.to('.cover',{
        delay: 0.8,
        opacity: 0,
        duration: 0.5,
        display: "none",
        // width: '5px',
        // height: '5px',
        // borderRadius: '90%',
        // top: '30%',
        // left:'50%'
    });
    gsap.to('.cover p',{
        delay: 0.8,
        opacity: 0,
        duration: 0.3,
        // width: '5px',
        // height: '5px',
        // borderRadius: '90%',
        // top: '30%',
        // left:'50%'
    })
    gsap.from('.hero', {

        opacity: 0,
        duration: 1,
        y: -50
        //ease: 'Elastic.easeInOut'
    });
    gsap.from('.herohero h1', {
        opacity: 0,
        duration: 1,
        y: -30,
        delay: 1.1,
        stagger: 0.6
    });
    gsap.from('.herohero h3', {
        x: -80,
        duration: 1,
        opacity: 0,
        ease: 'easeInOut',
        delay: 2.1,
        
    });
    gsap.from('.herohero h5', {
        x: 80,
        duration: 1,
        opacity: 0,
        ease: 'easeInOut',
        delay: 2.7,
        
    });
    gsap.from('.herohero p', {
        y: -40,
        duration: 1,
        opacity: 0,
        ease: 'easeInOut',
        delay: 3.1
    });
    
    
    // gsap.from('.anim2', {
    //     opacity: 0,
    //     duration: 2,
    //     y: -50,
    //     ease: 'easeInOut',
    //     stagger: 0.7,
    // });
    // var tl = gsap.timeline({defaults: {duration: 1}})
    // tl.from(".hero", {y: -50, opacity: 0});
    //     tl.from('.herohero h1',{opacity:0, y: -30}, " -=1.1" );
    //     tl.from('.herohero h3', {x: -80, opacity: 0, ease: 'easeInOut'}, "-=2.1");
    //     tl.from('.herohero h5', {x: 80, opacity: 0, ease:'easeInOut' }, "-=2.7");
    //     tl.from('.herohero p', {y: -40, opacity: 0, ease: 'easeInOut'}, "-=3.1");
    
    
    
    gsap.from('.anim2', {
       scrollTrigger: {
           trigger: ".anim2",
           scrub: 1,
           toggleActions: "restart pause play none",
           //markers: true
       },
      
       opacity: 0,
        duration: 2,
        y: -30,
        stagger: 0.6,
        
    });

    gsap.from('.l1', {
        scrollTrigger: {
            //rotation: 360,
            trigger: ".l1",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200,
        duration: 1
        
        
    });
    gsap.from('.r1 img', {
        scrollTrigger: {
            
            trigger: ".r1 img",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },

        rotation: 360,
        opacity: 0,
        x: 400,
        duration: 1
        
        
    });
    gsap.from('.l2 img', {
        scrollTrigger: {
            //rotation: 360,
            trigger: ".l2 img",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -400,
        rotation: -360,
        duration: 1
        
        
    });
    gsap.from('.r2', {
        scrollTrigger: {
            
            trigger: ".r2",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },

       
        opacity: 0,
        x: 200,
        duration: 1
        
        
    });
    gsap.from('.l3', {
        scrollTrigger: {
            //rotation: 360,
            trigger: ".l3",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200,
        duration: 1
        
        
    });
    gsap.from('.r3 img', {
        scrollTrigger: {
            
            trigger: ".r3 img",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },

        rotation: 360,
        opacity: 0,
        x: 400,
        duration: 1
        
        
    });
    gsap.from('.l4 img', {
        scrollTrigger: {
            //rotation: 360,
            trigger: ".l4 img",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -400,
        rotation: -360,
        duration: 1
        
        
    });
    gsap.from('.r4', {
        scrollTrigger: {
            
            trigger: ".r4",
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },

       
        opacity: 0,
        x: 200,
        duration: 1
        
        
    });
    // var rule = CSSRulePlugin.getRule("body section#desc ul li:after");
    gsap.from('li', {
        
        scrollTrigger: {
            
            trigger: 'li',
            scrub: 1,
            end: "bottom center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        duration: 1.2,
        y: -50,
        stagger: 0.7

    })

    gsap.from('.s1',{
        scrollTrigger: {
            
            trigger: '.s1',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.a1',{
        scrollTrigger: {
            
            trigger: '.a1',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
    gsap.from('.s2',{
        scrollTrigger: {
            
            trigger: '.s2',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
    gsap.from('.a2',{
        scrollTrigger: {
            
            trigger: '.a2',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.s3',{
        scrollTrigger: {
            
            trigger: '.s3',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.a3',{
        scrollTrigger: {
            
            trigger: '.a3',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
    gsap.from('.s4',{
        scrollTrigger: {
            
            trigger: '.s4',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
    gsap.from('.a4',{
        scrollTrigger: {
            
            trigger: '.a4',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.s5',{
        scrollTrigger: {
            
            trigger: '.s5',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.a5',{
        scrollTrigger: {
            
            trigger: '.a5',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
    gsap.from('.s6',{
        scrollTrigger: {
            
            trigger: '.s6',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
    gsap.from('.a6',{
        scrollTrigger: {
            
            trigger: '.a6',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.s7',{
        scrollTrigger: {
            
            trigger: '.s7',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: -200
    });
    gsap.from('.a7',{
        scrollTrigger: {
            
            trigger: '.a7',
            scrub: 1,
            end: "center center",
            toggleActions: "restart pause play none"
        },
        opacity: 0,
        x: 200
    });
}