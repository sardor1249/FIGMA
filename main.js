let telegram_bot_id = "5865854827:AAGVRMjfjhMNFTWWQLq1aH4jkOCEjOJLmIE";
let chat_id = 5958823311;
let name, email, message;
let ready = function () {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    masage = document.getElementById("masage").value;
    message = "Ismi: " + name + "\nEmail: " + email + "\nXabar: " + masage;
};
function sendmessage() {
    event.preventDefault();
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("masage").value = "";
    return false;
};