(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen = !refs.modal.classList.contains('is-hidden');

    isModalOpen
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open');

    refs.modal.classList.toggle('is-hidden');
  }
})();
