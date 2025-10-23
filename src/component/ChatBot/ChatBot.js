import * as React from 'react';
import './styles.css';
import SmartToy from '@mui/icons-material/SmartToy';

const ChatBot = () => {
  const sendMessage = () => {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        displayMessage("user", userInput);
        document.getElementById("user-input").value = "";

        var botResponse = 'Hiiii';
          displayMessage("bot", botResponse);
        // Send the user message to the backend
        // fetch('http://127.0.0.1:5000/api/chatbot', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ message: userInput })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     var botResponse = data.response;
        //     displayMessage("bot", botResponse);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    }
  }


  function displayMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.textContent = message;

    if(sender == "bot"){
    var flexBox = document.createElement("div");
    flexBox.className='d-flex'


      var smartToy = document.getElementById("smart-toy");
      var smartToyChild = smartToy.childNodes[0].cloneNode(true);
      var outerSmartType = document.createElement("div");
      outerSmartType.appendChild(smartToyChild);
      flexBox.appendChild(outerSmartType);


      flexBox.appendChild(messageElement);
      chatBox.appendChild(flexBox)
      chatBox.scrollTop = chatBox.scrollHeight;
    } else{

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

    return (
      <>
        <div className="chat-container">
        <div class="chat-header">
            <div class='bot-header'>{'Robot'}</div>
            <div class='bot-header-image'>
              <SmartToy style={{color:'pink'}} fontSize={'small'} />
            </div>
        </div>
          <div className="chat-box" id="chat-box">
            <div className='d-flex'>
              <div id="smart-toy">
                <div class='bot-image'>
                  <SmartToy style={{color:'pink'}} fontSize={'small'} />
                </div>
              </div>
              <div className='bot'>
                <span>Welcome to Her Wellness</span>
                <ul>
                  <li><a href="https://food-1b8c0.web.app" style={{color:'white'}}>Visit Foodwheel Page</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chat-reply">
            <input type="text" id="user-input" placeholder="Type a message..." onKeyDown={(event) =>  {if (event.keyCode === 13) { sendMessage()}}}/>
            <button onClick={() => sendMessage()} >Send</button>
          </div>
        </div>
      </>
    );
  };

  export default ChatBot;