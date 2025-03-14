const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

// Function to create the navigation panel
function createNavigation() {
    const navList = document.getElementById('nav-list');

    for (const key in works) {
        const work = works[key];
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = work.title;
        link.href = "#"; // Prevent default link behavior
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent page reload
            loadContent(work.url); // Load the content
        });

        listItem.appendChild(link);
        navList.appendChild(listItem);
    }
}

// Function to load content into the iframe
function loadContent(url) {
    const contentFrame = document.getElementById('content-frame');
    contentFrame.src = url;
}

// Initialize the navigation panel when the page loads
document.addEventListener('DOMContentLoaded', createNavigation);