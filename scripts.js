const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const lengthEl = document.getElementById('length');
const generateBtn = document.getElementById('generateBtn');
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const securityIndicatorEl = document.querySelector('.security-indicator .bar');
const securityTextEl = document.getElementById('security-text');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-`~[]\{}|;\':",./<>?';

function getLowercase() {
    return lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
}

function getUppercase() {
    return uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
}

function getNumber() {
    return numberChars[Math.floor(Math.random() * numberChars.length)];
}

function getSymbol() {
    return symbolChars[Math.floor(Math.random() * symbolChars.length)];
}

function generatePassword() {
    const length = +lengthEl.value;
    let password = '';
    let charSet = '';

    if (uppercaseEl.checked) {
        charSet += uppercaseChars;
    }
    if (lowercaseEl.checked) {
        charSet += lowercaseChars;
    }
    if (numbersEl.checked) {
        charSet += numberChars;
    }
    if (symbolsEl.checked) {
        charSet += symbolChars;
    }

    if (charSet === '') {
        return '';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

function updateSecurityIndicator(password) {
    const length = password.length;
    let strength = 0;

    if (length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    securityIndicatorEl.style.width = `${strength * 25}%`;

    if (strength <= 1) {
        securityIndicatorEl.style.backgroundColor = 'red';
        securityTextEl.textContent = 'Débil';
    } else if (strength === 2) {
        securityIndicatorEl.style.backgroundColor = 'orange';
        securityTextEl.textContent = 'Media';
    } else if (strength === 3) {
        securityIndicatorEl.style.backgroundColor = 'yellowgreen';
        securityTextEl.textContent = 'Fuerte';
    } else if (strength === 4) {
        securityIndicatorEl.style.backgroundColor = 'green';
        securityTextEl.textContent = 'Muy Fuerte';
    } else {
        securityIndicatorEl.style.backgroundColor = '#ddd';
        securityTextEl.textContent = '';
        securityIndicatorEl.style.width = '0%';
    }
}

generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordEl.value = password;
    updateSecurityIndicator(password);
});

copyBtn.addEventListener('click', () => {
    const password = passwordEl.value;
    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('¡Contraseña copiada al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err);
            });
    } else {
        alert('¡Genera una contraseña primero!');
    }
});

// Generar una contraseña inicial al cargar la página (opcional)
const initialPassword = generatePassword();
passwordEl.value = initialPassword;
updateSecurityIndicator(initialPassword);