const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("button-el")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function genPassword() {
    let password = ""
    let generated1 = ""
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
                let randomIndex1 = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
        generated1 += characters[randomIndex1]
    }
    
    password1.textContent = password
    password2.textContent = generated1
    
}



