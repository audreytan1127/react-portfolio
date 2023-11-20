import logo from '../../logo.svg';
import './hero.css';
import Navbar from '../navbar/navbar.jsx';

function Hero() {
    return (
        <div className="page-wrapper">
            <Navbar/>
            <div className="hero container">

                <section className="hero-header row">
                    <div className="hero-images">
                        <img src={logo} className="logo container" alt="logo"/>
                    {/*    Add carousel of different project screenshots, or video of capstone*/}
                    </div>

                    <div className="hero-captions row">
                        <p className="hero-caption">
                            Here are some fun facts about this picture that I am displaying up here. Screenshots or
                            videos of the things I am proud of!
                            Here are some more things about what I am doing to expand my technical skills.
                            Maybe I will display some of the soft skills that I present. I will also have a professional
                            head shot next to the contact form
                            at the bottom of the webpage.
                            I should also work on the other projects that I created during my CodeUp cohort.
                        </p>
                    </div>

                </section>

            </div>

        </div>
    );
}

export default Hero;
