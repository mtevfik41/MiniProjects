const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.input');
labels.forEach((label, index) => {
    label.innerHTML =
        label.innerText
            .split('')
            .map((letter, index) => `<span style="transition-delay:${index * 50}ms;">${letter}</span>`).join('');

    label.addEventListener('click', () => inputs[index].focus());
})
