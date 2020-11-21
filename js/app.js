document.addEventListener('DOMContentLoaded', () => {

    // Submit Form
    const formInput = document.querySelector('#form');
    formInput.addEventListener('submit', addFormToList);

    // Clear the List
    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', clearList);

});



// Post List
const addFormToList = function (event) {
    event.preventDefault();

    // Add to List
    const listPosition = createListPosition(event.target);
    const outputListPosition = document.querySelector('#animal-list');
    outputListPosition.appendChild(listPosition);

    event.target.reset();

};

const createListPosition = function (form) {

    // Output Name
    const name = document.createElement('h3');
    name.textContent = form.name.value;

    // Output Population
    const population = document.createElement('h4');
    population.textContent = form.population.value;

    // Output Status
    const status = document.createElement('h4');
    status.textContent = form.status.value;

    // Output Position
    const listPosition = document.createElement('li');
    listPosition.classList.add('list-position');
    listPosition.appendChild(name);
    listPosition.appendChild(population);
    listPosition.appendChild(status);

    return listPosition;
};

const clearList = function (event) {
    const animalList = document.querySelector('#animal-list');
    animalList.innerHTML = '';
}