"use strict";
function waitFor(element, eventName) {
    return new Promise((resolve)=>{
        const eventHandler = ()=>{
            const message = `\u{426}\u{435} \u{431}\u{443}\u{43B}\u{430} \u{43F}\u{43E}\u{434}\u{456}\u{44F} ${eventName} \u{43D}\u{430} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}: ${element.nodeName}, \u{456}\u{434}\u{435}\u{43D}\u{442}\u{438}\u{444}\u{456}\u{43A}\u{430}\u{442}\u{43E}\u{440}: ${element.id}`;
            element.removeEventListener(eventName, eventHandler);
            resolve(message);
        };
        element.addEventListener(eventName, eventHandler);
    });
}
const printMessage = (message)=>{
    const mes = document.createElement("div");
    mes.className = "message";
    mes.textContent = message;
    document.body.appendChild(mes);
};
const loginField = document.getElementById("login");
const passwordField = document.getElementById("password");
const button = document.getElementById("submit");
waitFor(loginField, "click").then(printMessage);
waitFor(passwordField, "click").then(printMessage);
waitFor(button, "click").then(printMessage);
waitFor(loginField, "input").then(printMessage);
waitFor(passwordField, "input").then(printMessage);
waitFor(loginField, "blur").then(printMessage);
waitFor(passwordField, "blur").then(printMessage);
waitFor(button, "blur").then(printMessage);

//# sourceMappingURL=index.f75de5e1.js.map
