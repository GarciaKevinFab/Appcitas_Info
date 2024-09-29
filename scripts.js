window.addEventListener('scroll', function () {
    const introText = document.querySelectorAll('.intro h2, .intro p');
    introText.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (position < screenHeight) {
            item.classList.add('fade-in');
        }
    });
});
