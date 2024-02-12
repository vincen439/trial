const dropdownContent = document.querySelector('.dropdown-content');
const portfolioProjects = document.querySelector('main');

dropdownContent.addEventListener('click', (event) => {
  event.preventDefault();
  const category = event.target.textContent;
  
  // Clear previous projects
  portfolioProjects.innerHTML = '';
  
  // Fetch and display projects based on the selected category
  fetch(`https://api.example.com/portfolio?category=${category}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p>`;
        portfolioProjects.appendChild(projectElement);
      });
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
    });
});