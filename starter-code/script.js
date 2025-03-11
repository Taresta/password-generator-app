// Etapes
// When the user clicks the generate button:
// First fetch user input. The criteria that user has selected: length and the checkboxes
// Check or verify user input
// Create the password using this criteria
// Display the password
// Display the strength

// Step 1: Fetch
// Using querySelectors
const range = document.querySelector('.password-card__range');
const lengthOutput = document.querySelector('.password-card__password-length');
let passwordLength = 0;
const checkboxes = document.querySelectorAll('.password-card__input-checkbox');
const generateButton = document.querySelector('.password-card__generate-button');
const passwordInput = document.querySelector('.password-card__password');
const copyIcon = document.querySelector('.password-card__copy-icon');
const copyStatus = document.querySelector('.password-card__copied-status');

// Step 2: Verify
// a. There is at least 1 character
// b. At least one checkbox is selected
const validations = {
    length: (length) => length > 0,
    criteria: (checkboxes) => Array.from(checkboxes).some(x => x.checked)
};

function isPasswordCriteriaMet(length, checkboxes, validations) {
    return validations.length(length) && validations.criteria(checkboxes);
}

// Step 3: Generate the Password using the criteria mentioned by the user
// PASSWORD WILL START GENERATING WHEN THE USER HAS CLICKED THE GENERATE BUTTON
// However, it can also be generated once the user has changed the length or any other criteria

const characters = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Numbers: "0123456789",
    Symbols: "~!@#$%^&*()_+{}[].,:;|",
};

function selectCharacters(characters) {
    let dictionary = "";
    const upper = document.querySelector('#upper-case-letters').checked;
    const lower = document.querySelector('#lower-case-letters').checked;
    const numbers = document.querySelector('#numbers').checked;
    const symbols = document.querySelector('#symbols').checked;

    if (upper) dictionary += characters.Uppercase;
    if (lower) dictionary += characters.Lowercase;
    if (numbers) dictionary += characters.Numbers;
    if (symbols) dictionary += characters.Symbols;
    
    return dictionary;
}

function generatePassword(dictionary, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * dictionary.length);
        password += dictionary[randomNumber];
    }
    return password;
}

// Step 4. Display the password
function displayPassword(password) {
    passwordInput.value = password;
}

// Step 5. Calculate and Display the strength 
function calculateStrength(length) {
    return length <= 4 ? "too weak"
         : length <= 8 ? "weak"
         : length <= 16 ? "medium"
         : "strong";
}

// Display the strength
function displayStrength(strength) {
    const strengthOutput = document.querySelector('.password-card__strength-status');
    strengthOutput.textContent = strength === "too weak" ? "TOO WEAK !" : strength.toUpperCase();
}

function clearStrengthBars() {
    const strengthBars = document.querySelectorAll('.password-card__strength-bar');
    console.log(strengthBars);
    strengthBars.forEach(bar => {
        bar.classList.remove('password-card__strength-bar--too-weak', 'password-card__strength-bar--weak', 'password-card__strength-bar--medium', 'password-card__strength-bar--strong');
    });
    console.log(strengthBars);
}

const displayBars = {
    strengthBar1: document.querySelector('[data-bar-number="1"]'),
    strengthBar2: document.querySelector('[data-bar-number="2"]'),
    strengthBar3: document.querySelector('[data-bar-number="3"]'),
    strengthBar4: document.querySelector('[data-bar-number="4"]'),
    'too weak': function() {
        this.strengthBar1.classList.add('password-card__strength-bar--too-weak');
    },
    'weak': function() {
        this.strengthBar1.classList.add('password-card__strength-bar--weak');
        this.strengthBar2.classList.add('password-card__strength-bar--weak');
    },
    'medium': function() {
        this.strengthBar1.classList.add('password-card__strength-bar--medium');
        this.strengthBar2.classList.add('password-card__strength-bar--medium');
        this.strengthBar3.classList.add('password-card__strength-bar--medium');
    },
    'strong': function() {
        this.strengthBar1.classList.add('password-card__strength-bar--strong');
        this.strengthBar2.classList.add('password-card__strength-bar--strong');
        this.strengthBar3.classList.add('password-card__strength-bar--strong');
        this.strengthBar4.classList.add('password-card__strength-bar--strong');
    }
};

//This function is to handle the styles for the range
const handleLengthDisplay = (e) => {
    const target = e.target;
    const value = (target.value - target.min) / (target.max - target.min) * 100;
    target.style.backgroundSize = `${value}% 100%`;
    lengthOutput.value = target.value;
    passwordLength = parseInt(target.value);
};

//Handle the generation of the password
const handleGenerate = () => {
    // Step A. Verify user input
    if (!isPasswordCriteriaMet(passwordLength, checkboxes, validations)) {
        return;
    }
    
    // Select characters
    const dictionary = selectCharacters(characters);

    // Generate password
    const password = generatePassword(dictionary, passwordLength);

    // Display password
    displayPassword(password);

    // Calculate strength
    const strength = calculateStrength(passwordLength);

    // Display strength
    displayStrength(strength);

    // Display strength bars
    clearStrengthBars();
    displayBars[strength]();
};

//Now we just need to create a function that facilitates the copying of the password!
async function handleCopyPassword() {
    if (passwordInput.value !== "") {
        try {
            await navigator.clipboard.writeText(passwordInput.value);
            copyIcon.classList.add('.password-card__copy-icon--copied');
            copyStatus.textContent = 'COPIED';

            setTimeout(() => {
                copyIcon.classList.remove('.password-card__copy-icon--copied');
                copyStatus.textContent = '';
            }, 2000);
        } catch (err) {
            console.log('Copy failed:', err);
        }
    }
}

//Adding the event listeners for all the DOM elements
range.addEventListener('input', handleLengthDisplay);

generateButton.addEventListener('click', handleGenerate);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleGenerate);
});
range.addEventListener('input', handleGenerate);
copyIcon.addEventListener('click', handleCopyPassword);

