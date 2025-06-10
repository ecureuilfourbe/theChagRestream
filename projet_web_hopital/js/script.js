// Script principal pour le site web de l'hôpital d'Avranches-Granville (GH-MSM)

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu hamburger pour les appareils mobiles
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    }
    
    // Fermer le menu mobile lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('show')) {
                navList.classList.remove('show');
            }
        });
    });
    
    // Animation des éléments au défilement
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Vérifier les éléments au chargement initial
    checkFade();
    
    // Vérifier les éléments lors du défilement
    window.addEventListener('scroll', checkFade);
    
    // Gestion des messages d'erreur pour le lecteur vidéo
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoPlayer) {
        videoPlayer.addEventListener('error', function() {
            const videoContainer = document.querySelector('.video-container');
            const errorMessage = document.createElement('div');
            errorMessage.className = 'video-error';
            errorMessage.innerHTML = `
                <p>Impossible de charger le flux vidéo. Veuillez vérifier votre connexion ou réessayer ultérieurement.</p>
                <button class="btn btn-primary mt-2" onclick="location.reload()">Réessayer</button>
            `;
            
            // Supprimer les messages d'erreur précédents
            const existingError = document.querySelector('.video-error');
            if (existingError) {
                existingError.remove();
            }
            
            videoContainer.appendChild(errorMessage);
        });
    }
});

