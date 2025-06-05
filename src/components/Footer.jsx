import '../index.css';
import {Outlet, Link} from 'react-router-dom';
import logoimg from '../assets/images/logo.png';


function Footer() {
    return (
        <footer>
            <div className='footer_box'>
                <div className='footer_row'>

                    <div className='footer_items_box'>
                        <div className='footer_item'>
                            <ul>
                                <li><p><b>Explore</b></p></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/aboutme">About Me</Link></li>
                                <li><Link to="/contactme">Contact Me</Link></li>
                            </ul>
                        </div>
                        
                        <div className='footer_item'>
                            <ul>
                                <li><p><b>Contact Info</b></p></li>
                                <li><p>Paige Clay</p></li>
                                <li><p>+64 28 419 6940</p></li>
                                <li><a href="mailto:paige.clay163@gmail.com">paige.clay163@gmail.com</a></li>
                            </ul>
                        </div>

                        <div className='footer_item'>
                            <ul>
                                <li><p><b>Follow Me On</b></p></li>
                                <li><a href='https://www.instagram.com/paige.clay163/'>Instagram</a></li>
                                <li><a href='https://www.facebook.com/profile.php?id=61555354100484'>Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className='footer_row_2'>
                    <div className='footer_item'>
                        <ul>
                            <li><p>Copyright &copy; Paige Clay</p></li>
                            <li><img src={logoimg} alt="PAIGE C in typewriter keys"/></li>
                        </ul>
                    </div>

                </div>

            </div>
                

            
        </footer>

    );
}

export default Footer;