const getTimeline = (camera) => {
    const tl = gsap.timeline();
    const landingBlock = document.querySelector('#landing');
    tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 2,
        duration: 2,
        ease: "power3.out"
    })

    .fromTo(camera.position, {
        x: 0, y: 0, z: 2
    }, {
        x: 0, y: -5, z: 2, scrollTrigger: {
            trigger: landingBlock,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    })

    return tl;
}

export default getTimeline;