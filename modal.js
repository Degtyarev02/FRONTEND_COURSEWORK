const CLASS_LIST_LOGIN = {
    MODAL_LOGIN: 'login-modal',
    MODAL_ACTIVE_LOGIN: 'login-modal-active',
    TRIGGER_OPEN_LOGIN: 'js-modal-open',
    TRIGGER_CLOSE_LOGIN: 'js-modal-close'
};

const CLASS_LIST_NEWSLETTER = {
    MODAL_NEWSLETTER: 'newsletter-modal',
    MODAL_ACTIVE_NEWSLETTER: 'login-modal-active',
    TRIGGER_OPEN_NEWSLETTER: 'newsletter-modal-open',
    TRIGGER_OPEN_REGISTRATION: 'registration-modal-open',
    TRIGGER_CLOSE_NEWSLETTER: 'js-modal-close'
};


document.addEventListener('click', (event) => {
    //open
    if (event.target.closest(`.${CLASS_LIST_LOGIN.TRIGGER_OPEN_LOGIN}`)) {
        console.log('open');
        event.preventDefault();

        const target = event.target.closest(`.${CLASS_LIST_LOGIN.TRIGGER_OPEN_LOGIN}`);
        const modalId = target.getAttribute('href').replace('#', '');
        const modal = document.getElementById(modalId);
        document.body.style.overflow = 'hidden';

        modal.classList.add(CLASS_LIST_LOGIN.MODAL_ACTIVE_LOGIN);

    }

    if (event.target.closest(`.${CLASS_LIST_NEWSLETTER.TRIGGER_OPEN_NEWSLETTER}`)) {
        console.log('open');
        event.preventDefault();

        const target = event.target.closest(`.${CLASS_LIST_NEWSLETTER.TRIGGER_OPEN_NEWSLETTER}`);
        const modalId = target.getAttribute('href').replace('#', '');
        const modal = document.getElementById(modalId);
        document.body.style.overflow = 'hidden';
        modal.classList.add(CLASS_LIST_NEWSLETTER.MODAL_ACTIVE_NEWSLETTER);

    }

    if (event.target.closest(`.${CLASS_LIST_NEWSLETTER.TRIGGER_OPEN_REGISTRATION}`)) {
        console.log('open');
        event.preventDefault();

        const modal1 = event.target.closest(`.${CLASS_LIST_LOGIN.MODAL_LOGIN}`);
        document.body.style.overflow = 'visible';
        modal1.classList.remove(CLASS_LIST_LOGIN.MODAL_ACTIVE_LOGIN);


        const target = event.target.closest(`.${CLASS_LIST_NEWSLETTER.TRIGGER_OPEN_REGISTRATION}`);
        const modalId = target.getAttribute('href').replace('#', '');
        const modal = document.getElementById(modalId);
        document.body.style.overflow = 'hidden';
        modal.classList.add(CLASS_LIST_NEWSLETTER.MODAL_ACTIVE_NEWSLETTER);

    }

    //close
    if (event.target.closest(`.${CLASS_LIST_LOGIN.TRIGGER_CLOSE_LOGIN}`) ||
        event.target.classList.contains(CLASS_LIST_LOGIN.MODAL_ACTIVE_LOGIN)
    ) {
        console.log('close');
        event.preventDefault();
        const modal = event.target.closest(`.${CLASS_LIST_LOGIN.MODAL_LOGIN}`);
        document.body.style.overflow = 'visible';
        modal.classList.remove(CLASS_LIST_LOGIN.MODAL_ACTIVE_LOGIN);
    }
});
