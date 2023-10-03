import { useState } from "react";
import "./contact.scss"
import Footer from "../footer/Footer";

const Contact = () => {
const [message,setMessage]= useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
        <Footer/>
      </div>
    </div>
    
  )
}

export default Contact


