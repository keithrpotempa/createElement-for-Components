// [x] Put an article DOM element in your index.html with the id attribute value of messages.
// [x] In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// [x] Create five (5) section components, each with a class of message, and with the content of your choosing.
// [x] Using appendChild(), attach each message as a child to the messages element.

const messagesElement = document.querySelector("#messages");

let messages = [
        "Are we doing fireworks this year?",
        `After last year's "tree incident", should we?`,
        "The fire fighters put it out in like a minute. Wasn't even a real fire.",
        "We can set them off in the street.",
        "Our neighbors' houses are flammable, too."
]

for (let i = 0; i < messages.length; i++) {
    const section = document.createElement("section");
    section.innerHTML = messages[i];
    messagesElement.appendChild(section);
}