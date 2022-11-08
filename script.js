const {app,BrowserWindow} = require('electron')

app.on('ready',()=>{
    let myWindow= new BrowserWindow({
        wight:1000,
        height:500,
        webPreferences:{
            nodeIntegration:true,
        },
    })
    myWindow.loadFile('index.html')
})
var idIncrement = 0; //авто-инкремент
var contact = {
    "id": 0,
    "name": " ",
    "phone": " ",
    "isElected": false,
};

const addButton = document.querySelector('#add_button');
//Данные контакта
const inputName = document.querySelector('#name');
const phone = document.querySelector('#phone');
const isElected = document.querySelector('#elected');

//Обработка ивентов формы добавления
isElected.addEventListener("change", function (){
    contact[isElected.value] = isElected.checked;
})
addButton.addEventListener("click",function (){
    if (inputName.value != null && phone.value != null)
        {
            idIncrement++;
            contact.id = idIncrement;
            contact.name = inputName.value;
            contact.phone = phone.value;
            let json = JSON.stringify(contact);
            console.log(json);
        }
    else{
        alert("Введите данные !")
    }
    }
)

//
function loadContacts() {
    reader.readAsText(contactList);
    reader.onload = function () {
        console.log(reader.result)
    }
}