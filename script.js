const noButton = document.querySelector('.no');
const offset = 100;

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = noButton.getBoundingClientRect();

    const deltaX = left + width / 2 - clientX;
    const deltaY = top + height / 2 - clientY;

    if (Math.abs(deltaX) < offset && Math.abs(deltaY) < offset) {
        let newX = left + (deltaX > 0 ? offset * 2 : -offset * 2);
        let newY = top + (deltaY > 0 ? offset * 2 : -offset * 2);

        newX = Math.max(10, Math.min(window.innerWidth - width - 100, newX));
        newY = Math.max(10, Math.min(window.innerHeight - height - 100, newY));

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }
});

// Add event listener to the 'yes' button
const yesButton = document.querySelector('.button.yes');
yesButton.addEventListener('click', () => {
    window.location.href = 'love.html';
});

noButton.addEventListener('click', () => {
    noButton.style.display = 'none';
    yesButton.textContent = 'Выбора нет!';
});

