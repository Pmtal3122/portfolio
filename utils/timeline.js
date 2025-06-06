const getTimeline = (camera) => {
    const tl = gsap.timeline();
    const body = document.querySelector('body');
    const landingBlock = document.querySelector('#landing');
    const workExpBlock = document.querySelector('#workEx');
    const projectsBlock = document.querySelector('#projects');
    const skillsBlock = document.querySelector('#skills');
    tl.fromTo(camera.position, {x: 0, y: 0, z: -100}, {
        x: 0,
        y: 0,
        z: 2,
        duration: 2,
        ease: "power3.out"
    })

    .fromTo(camera.position, {x: 0, y: 0, z: 2}, {
        x: 0, y: -40, z: 5, scrollTrigger: {
            trigger: body,
            start: "top 0%",
            end: "bottom 0%",
            scrub: true
        }
    })

    // .fromTo(camera.position, {
    //     x: 0, y: 0, z: 2
    // }, {
    //     x: 0, y: -10, z: 2, scrollTrigger: {
    //         trigger: landingBlock,
    //         start: "top 0%",
    //         end: "bottom 0%",
    //         scrub: true,
    //         markers: true
    //     }
    // })

    // .fromTo(camera.position, {
    //     x: 0, y: -10, z: 2
    // }, {
    //     x: 0, y: -20, z: 2, scrollTrigger: {
    //         trigger: workExpBlock,
    //         start: "top 0%",
    //         end: "bottom 0%",
    //         scrub: true,
    //     }
    // })

    // .fromTo(camera.position, {
    //     x: 0, y: -20, z: 2
    // }, {
    //     x: 0, y: -30, z: 2, scrollTrigger: {
    //         trigger: projectsBlock,
    //         start: "top 0%",
    //         end: "bottom 0%",
    //         scrub: true,
    //         // markers: true
    //     }
    // })

    // .fromTo(camera.position, {
    //     x: 0, y: -30, z: 2
    // }, {
    //     x: 0, y: -32, z: 2, scrollTrigger: {
    //         trigger: skillsBlock,
    //         start: "top 0%",
    //         end: "bottom 0%",
    //         scrub: true,
    //     }
    // });

    return tl;
}

export default getTimeline;