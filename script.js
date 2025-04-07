function showSection(sectionId) {
    // Barcha bo'limlarni yashirish
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Tanlangan bo'limni ko'rsatish
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
