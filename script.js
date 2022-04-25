
    const displayform = _('displayForm');
    const forlogin = _('forLogin')
    const forregister = _('forRegister')
    const formlogin = _('formLogin')
    const formregister = _('formRegister')
    const formcontainer = _('formContainer')
    displayform.addEventListener('click', showForm);

        // retourner a se connecter

    forlogin.addEventListener('click', ()=> {
        forlogin.classList.add('active');
        forregister.classList.remove('active');
        if (formlogin.classList.contains('toggleForm')) {
            formcontainer.style.transform= 'translate(0%)';
            formcontainer.style.transition = 'transform .5s';
            formregister.classList.add('toggleForm');
            formlogin.classList.remove('toggleForm');
        }
    });

    // aller a s'inscrire

    forregister.addEventListener('click', () => {
        forlogin.classList.remove('active');
        forregister.classList.add('active');
        if (formregister.classList.contains('toggleForm')) {
            formcontainer.style.transform = 'translate(-100%)';
            formcontainer.style.transiction = 'transform .5s';
            formregister.classList.remove('toggleForm')
            formlogin.classList.add('toggleForm');
        }
    });

    function _(e) {
        return document.getElementById (e)
    }

    function showForm() {
        document.querySelector('.form-wrapper .card').classList.toggle('show');
    }