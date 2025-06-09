const getTimeline = (camera, model) => {
    const tl = gsap.timeline();
    const body = document.querySelector('body');
    const landingLeftBlock = document.querySelector('#landingLeft');
    const landingRightBlock = document.querySelector('#landingRight');

    const workExpBlock = document.querySelector('#workEx');
    const workExpHeader = document.querySelector('#workEx h2');
    const workExBlocks = document.querySelectorAll('.workExBlock');
    
    const projectsBlock = document.querySelector('#projects');
    const projectsHeader = document.querySelector('#projects h2');
    const projectBlocks  = document.querySelectorAll('.projectBlock');

    const skillsBlock = document.querySelector('#skills');
    const skillsHeader = document.querySelector('#skills h2');
    const skillBlocks = document.querySelectorAll('.skillBlock');
    
    const contactBlock = document.querySelector('#contact');
    const contactHeader = document.querySelector('#contact h2');
    const contactForm = document.querySelector('#contactForm');

    // Initial
    // 1. Camera zooms in from a distance
    tl.fromTo(camera.position, {x: 0, y: 0, z: -100}, {
        x: 0,
        y: 0,
        z: 2,
        duration: 2,
        ease: "power3.out"
    })

    // 2. Model movement
    .fromTo(model.position, {z: -100}, {z: 0, duration: 2, ease: "power3.out"}, "<")

    // 3. Landing left floats from left
    .fromTo(landingLeftBlock, {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1, ease: "power3.out"}, "<")

    // 4. Landing right floats from right
    .fromTo(landingRightBlock, {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 2, ease: "power3.out"}, "<")


    // Work Experience Section
    // 1. Work experience header fades in
    .fromTo(workExpHeader, {opacity: 0}, {opacity: 1, scrollTrigger: {trigger: workExpBlock, start: "top 80%", end: "top 60%", scrub: true, once: true}})

    
    // Projects Section
    // 1. Projects header fades in
    .fromTo(projectsHeader, {opacity: 0}, {opacity: 1, scrollTrigger: {trigger: projectsBlock, start: "top 80%", end: "top 60%", scrub: true, once: true}})


    // Skills Section
    // 1. Skills header fades in
    .fromTo(skillsHeader, {opacity: 0}, {opacity: 1, scrollTrigger: {trigger: skillsBlock, start: "top 80%", end: "top 60%", scrub: true, once: true}})


    // Contact Section
    // 1. Contact header fades in
    .fromTo(contactHeader, {opacity: 0}, {opacity: 1, scrollTrigger: {trigger: contactBlock, start: "top 80%", end: "top 60%", scrub: true, once: true}})

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

    // Work Experience Blocks Animation
    workExBlocks.forEach((block) => {
        gsap.fromTo(block, {opacity: 0, x: block.classList.contains("workExRight") ? 100 : -100}, {
            opacity: 1,
            x: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: block,
                start: `top 80%`,
                end: `top 60%`,
                scrub: true,
                once: true
            }
        });
    })

    // Projects Blocks Animation
    projectBlocks.forEach((block) => {
        gsap.fromTo(block, {opacity: 0, x: -100}, {
            opacity: 1,
            x: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: block,
                start: `top 80%`,
                end: `top 60%`,
                scrub: true,
                once: true
            }
        });
    })

    // Skills Blocks Animation
    skillBlocks.forEach((block, i) => {
        gsap.fromTo(block, {opacity: 0, y: 100}, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 0.1,
            delay: 0.05 * i,
            scrollTrigger: {
                trigger: skillsHeader,
                start: `top 60%`,
                once: true
            }
        });
    });

    gsap.fromTo(contactForm, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: {trigger: contactBlock, start: "top 60%"}})

    return tl;
}

window.addEventListener('load', getTimeline);

export default getTimeline;