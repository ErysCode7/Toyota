const timeline = gsap.timeline({defaults: {duration: 1, ease: "power2.easeInOut"}})
timeline
    .fromTo(".hero__image", {x: "100%", opacity: 0}, {x: "0%", opacity: 1})
    .To(".hero__contents",  {opacity: 1})