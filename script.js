
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