document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preorder-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        if (form.checkValidity()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            console.log('Précommande soumise avec les données :', data);

            successMessage.classList.remove('hidden');
            successMessage.classList.add('visible');
            
            form.reset();

            setTimeout(() => {
                successMessage.classList.remove('visible');
                successMessage.classList.add('hidden');
            }, 5000);

        } else {
            console.log('Le formulaire est invalide.');
        }
    });
});
