import logo from '../../logo.svg';
import './hero.css';

function Hero() {
  return (
    <div className="hero container">

      <header className="hero-header row">
        <div className="hero-images">
        <img src={logo} className="logo container" alt="logo" />
      </div>

      <div className="hero-captions row">
        <p className="hero-caption">
          Here are some fun facts about this picture that I am displaying up here. Screenshots or videos of the things I am proud of!
            Here are some more things about what I am doing to expand my technical skills.
            Maybe I will display some of the soft skills that I present. I will also have a professional head shot next to the contact form
            at the bottom of the webpage.
            I should also work on the other projects that I created during my CodeUp cohort.
        </p>
      </div>

      </header>
    </div>
  );
}

export default Hero;
