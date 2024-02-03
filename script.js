

const modalData = [{
    title: 'Employee Directory',
    description: 'Employee directory built using HTML, CSS and JavaScript. I used the fetch API to get information about employees to display. It uses CSS Grid for the layout, and JavaScript to open a pop up window for each employee. I also made a search bar where the user can search employees.',
    skills: 'HTML, CSS, JavaScript, fetch API',
    img: 'assets/images/project-8-desktop.png',
    link_text: 'View project',
    link_url: 'https://jamesbdev.github.io/tech-degree-unit-8/'
}]

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
            <img src="${data.img}" alt="modal image">
            <a href="${data.link_url}" class="btn btn-primary" target="_blank">${data.link_text}</a>

        </div>
    `;
    //append modal to the body
    document.body.appendChild(modal)
    modal.style.display = 'block';
    const close = document.querySelector('.close')
    close.addEventListener('click', () => {
        modal.remove()
    })
}

const buttons = document.querySelectorAll(".open-modal");
const button = document.querySelector('.open-modal');

button.addEventListener('click', (event) => {
    event.preventDefault();
    showModal(modalData[0]);
});

// buttons.forEach(element, index => {
//     element.addEventListener('click', (event) => {
//         console.log('clicked');
//         event.preventDefault();
//         showModal(modalData[index]);
//     });
// });

