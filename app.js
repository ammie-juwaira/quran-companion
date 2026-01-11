
const screens = document.querySelectorAll('.screen');
const buttons = document.querySelectorAll('[data-screen]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        showScreen(btn.dataset.screen);
    });
});

function showScreen(id) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}