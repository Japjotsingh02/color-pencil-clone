// All Dom Elements
const domElements={
    iconBar:document.querySelector(".icon-bar"),
    mobileNavBar:document.querySelector(".mobile-navbar"),
    chatBot:document.querySelector(".chat-bot"),
    chat:document.querySelector(".bot-card"),
    starterMessage:document.querySelector(".botStarterMessage"),
    input:document.querySelector("#textInput"),
    chatBox:document.querySelector(".chat-box"),
    chatSendIcon:document.querySelector(".chat-send"),
    timeStamp:document.querySelector(".chat-timestamp"),
    attachInput:document.querySelector(".file-input"),
    filenameContainer:document.querySelector(".filename-container"),
}

const iconCollapseIn=() => {
    domElements.mobileNavBar.classList.toggle("active");
}

const chatCollapseIn=() =>{
    domElements.chat.classList.toggle("active");
}

// Get time
const getTime=() =>{
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets First Bot Message
const firstBotMessage=() => {
    let firstMessage = "Got any questions? I'm happy to help";
    domElements.starterMessage.innerHTML = `<p class="bot-text"><span> ${firstMessage} </span></p>`;

    let time = getTime();

    domElements.timeStamp.innerHTML=time;
}

firstBotMessage();

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = domElements.input.value;

    if (userText == "") {
        return;
    }

    let userHtml = document.createElement("p");
    userHtml.innerHTML=`<p class="user-text"><span> ${userText} </span></p>`;

    domElements.input.value="";
    domElements.chatBox.appendChild(userHtml);

    setTimeout(() => {
        getHardResponse();
    }, 1000)
};


// Get Bot response
function getHardResponse() {
    let botResponse = "Don’t have time to wait for a response? Leave your email and we’ll be in touch as soon as possible."
    let botHtml = document.createElement("p");
    botHtml.innerHTML = `<p class="bot-text"><span>  ${botResponse} <input class="input" type="email" placeholder="Enter Email Address"> </span> </p>`;
    domElements.chatBox.appendChild(botHtml);
};


function attachButton(){
    const file=domElements.attachInput.value;
    console.log("chu");
    file=file.replace(/.*[\/\\]/, ''); 
    domElements.filenameContainer.appendChild(`<span  class='filename'> ${file} </span>`).show();
};


//   $file = $(this).val();
//   $file = $file.replace(/.*[\/\\]/, ''); //grab only the file name not the path
//   $('.filename-container').append("<span  class='filename'>" + $file + "</span>").show();


// All Dom Event Listeners
domElements.iconBar.addEventListener('click',iconCollapseIn);
domElements.chatBot.addEventListener('click',chatCollapseIn);
domElements.chatSendIcon.addEventListener('click',getResponse);
domElements.attachInput.addEventListener('click',attachButton);


// Press enter to send a message
domElements.input.addEventListener('keypress',function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

