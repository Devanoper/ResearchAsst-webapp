import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, user: 'user', timestamp: new Date() };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInput('');
      setIsTyping(true);
      // Simulate bot response
      setTimeout(() => {
        const botResponse = { text: 'This is a bot response.', user: 'bot', timestamp: new Date() };
        setMessages(prevMessages => [...prevMessages, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-header">
        <h2>Et Al</h2>
      </div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user}`}>
              <img src={msg.user === 'bot' ? '/chatbot-logo.jpg' : '/profile-icon.jpg'} alt={msg.user} className="message-icon" />
              <div className="message-content">
                <div className="message-text">{msg.text}</div>
                <div className="message-timestamp">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <img src="/chatbot-logo.jpg" alt="bot" className="message-icon" />
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button type="submit" onClick={handleSend} aria-label="Send message">
            <img src="/send-icon.png" alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;