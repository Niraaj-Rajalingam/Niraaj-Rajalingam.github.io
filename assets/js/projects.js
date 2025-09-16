const projects = [
    {
        title: "TourGuidePro",
        image: "/assets/img/tourguidepro.png",
        description: "Developed tourist mapping software with trip planning, route planning, and real-time location information.",
        tools: "C++, OpenGL, OpenStreetMap, Open Data APIs, OOP, Git",
        accomplishments: [
            "Implemented trip planning and route optimization algorithms.",
            "Utilized OSM database to construct the map and third party APIs to retrieve reviews, crime, and weather data.",
            "Optimized performance through multithreading, asynchronous loading, caching, and tile-based loading techniques."
        ]
    },
    {
        title: "ParkSense",
        image: "/assets/img/parksense.png",
        description: "Developed a deep learning-based program to extract, interpret, and display parking sign information, achieving 72% accuracy at a distance of 7 meters in complex scenarios with multiple signs in the frame.",
        tools: "Python, PyTorch, Numpy, OpenCV, YOLOv8, Matplotlib, OpenAI API",
        accomplishments: [
            "Used YOLOv8 to detect and classify parking signs in real-time.",
            "Used Tesseract for OCR to extract text from parking signs."
        ]
    },
    {
        title: "TermTalk",
        image: "/assets/img/terminal.png",
        description: "Developed a terminal-based chat application using C.",
        tools: "C, C++, Socket Programming",
        accomplishments: [
            "Implemented a client-server architecture for real-time communication.",
            "Utilized multithreading to handle multiple clients simultaneously."
        ]
    }
];

function createProjectCard(project) {
    return `
        <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                    <span class="card-title activator teal-text hoverline">${project.title}<i
                            class="mdi-navigation-more-vert right"></i></span>
                    <p>${project.description}</p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text"><small>Accomplishments</small><i
                            class="mdi-navigation-close right"></i></span>
                    <ul>
                        <li><b>Tools:</b> ${project.tools}</li>
                        ${project.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

let remainingProjectsLoaded = false;
const PROJECTS_PER_ROW = 3; 

function loadFirstRow() {
    const recentProjectsContainer = document.getElementById('recent-projects');
    if (projects.length > 0) {
        const firstRowProjects = projects.slice(0, PROJECTS_PER_ROW);
        const projectCards = firstRowProjects
            .map(project => createProjectCard(project))
            .join('');
        recentProjectsContainer.innerHTML = projectCards;
    }
}

function loadAllRemainingProjects() {
    if (remainingProjectsLoaded) return; // Prevent loading multiple times

    const projectsContainer = document.querySelector('#projects .row:not(#recent-projects)');
    const remainingProjects = projects.slice(PROJECTS_PER_ROW); // Get all projects after the first row
    
    if (remainingProjects.length > 0) {
        const projectCards = remainingProjects
            .map(project => createProjectCard(project))
            .join('');
        
        projectsContainer.innerHTML += projectCards;
    }

    document.getElementById('load-more').style.display = 'none';
    remainingProjectsLoaded = true;
}

document.addEventListener('DOMContentLoaded', () => {
    loadFirstRow();
    if (projects.length > PROJECTS_PER_ROW) {
        document.getElementById('load-more').style.display = 'block';
    } else {
        document.getElementById('load-more').style.display = 'none';
    }
    document.getElementById('load-more').addEventListener('click', loadAllRemainingProjects);
});