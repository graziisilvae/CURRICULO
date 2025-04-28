
const themeToggleButton = document.getElementById('theme-toggle');


themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        document.documentElement.style.setProperty('--background-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-background', '#555');
        document.documentElement.style.setProperty('--button-color', '#444');
        document.documentElement.style.setProperty('--button-text-color', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--header-background', 'rgb(203, 112, 245)');
        document.documentElement.style.setProperty('--button-color', '#007BFF');
        document.documentElement.style.setProperty('--button-text-color', '#ffffff');
    }
});


const figures = document.querySelectorAll('.gallery figure');
const imageInfo = document.getElementById('image-info');


figures.forEach(figure => {
    figure.addEventListener('mouseover', () => {
        const img = figure.querySelector('img');
        imageInfo.textContent = img.alt; // Exibe o alt da imagem
        imageInfo.style.display = 'block'; // Mostra a div com a informação
    });

    figure.addEventListener('mouseout', () => {
        imageInfo.style.display = 'none'; // Esconde a div ao sair
    });
});