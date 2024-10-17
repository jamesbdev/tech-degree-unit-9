

const modalData = [{
    title: 'Employee Directory',
    description: 'Employee directory built using HTML, CSS and JavaScript. I used the fetch API to get information about employees to display. It uses CSS Grid for the layout, and JavaScript to open a pop up window for each employee. I also made a search bar where the user can search employees.',
    skills: 'HTML, CSS, JavaScript, fetch API',
    img: 'assets/images/project-8-desktop.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-8/'
}, {
    title: 'Web app dashboard',
    description: 'In this project I used HTML, CSS, JavaScript to create a dashboard for a fictional company application. I used the graph.js library to create graph models using data. There is a search auto-complete for the employee messaging feature, a form validation using JavaScript. I also added a way to save the user settings using local storage.',
    skills: 'HTML, CSS, JavaScript, graph.js',
    img: 'assets/images/unit-7-project.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-7/'
} , {
    title: 'Game Show App',
    description: 'I used JavaScript to create a game where the user guesses letters. The game ends with the user guessing the whole phrase or if the user misses 5 times. It stores data for 6 phrases and display them randomly. The code checks if the letter selected by the user matches letters in the phrase. If it does the letters are displayed on the screen.',
    skills: 'HTML, CSS, JavaScript',
    img: 'assets/images/unit-6-project.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-6/'
}, {
    title: 'Interactive Photo Gallery',
    description: ' A photo gallery built using CSS grids to display the images. I used a JavaScript plug in to display a modal when the user clicks on the images. The modal contains the image in full size with a description. I also implemented a searching functionality. It uses JavaScript to match the value of the input with the images descriptions.',
    skills: 'HTML, CSS, JavaScript',
    img: 'assets/images/photo-gallery.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-5/'
}, {
    title: 'Web style guide',
    description: 'Using SCSS to create styling for a web style guide. I used SCSS to create a modular file system. I also used it to store color and breakpoint variables.',
    skills: 'HTML, SCSS',
    img: 'assets/images/style-guide.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-4/'
}, {
    title: 'Online registration form',
    description: 'I created and styled a form in HTML and CSS. It works on mobile, tablet and desktop.',
    skills: 'HTML, CSS',
    img: 'assets/images/html_form.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-3/'
} , {
    title: 'Game show app 2',
    description: 'I used JavaScript Object Oriented programming to create a web based game where the user needs to guess a phrase',
    skills: 'HTML, CSS, JavaScript',
    img: 'assets/images/game_show_app_2.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/full-stack-js-unit-4/'
} , {
    title: 'Employee directory 2',
    description: 'Fetches data from API and display employee cards. User can click on a card and view employee information',
    skills: 'HTML, CSS, JavaScript',
    img: 'assets/images/employee_directory_2.png',
    img_alt: 'employee pop up with their name and contact details',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/fullstack-js-unit-5/'
}
];

//Displays a modal with the project information
const showModal = (data) => {
    //create modal
    const modal = document.createElement('div');
    //get the overlay element
    const overlay = document.getElementsByClassName('overlay')[0];
    //display the overlay
    overlay.style.display = 'block';
    //add modal class
    modal.classList.add('modal')
    //add modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <p><strong>Technologies used:</strong> ${data.skills}</p>
            <img src="${data.img}" alt="${data.img_alt}">
            <a href="${data.link_url}" class="btn btn-primary" target="_blank">${data.link_text}</a>

        </div>
    `;
    //append modal to the body
    document.body.appendChild(modal)
    //display modal
    modal.style.display = 'block';
    //function to close modal
    const closeModal = () => {
        //get the close button
        const close = document.querySelector('.close')
        //add event listener
        close.addEventListener('click', () => {
            //hide modal
            modal.remove()
        })
    }
    closeModal();
  
}

//get the card buttons
const buttons = document.querySelectorAll(".open-modal");

//loop through buttons, add an event listener and open the modal 
buttons.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        showModal(modalData[index]);
    });
});

//add search functionality 

const search = document.getElementById('search');

search.addEventListener('keyup', (event) => {
    const value = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        if (title.indexOf(value) !== -1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

});


