import '../index.css';
import Slideshow from '../components/Slideshow';




function Home() {
    return (
        <div>
            <div className='body_text'>
                <h1>Hi! Im Paige, a IT student and Checkout Supervisor based in Invercargil, New Zealand.</h1>
                <p>I've been studying IT for the past 3 years at the Southern Insitute of Technology and have been a part of the Invercargill Pak n Save team for almost 6 years.</p>
                <p>During my time at high school and SIT, I've completed many projects. Below are snapshots are the ones I'm most proud of. Click an image to view more details for that project.</p>
            </div>
            <Slideshow/>
            
        </div>
    );
}

export default Home;
