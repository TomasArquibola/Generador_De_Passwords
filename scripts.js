// Obtenemos referencias a los elementos del DOM
const uppercaseEl = document.getElementById('uppercase');   // Checkbox para incluir mayúsculas
const lowercaseEl = document.getElementById('lowercase');   // Checkbox para incluir minúsculas
const numbersEl = document.getElementById('numbers');       // Checkbox para incluir números
const symbolsEl = document.getElementById('symbols');       // Checkbox para incluir símbolos
const lengthEl = document.getElementById('length');         // Input para elegir la longitud de la contraseña
const generateBtn = document.getElementById('generateBtn'); // Botón para generar la contraseña
const passwordEl = document.getElementById('password');     // Input donde se muestra la contraseña generada
const copyBtn = document.getElementById('copyBtn');         // Botón para copiar la contraseña al portapapeles
const securityIndicatorEl = document.querySelector('.security-indicator .bar'); // Barra de seguridad
const securityTextEl = document.getElementById('security-text');                // Texto que muestra el nivel de seguridad

// Caracteres disponibles para cada tipo
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-`~[]\\{}|;\':",./<>?';

// Funciones que devuelven un carácter aleatorio del tipo correspondiente
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

// Función principal para generar la contraseña
function generatePassword() {
    const length = +lengthEl.value; // Se convierte a número el valor del input
    let password = '';              // Donde se va a ir armando la contraseña
    let charSet = '';               // Lista de caracteres disponibles según lo que seleccione el usuario

    // Se agregan los caracteres seleccionados al conjunto charSet
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

    // Si no se seleccionó ningún tipo, se devuelve una contraseña vacía
    if (charSet === '') {
        return '';
    }

    // Se genera la contraseña eligiendo caracteres aleatorios del conjunto
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

// Función que actualiza el nivel de seguridad visualmente
function updateSecurityIndicator(password) {
    const length = password.length;
    let strength = 0;

    // Se suman puntos según la complejidad
    if (length >= 8) strength++;                         // Longitud mínima
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++; // Mayús + minús
    if (/[0-9]/.test(password)) strength++;              // Contiene números
    if (/[^a-zA-Z0-9]/.test(password)) strength++;       // Contiene símbolos

    // Se ajusta el ancho de la barra según la fuerza (25% por punto)
    securityIndicatorEl.style.width = `${strength * 25}%`;

    // Cambia el color y texto de acuerdo a la fuerza
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
        // Si no hay contraseña, reiniciar todo
        securityIndicatorEl.style.backgroundColor = '#ddd';
        securityTextEl.textContent = '';
        securityIndicatorEl.style.width = '0%';
    }
}

// Cuando se hace clic en el botón "Generar", se crea y muestra la contraseña
generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordEl.value = password;
    updateSecurityIndicator(password);
});

// Copiar la contraseña al portapapeles
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

// Generar una contraseña inicial al cargar la página
const initialPassword = generatePassword();
passwordEl.value = initialPassword;
updateSecurityIndicator(initialPassword);
