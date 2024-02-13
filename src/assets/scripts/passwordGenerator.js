const passwordGeneratorBtn = document.querySelector('.password-generator-button');
const passwordGeneratorInput = document.querySelector('.password-generator-input');
passwordGeneratorBtn.addEventListener('click', generatePassword);

function shuffleString(str) {
  const arr = str.split('');

  arr.sort(function () {
    return 0.5 - Math.random();
  });
  str = arr.join('');
  return str;
}

function generatePassword() {
  const passwordLength = 8;
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = "!@#$%^&*()_+{};:'|<>?~";

  const numbersRegex = /\d/;
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const symbolsRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    if (!numbersRegex.test(password)) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    } else if (!lowerCaseRegex.test(password)) {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    } else if (!upperCaseRegex.test(password)) {
      password += upperCase[Math.floor(Math.random() * upperCase.length)];
    } else if (!symbolsRegex.test(password)) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    } else {
      const allCharacters = lowerCase + upperCase + numbers + symbols;
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
  }
  password = shuffleString(password);
  passwordGeneratorInput.value = password;
}
