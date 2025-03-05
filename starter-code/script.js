const range = document.querySelector('.password-card__range');
const lengthOutput = document.querySelector('.password-card__password-length');



const handleLengthDisplay = (e) => {
    const target = e.target;
    const value = (target.value - target.min) / (target.max - target.min) * 100; //Convert value into percentage
    target.style.backgroundSize = `${value}% 100%`; //Update the progress bar
    lengthOutput.value = target.value;
}

range.addEventListener('input', handleLengthDisplay);