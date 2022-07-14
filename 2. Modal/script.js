'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Attaching eventListeners to each button
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    openModal();
  });
}

btnCloseModal.addEventListener('click', function () {
  closeModal();
});

// We can call the callback function closeModal() without the parenthesis
// By doing so, we are "pointing" to that function and not executing it immediately
// once the app fires up.
overlay.addEventListener('click', closeModal);
