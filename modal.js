const CLASS_LIST = {
    MODAL: 'login-modal',
    MODAL_ACTIVE: 'login-modal-active',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close'
};

document.addEventListener('click', (event) => {
    //open
    if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
        console.log('open');
        event.preventDefault();

        const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
        const modalId = target.getAttribute('href').replace('#', '');
        const modal = document.getElementById(modalId);
        document.body.style.overflow = 'hidden';

        modal.classList.add(CLASS_LIST.MODAL_ACTIVE);

    }
    //close
    if (event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
        event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
    ) {
        console.log('close');
        event.preventDefault();
        const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
        document.body.style.overflow = 'visible';
        modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    }
});
