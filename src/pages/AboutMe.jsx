import '../index.css';

import paigeimg from '../assets/images/paige.png';
import cv from '../assets/documentation/PaigeClayCV2025.pdf';



function AboutMe() {
    return (
        <div>
            <div className='body_text'>
                <h1>A Little About Me</h1>
            </div>
            <div className='about_row'>
                <div className='about_items'>
                    <div className='about_item about_img'>
                    <img src={paigeimg} alt="Head and shoulder photo of a young woman wearing a flannel shirt and glasses smiling." />
                    </div>
                    <div className='about_item about_info'>
                        <h3>Paige Bailey Clay</h3>
                        <p>I was born and raised in Invercargill.</p>
                        <p>I went to Windsor North primary school for 6 years, then went to Southland Girls High School until midway through Year 13, after which I left high school to do the Level 4 IT Essentials Certificate at SIT.</p>
                        <p>Currently I study full-time at SIT and am in my 3rd year of my Bachelor of IT. Outside of my course I work as a Checkout Supervisor at Pak n Save.</p>
                        <p>During my spare time I like to read or spead time with friends.</p>
                        <button 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = cv;
                                link.download = 'PaigeClayCV2025.pdf';
                                link.click();
                            }}>Download My CV</button>
                            
                    </div>
                </div>
            </div>


            <div classname='facts_row'>
                <div className='facts_items'>
                    <div className='facts_item rose'>
                        <h2>Current Goals</h2>
                        <ul>
                            <li><p>Complete Bachelor of IT</p></li>
                            <li><p>Get a job in IT or go up in the food chain at Pak n Save</p></li>
                            <li><p>Purchase a house by the end of 2029</p></li>
                        </ul>

                    </div>
                    <div className='facts_item pearl'>
                        <h2>Awards and Achievements</h2>
                        <ul>
                            <li><p>1st in Physics, 1st in Digital Technologies, 2nd in Chemistry - High School 2021</p></li>
                            <li><p>Emma Marshall Prize for Excellence with Distinction for 1st in Year 12 - High School 2021</p></li>
                            <li><p>New Zealand Aluminium Prize for Endeavour in Level 2 Sciences - High School 2021</p></li>
                            <li><p>Top JADE Project - SIT 2024</p></li>
                        </ul>

                    </div>
                    <div className='facts_item rose'>
                        <h2>Personal Attributes</h2>
                        <ul>
                            <li><p>Analytical</p></li>
                            <li><p>Efficient</p></li>
                            <li><p>Flexible</p></li>
                            <li><p>Reliable</p></li>
                            <li><p>Realistic</p></li>
                        </ul>

                    </div>
                    <div className='facts_item pearl'>
                        <h2>Skills</h2>
                        <ul>
                            <li><p>Comprehension</p></li>
                            <li><p>Time Management</p></li>
                            <li><p>Critical Thinking</p></li>
                            <li><p>Attention to Detail</p></li>
                            <li><p>Communication</p></li>
                            <li><p>Teamwork</p></li>
                        </ul>

                    </div>
                    <div className='facts_item rose'>
                        <h2>IT Abilities</h2>
                        <ul>
                            <li><p>JADE</p></li>
                            <li><p>Web Developement: HTML, CSS, JS, JSX</p></li>
                            <li><p>Mobile Development: Java, XML</p></li>
                            <li><p>Programming: Java, C#, Python</p></li>
                            <li><p>Professional Skills: Helpdesk Support, ITIL, Project Management, UI and UX Design</p></li>
                        </ul>

                    </div>
                    <div className='facts_item pearl'>
                        <h2>Personal Interests and Hobbies</h2>
                        <ul>
                            <li><p>Coin and Note Collecting</p></li>
                            <li><p>Pokemon Card Collecting</p></li>
                            <li><p>Reading</p></li>
                            <li><p>Frogs and Cats</p></li>
                        </ul>

                    </div>



                </div>
            </div>

            
            

                        
        </div>
    );
}

export default AboutMe;
