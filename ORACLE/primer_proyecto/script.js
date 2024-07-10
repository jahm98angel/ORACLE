function encryptText() {
    let inputText = document.getElementById('inputText').value.trim();
    
    // Realizar la encriptación según las reglas especificadas
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value.trim();
    
    // Realizar la desencriptación invirtiendo las reglas
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById('outputText').value = decryptedText;
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al intentar copiar el texto: ', err);
    });
}
