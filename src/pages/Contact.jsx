import { useState } from "react";
import "../styles.css";
import { motion } from "framer-motion";

function Contact() {
 const [form, setForm] = useState({
  name: "",
  email: "",
  message: ""
 });

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
   alert("Fill out all information.");
   return;
  }

  if (!form.email.includes("@")) {
   alert("Invalid email");
   return;
  }

  alert("Message sent!");
 };
 return (
    
 <div>
  <ul className="contactList">
   <li>Guillermo Otero</li>
   <li>Location: Inverness FL</li>
   <li>Email: gu830518@ucf.edu</li>
  </ul>

  <form onSubmit={handleSubmit}>
   <input type="text" placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})}/>
   <input type="email" placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
   <textarea placeholder="Message" onChange={(e) => setForm({...form, message: e.target.value})}/>
   <motion.button type="submit" whileHover={{ scale: 1.03, }} transition={{ type: "spring", stiffness: 300 }}>
    Submit
   </motion.button>
  </form>
 </div>
 );
}

export default Contact;