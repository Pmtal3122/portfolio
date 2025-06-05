function getSkills() {
    fetch('https://pmtal3122.github.io/portfolio/lib/skills.json')
    .then(async (response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const skills = await response.json();
        const skillsArray = skills.skills;
        let skillsContainer = document.querySelector('.skillsContainer');
        let n = skillsArray.length;
        for (let i = 0; i < n; i++) {
            const skillBlock = document.createElement('span');
            skillBlock.className = 'skillBlock';
            skillBlock.innerHTML = `
                ${skillsArray[i]}
            `;
            skillsContainer.appendChild(skillBlock);
        }
    })
}

export default getSkills;