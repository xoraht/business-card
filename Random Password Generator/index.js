const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let genPassBtn = document.getElementById('genPassBtn');
    genPassBtn.addEventListener('click', function renderPassword() {
    result1 = document.getElementById('result1');
    result1.textContent = generatePassword();
    result2 = document.getElementById('result2');
    result2.textContent = generatePassword();
});

function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += randomCharacter();
    }
    return password;
}
