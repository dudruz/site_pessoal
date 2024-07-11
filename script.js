const projects = [
    {
        title: "Calculadora",
        description: "Calculadora funcional feita em html css e js.",
        imageUrl: "img/calculadora.jfif",
        githubUrl: "https://github.com/dudruz/dudruz.github.io/tree/main/Calculadora",
        liveUrl: "https://dudruz.github.io/Calculadora/"
    },
    {
        title: "Snake Game",
        description: "O tão famoso joguimho da cobrinha agora feito em HTML e JS.",
        imageUrl: "img/snake.jfif",
        githubUrl: "https://github.com/dudruz/snake-game",
        liveUrl: "https://dudruz.github.io/snake-game/"
    },
    {
        title: "Pagina de autenticação",
        description: "Pagina de autenticação com verificação de senha e criptografia com armazenamento em .json",
        imageUrl: "img/login1.jfif",
        githubUrl: "https://github.com/dudruz/pagina-de-autentica-o",
        liveUrl: "https://orn-team.000.pe"
    },
];

function loadProjects() {
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubUrl}" target="_blank">Ver no GitHub</a> |
            <a href="${project.liveUrl}" target="_blank">Ver Online</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
