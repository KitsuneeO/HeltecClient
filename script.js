<script>
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Animacja odpali się, gdy 10% elementu będzie widoczne
    });

    // Wybieramy wszystkie elementy z klasą .reveal i zaczynamy ich obserwację
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
</script>
