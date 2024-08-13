'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Chatbot.module.css';

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
    <div className={styles.chatbot}>
      <div className={styles.chatHeader}>
        <h2>Et Al</h2>
      </div>
      <div className={styles.chatWindow}>
        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.message} ${styles[msg.user]}`}>
              <Image 
                src={msg.user === 'bot' ? '/chatbot-logo.jpg' : '/profile-icon.jpg'} 
                alt={msg.user} 
                className={styles.messageIcon} 
                width={30} 
                height={30}
              />
              <div className={styles.messageContent}>
                <div className={styles.messageText}>{msg.text}</div>
                <div className={styles.messageTimestamp}>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.message} ${styles.bot}`}>
              <Image 
                src="/chatbot-logo.jpg" 
                alt="bot" 
                className={styles.messageIcon} 
                width={30} 
                height={30}
              />
              <div className={styles.messageContent}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.inputArea}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className={styles.sendButton} type="submit" onClick={handleSend} aria-label="Send message">
            <Image src="/send-icon.png" alt="Send" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;