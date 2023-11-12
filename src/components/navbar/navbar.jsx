import '../navbar/navbar.css';


export default function Navbar() {
    return (
        <nav className="navbar container">
            <div className="navbar-row row">
                <div className="navbar-logo col">
                    IMG SRC to banner
                </div>
                <div className="portfolio col">
                    <a>Portfolio</a>
                </div>
                <div className="education col">
                    <a>Education</a>
                </div>
                <div className="experience col">
                    <a>Experience</a>
                </div>
                <div className="lang-frame col">
                    <a>Technical Skills / Frontend / Backend</a>
                </div>
                <div className="contact col">
                    <a>Contact Me!</a>
                </div>
            </div>
        </nav>
    )
}