const rainContainer = document.getElementById('rain');
const scene = document.querySelector('.scene');

function createRain() {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = Math.random() * 2 + 1 + 's';
    rainContainer.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 3000);
}

function createSplash(x, y) {
    const splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = x + 'px';
    splash.style.bottom = '0px';
    scene.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 500);
}

setInterval(createRain, 100);

scene.addEventListener('click', (e) => {
    createSplash(e.clientX, e.clientY);
});

// Auto-create splashes for natural feel
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    createSplash(x, 0);
}, 500);