const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(mode = true) {
        this.alphabet = [...
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ];
        this.mode = mode
    }

    encrypt(text, key) {
        if (text === undefined) throw new Error(e);
        let result = "";
        if (this.mode) {
            let newText = text.replace(/\s|\W|_|\d/g, '').toUpperCase();
            text = text.toUpperCase();
            key = key.toUpperCase();
            let offset = 0;
            for (var i = 0; i < text.length; i++) {
                if (this.alphabet.indexOf(text[i]) != -1) {
                    result += this.alphabet[(this.alphabet.indexOf(newText[i - offset]) + this.alphabet.indexOf(key[(i - offset) % key.length])) % 26];
                } else {
                    offset++;
                    result += text[i];
                }
            }
        } else {
            result = text.split('').reverse().join('');
        }
        return result;
    }

    decrypt(text, key) {
        let newText = text.replace(/\s|\W|_|\d/g, '').toUpperCase();
        let result = "";
        if (this.mode) {
            key = key.toUpperCase();
            let offset = 0;
            for (var i = 0; i < text.length; i++) {
                if (this.alphabet.indexOf(text[i]) != -1) {
                    result += this.alphabet[(this.alphabet.indexOf(newText[i - offset]) + 26 - this.alphabet.indexOf(key[(i - offset) % key.length])) % 26];
                } else {
                    offset++;
                    result += text[i];
                }
            }
        } else {
            result = text.split('').reverse().join('');
        }
        return result;
    }
}



module.exports = VigenereCipheringMachine;