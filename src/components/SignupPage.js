import React, { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Auto-fill username and a dummy email when a contact is clicked
  const handleContactClick = (name) => {
    setUsername(name);
    setEmail(`${name.split(' ')[0].toLowerCase()}@example.com`);
    setMessage(`Selected ${name} from contacts.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Error: Passwords do not match!");
      return;
    }

    setMessage(`Sign-up successful for ${username}!`);
    setPassword(""); 
    setConfirmPassword("");
  };

  const contacts = ["Alice Johnson", "Bob Smith", "Charlie Brown", "David Lee"];

  return (
    <div style={{ display: "flex", gap: "40px", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Left Side: Interactive Contact List */}
      <div style={{ borderRight: "2px solid #ccc", paddingRight: "30px" }}>
        <h3 style={{ color: "#555", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>Contacts</h3>
        <p style={{ fontSize: "12px", color: "gray" }}>Click a contact to auto-fill</p>
        <ul style={{ listStyleType: "none", padding: 0, cursor: "pointer" }}>
          {contacts.map((contact, index) => (
            <li 
              key={index} 
              onClick={() => handleContactClick(contact)}
              style={{ padding: "10px 5px", borderBottom: "1px solid #eee", color: "#333" }}
            >
              👤 {contact}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Sign-up Form */}
      <div style={{ backgroundColor: "#e8e8e8", padding: "30px", width: "320px", border: "1px solid #333" }}>
        <h2 style={{ color: "#777", marginTop: 0, fontSize: "20px", letterSpacing: "1px" }}>SIGN UP</h2>
        
        <form onSubmit={handleSubmit}>
          
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold", color: "#777", marginBottom: "5px", fontSize: "14px" }}>User Name</label>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f0f0f0", border: "1px solid #aaa", padding: "8px" }}>
              <span style={{ color: "#777", marginRight: "10px" }}>👤</span>
              <input 
                type="text" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "100%" }} 
              />
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold", color: "#777", marginBottom: "5px", fontSize: "14px" }}>Email</label>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f0f0f0", border: "1px solid #aaa", padding: "8px" }}>
              <span style={{ color: "#777", marginRight: "10px" }}>✉️</span>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "100%" }} 
              />
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold", color: "#777", marginBottom: "5px", fontSize: "14px" }}>Password</label>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f0f0f0", border: "1px solid #aaa", padding: "8px" }}>
              <span style={{ color: "#777", marginRight: "10px" }}>🔒</span>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "100%" }} 
              />
            </div>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: "bold", color: "#777", marginBottom: "5px", fontSize: "14px" }}>Confirm Password</label>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f0f0f0", border: "1px solid #aaa", padding: "8px" }}>
              <span style={{ color: "#777", marginRight: "10px" }}>🔐</span>
              <input 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "100%" }} 
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button type="submit" style={{ 
              backgroundColor: "#222", 
              color: "#fff", 
              padding: "10px 25px", 
              border: "none", 
              fontWeight: "bold", 
              cursor: "pointer",
              boxShadow: "3px 3px 0px #888"
            }}>
              Sign Up
            </button>
            
            <div style={{ fontSize: "12px", color: "#777", textAlign: "right" }}>
              <a href="#" style={{ color: "#777", textDecoration: "underline", fontWeight: "bold" }}>Already have an account?</a>
            </div>
          </div>
        </form>

        {/* Interactive Message Display */}
        {message && (
          <div style={{ 
            marginTop: "20px", 
            color: message.includes("Error") ? "#721c24" : "#155724", 
            backgroundColor: message.includes("Error") ? "#f8d7da" : "#d4edda", 
            border: message.includes("Error") ? "1px solid #f5c6cb" : "1px solid #c3e6cb",
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold", 
            textAlign: "center" 
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;