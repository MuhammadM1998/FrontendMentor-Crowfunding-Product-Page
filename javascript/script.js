'use strict';

// Elements

const backBtns = document.querySelectorAll('.back-btn');
const modalDefault = document.querySelector('#modal-default');
const modalDefaultBtns = document.querySelectorAll('.modal-default__btn');
const modalDefaultClose = document.querySelector('.modal-default__close');
const modalCompleted = document.querySelector('#modal-completed');
const modalCompletedBtn = document.querySelector('.modal-completed__btn');
const overlay = document.querySelector('#overlay');
const bookmarkBtn = document.querySelector('.bookmark-btn');
const bookmarkCircle = document.querySelector('.bookmark-btn__circle');
const bookmarkIcon = document.querySelector('.bookmark-btn__icon');
const boomarkText = document.querySelector('.bookmark-btn__span');

const openDefaultModal = function() {
    showOverlay();
    modalDefault.classList.remove('modal-default--hidden');

    // Listening for Esc or Clicking the close button to close the modal
    modalDefaultClose.addEventListener('click', handleDefaultModal);
    window.addEventListener('keydown', handleDefaultModal);
};

const handleDefaultModal = function(e) {
    if (e.target.closest('.modal-default__close') || e.key === 'Escape') {
        closeModals();
        hideOverlay();
    }
};

const openCompletedModal = function() {
    closeModals();
    console.log(modalCompleted);
    modalCompleted.classList.remove('modal-completed--hidden');

    // Listening for Esc or Clicking the close button to close the modal
    modalCompletedBtn.addEventListener('click', handleCompletedModal);
    window.addEventListener('keydown', handleCompletedModal);
};

const handleCompletedModal = function(e) {
    if (e.target.closest('.modal-completed__btn') || e.key === 'Escape') {
        hideOverlay();
        closeModals();
    }
};

const closeModals = function() {
    modalDefault.classList.add('modal-default--hidden');
    modalCompleted.classList.add('modal-completed--hidden');
};

const hideOverlay = function() {
    overlay.classList.add('overlay--hidden');
};

const showOverlay = function() {
    overlay.classList.remove('overlay--hidden');
};

const handleBookmark = function() {
    boomarkText.classList.toggle('bookmarked--checked');
    bookmarkCircle.classList.toggle('bookmark-btn__circle--checked');
    bookmarkIcon.classList.toggle('bookmark-btn__icon--checked');
};

backBtns.forEach(btn => btn.addEventListener('click', openDefaultModal));
modalDefaultBtns.forEach(btn => btn.addEventListener('click', openCompletedModal));
bookmarkBtn.addEventListener('click', handleBookmark);