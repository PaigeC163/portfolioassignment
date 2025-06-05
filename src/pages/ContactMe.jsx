import '../index.css';
import ContactForm from '../components/ContactForm';



function ContactMe() {
    return (
        <div>

            <div className='body_text'>
                <h1>Get in Touch!</h1>
                <p>If you have any questions about my work or just want to get in touch with me, fill out the below form and I'll try to respond ASAP. For urgent inquires call my cellphone.</p>
                <p>I can't wait to hear from you!</p>
            </div>

            <div className='contact_row'>
                <div className='contact_items'>
                    <div className="contact_item rose">
                        <h2>Contact Me</h2>
                        <ul>
                            <li><p>+64 28 419 6940</p></li>
                            <li><p><a href="mailto:paige.clay163@gmail.com">paige.clay163@gmail.com</a></p></li>
                            <li><p><a href='https://www.instagram.com/paige.clay163/'>Take Me to Instagram</a></p></li>
                            <li><p><a href='https://www.facebook.com/profile.php?id=61555354100484'>Take Me to Facebook</a></p></li>
                        </ul>
                    </div>
                    <div className='contact_item item2'>
                        <ContactForm/>

                    </div>
                </div>

            </div>

        </div>
        
            
    );
}

export default ContactMe;
