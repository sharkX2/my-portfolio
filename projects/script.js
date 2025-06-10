// Example data (this could also be fetched from a separate .json file)
const projects = [
  {
    title: "Project 1",
    image: "./assets/images/projects/project1.png",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project1.png"
  },
  {
    title: "Project 2",
    image: "./assets/images/projects/project2.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project2.png.jpg"
  },
  {
    title: "Project 3",
    image: "./assets/images/projects/project3.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project3.png.jpg"
  },
  {
    title: "Project 4",
    image: "./assets/images/projects/project4.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project4.png.jpg"
  },
  {
    title: "Project 5",
    image: "./assets/images/projects/project5.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project5.png.jpg"
  },
  {
    title: "Project 6",
    image: "./assets/images/projects/project6.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project6.png.jpg"
  },
  {
    title: "Project 7",
    image: "./assets/images/projects/project7.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project7.png.jpg"
  },
  {
    title: "Project 8",
    image: "./assets/images/projects/project8.png.jpg",
    description: "Creative work made using Canva.",
    link: "./assets/images/projects/project8.png.jpg"
  }
];

// Inject into HTML
const container = document.querySelector(".box-container");

projects.forEach((project) => {
  const box = document.createElement("div");
  box.classList.add("box", "tilt");

  box.innerHTML = `
    <img draggable="false" src="${project.image}" alt="${project.title}" />
    <div class="content">
      <div class="tag">
        <h3>${project.title}</h3>
      </div>
      <div class="desc">
        <p>${project.description}</p>
        <div class="btns">
          <a href="${project.link}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
        </div>
      </div>
    </div>
  `;

  container.appendChild(box);
});

