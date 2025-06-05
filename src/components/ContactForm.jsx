import '../index.css';
import {Outlet, Link} from 'react-router-dom';
import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0mzbvsk', 'template_9qs5sjd', form.current, {
            publicKey: 'AiRG5TWrJUd2uOtnO',
        }).then(() => {
            form.current.reset();
            alert("Message sent successfully!");
        }).catch((error) => {
            console.error("EmailJS error:", error);
            alert("There was an error sending your message. Please try again.");
        });
    };




    return (
 
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" id="user_name" name="user_name" placeholder='Bob Stevens' required/>
            <label>Email</label>
            <input type="email" id="user_email" name="user_email" placeholder='bob.stevens@gmail.com' required/>
            <label>Phone Number</label>
            <input type="text" id="user_phone" name="user_phone" placeholder='+64 216673738'/>
            <label>Message</label>
            <textarea  type="text" id='message' name="message" rows="5" placeholder='I want to reach out about a project...' required />
            <button input type="submit" value="Send">Send</button>
        </form>
        
    );

}

export default ContactForm;