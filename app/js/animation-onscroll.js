//get dom
const slideLeft = document.querySelectorAll('[data-slide="left"]')
const slideRight = document.querySelectorAll('[data-slide="right"]')
const fadeDown = document.querySelectorAll('[data-fade="down"]')


//observers
const slideObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-aos", entry.isIntersecting)
        if(entry.isIntersecting) slideObserver.unobserve(entry.target)
    })
}, {
    rootMargin: "0px 0px -250px 0px",
})


const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-fade", entry.isIntersecting)
        if(entry.isIntersecting) fadeObserver.unobserve(entry.target)
    })
}, {
    rootMargin: "0px 0px -350px 0px",
})


//call observers
slideLeft.forEach(left => {
    slideObserver.observe(left)
})

slideRight.forEach(right => {
    slideObserver.observe(right)
})

fadeDown.forEach(fade => {
    fadeObserver.observe(fade)
})