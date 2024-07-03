import { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: 'This is a bot response.', user: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSend}>
            <img src="send-icon.png" alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
