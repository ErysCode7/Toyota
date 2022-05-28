const timeline = gsap.timeline({defaults: {duration: 1, ease: "power2.easeInOut"}})
timeline
    .from(".hero__image", {x: "100%", opacity: 0})
    .from(".hero__contents",  {opacity: 0})