function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

const generateBtn = document.getElementById('generate');
const lengthInput = document.getElementById('length');
const passwordOutput = document.getElementById('password');

generateBtn.addEventListener('click', () => {
    const length = lengthInput.value;
    const password = generatePassword(length);
    passwordOutput.value = password;
});
