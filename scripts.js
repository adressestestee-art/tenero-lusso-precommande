document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preorder-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche l'envoi standard du formulaire

        // Valider le formulaire
        if (form.checkValidity()) {
            
            // Simuler l'envoi des données (remplacez cette partie par votre logique de backend)
            // Pour l'exemple, nous affichons simplement un message de succès
            
            // Récupérer les données du formulaire
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            console.log('Précommande soumise avec les données :', data);

            // Afficher le message de succès
            successMessage.classList.remove('hidden');
            successMessage.classList.add('visible');

            // Réinitialiser le formulaire après 5 secondes
            setTimeout(() => {
                form.reset();
                successMessage.classList.remove('visible');
                successMessage.classList.add('hidden');
            }, 5000);

        } else {
            // Le formulaire n'est pas valide, le navigateur affichera les messages d'erreur par défaut
            console.log('Le formulaire est invalide.');
        }
    });
});
