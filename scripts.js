document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            contentSections.forEach(function (section) {
                if (section !== targetSection) {
                    section.classList.remove('show');
                }
            });

            targetSection.classList.toggle('show');
        });
    });
});
