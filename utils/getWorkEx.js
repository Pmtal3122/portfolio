// const workExp = require('../lib/workExp.json');
// import workExp from '../lib/workExp.json';
function getWorkExp() {

    fetch('https://pmtal3122.github.io/portfolio/lib/workExp.json')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const workExp = await response.json();
            let workExDiv = document.getElementById('workEx');
            let n = workExp.length;
            for (let i = 0; i < n; i++) {
                const tempBlock = document.createElement('div');
                tempBlock.className = 'workExBlock';

                const workExOuterContainer = document.createElement('div');
                workExOuterContainer.className = 'workExOuterContainer';
                tempBlock.appendChild(workExOuterContainer);

                const workExInnerContainer = document.createElement('div');
                workExInnerContainer.className = 'workExInnerContainer';
                workExOuterContainer.appendChild(workExInnerContainer);

                if(i%2==1) tempBlock.classList.add('workExRight');
                workExInnerContainer.innerHTML = `
        <h3>${workExp[i].position}</h3>
        <p>${workExp[i].company}</p>
        <p>${workExp[i].startDate} to ${workExp[i].endDate}</p>
        <ul>
            ${workExp[i].responsibilities.map(res => `<li>${res}</li>`).join('')}
        </ul>
    `;
                workExDiv.appendChild(tempBlock);
            }
        })

        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export default getWorkExp;