import React, { useState, useEffect, useRef } from "react";

function Chat() {
  const [messages, setMessages] = useState([]); // chat messages
  const [input, setInput] = useState("");       // user input
  const chatEndRef = useRef(null);             // for scrolling

  // Auto-scroll to bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to handle sending user message
  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage = { id: Date.now(), text: input, sender: "me" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Fetch response from API (simulate greeting)
    try {
      const response = await fetch(
        "https://api.quotable.io/random" // Using a public API for demo
      );
      const data = await response.json();
      const botMessage = { id: Date.now() + 1, text: data.content, sender: "bot" };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMsg = { id: Date.now() + 2, text: "Failed to get response", sender: "bot" };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        height: "500px",
      }}
    >
      <h2>Mini Chat App</h2>

      {/* Chat Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          border: "1px solid #eee",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.sender === "me" ? "right" : "left",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "20px",
                backgroundColor: msg.sender === "me" ? "#0b93f6" : "#e5e5ea",
                color: msg.sender === "me" ? "#fff" : "#000",
                maxWidth: "70%",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input + Send Button */}
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: "10px", borderRadius: "20px", border: "1px solid #ccc" }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#0b93f6",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
