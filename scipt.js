function randResponse(){
    const responses = [
        "Это хорошо. Что еще расскажешь?",
        "Я просто тупой бот и не могу ничего ответить кроме этих трех фраз)",
        "Хуй пизда говно залупа"
    ];
    let i = Math.random() * responses.length | 0;    
    return responses[i];
}

let input = '';

function respond(isUser, input){
    const chat = document.getElementById('chat');
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    messageDiv.textContent = input;
    chat.appendChild(messageDiv);
}

function botRespond(isUser){
    const chat = document.getElementById('chat');
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    messageDiv.textContent = randResponse();
    chat.appendChild(messageDiv);
}

function handleEnter(event){
    if(event){
        input = document.getElementById("textInput").value;
    }
    if(event.key == 'Enter'){
        console.log(input);
        input.value = '';
        document.getElementById("textInput").value = '';
        respond(true, input);
        botRespond(false);
    }
}



document.getElementById('textInput').innerHTML = textInput;