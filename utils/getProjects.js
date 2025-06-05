function getProjects() {
    fetch('https://pmtal3122.github.io/portfolio/lib/projects.json')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const projects = await response.json();
            let projectsDiv = document.getElementById('projects');
            let n = projects.length;
            for (let i = 0; i < n; i++) {
                const projectBlock = document.createElement('div');
                projectBlock.className = 'projectBlock';

                projectBlock.innerHTML = `
                    <h3>${projects[i].name}</h3>
                    ${projects[i].keywords.map(keyword => `<i class="keyword">${keyword}</i>`).join(', ')}
                    <p>${projects[i].startDate} -- ${projects[i].endDate}</p>
                    <ul>
                        ${projects[i].details.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                `;
                projectsDiv.appendChild(projectBlock);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export default getProjects;