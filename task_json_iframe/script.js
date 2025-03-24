document.addEventListener("DOMContentLoaded", function() {
    const works = {

        "task1": { "title": "Basic HTML Styling", "url": "works/task1/index.html" },
        "task2": { "title": "CSS Hover", "url": "works/task2/index.html" },
        "task3": { "title": "Welcome to JS", "url": "works/task3/index.html" },
        "task4": { "title": "Calculator with JS", "url": "works/task4/index.html" },
        "task5": { "title": "String Operation", "url": "works/task5/index.html" },
        "task6": { "title": "Conditions", "url": "works/task6/index.html" },
        "task7": { "title": "Call-Stack with Array", "url": "works/task7/index.html" },
        "task8": { "title": "Loops", "url": "works/task8/index.html", },
        "task9": { "title": "Class Work", "url": "works/task9/index.html" },
        "task10": { "title": "Class Work - Objects_2", "url": "works/task10/index.html" },
        "task11": { "title": " Functions", "url": "works/task11/index.html" },
        "task12": { "title": "Class & Bootstrap", "url": "works/task12/index.html" },
        "task13": { "title": "Class & Bootstrap", "url": "works/task13/index.html" },
        "task14": { "title": "Loops", "url": "works/task14/index.html" }

    };
    const projectList = document.getElementById('project-list');
    for (const key in works) {
        if (works.hasOwnProperty(key)) {
            const project = works[key];
            const listItem = document.createElement('li');
            const projectLink = document.createElement('a');
            projectLink.href = "#";
            projectLink.textContent = project.title;
            projectLink.addEventListener('click', () => displayProject(project));
            listItem.appendChild(projectLink);
            projectList.appendChild(listItem);
        }
    }
    function displayProject(project) {
        const projectDisplay = document.getElementById('project-display');
        projectDisplay.innerHTML = `
            <h2>${project.title}</h2>
            <iframe src="${project.url}" width="100%" height="500px"></iframe>
        `;
    }
});
