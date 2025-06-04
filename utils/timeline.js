const getTimeline = (camera) => {
    console.log("Inside funtion");
    const tl = gsap.timeline();
    tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 2,
        duration: 2,
        ease: "power3.out"
    })

    return tl;
}

export default getTimeline;