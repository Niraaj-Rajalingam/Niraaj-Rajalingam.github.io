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

// Loads most recent project
function loadRecentProject() {
    const recentProjectsContainer = document.getElementById('recent-projects');
    if (projects.length > 0) {
        const mostRecent = projects[0];
        recentProjectsContainer.innerHTML = createProjectCard(mostRecent);
    }
}

// Loads remaining projects
function loadRemainingProjects() {
    const projectsContainer = document.querySelector('#projects .row:not(#recent-projects)');
    const remainingProjects = projects.slice(1);
    
    remainingProjects.forEach(project => {
        projectsContainer.innerHTML += createProjectCard(project);
    });
    
    document.getElementById('load-more').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadRecentProject();
    document.getElementById('load-more').addEventListener('click', loadRemainingProjects);
});