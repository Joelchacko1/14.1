const messages = [
    { id: 'message-1', duration: 3000 },
    { id: 'message-2', duration: 4000 },
    { id: 'text-box-container', duration: 7000 },

    { id: 'message-3', duration: 5000 },
    { id: 'message-4', duration: 5000 },
    { id: 'message-5', duration: 5000 },
    { id: 'polaroid-container', duration: 10000 }
];

let current = 0;

function showNextMessage() {
    if (current < messages.length) {
        const msg = document.getElementById(messages[current].id);
        msg.style.opacity = 1;

        // Automatically type and send the message
        if (msg.id === 'text-box-container') {
            autoTypeAndSend();
        }

        setTimeout(() => {
            msg.style.opacity = 0;
            current++;
            showNextMessage();
        }, messages[current].duration);
    }
}

// Start animation sequence
setTimeout(showNextMessage, 1000);

// Automatically type and send the message
function autoTypeAndSend() {
    const textBox = document.getElementById('valentine-message');
    const sendButton = document.getElementById('send-button');
    const message = "I’m sending this text to wish you a Happy Valentine’s Day...And to say... I love you 💌 blhaaa blhaa";

    let index = 0;
    const typingSpeed = 50; // Speed of typing (in milliseconds)

    function typeMessage() {
        if (index < message.length) {
            textBox.value += message.charAt(index);
            index++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            // Automatically click the send button after typing
            setTimeout(() => {
                sendButton.click();
            }, 1000);
        }
    }

    typeMessage();
}

// Send Button Functionality
function sendMessage() {
    const message = document.getElementById('valentine-message').value;

    // Highlight key words
    const highlightedMessage = message
        .replace(/love/gi, '<span class="highlight">love</span>')
        .replace(/special/gi, '<span class="highlight">special</span>')
        .replace(/you/gi, '<span class="highlight">you</span>');

    
}