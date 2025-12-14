import { FaArrowRight, FaDownload } from 'react-icons/fa';
import profilePhoto from '../../assets/images/photo.jpg';
import './Home.css';
import resume from '../../assets/resume/resume.pdf';

const Home = () => {
    const handleViewProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="home section">
            <div className="home__container container">
                <div className="home__content">
                    <div className="home__text">
                        <span className="home__greeting">Hi, I'm</span>
                        <h1 className="home__title">Bhanu Pratap Singh</h1>
                        <h2 className="home__subtitle">Full Stack Developer | MERN Stack | Problem Solver</h2>
                        <p className="home__description">
                            I build scalable, performance-focused web applications with clean UI,
                            robust backend architecture, and real-world problem solving.
                        </p>
                        <p className="home__status">
                            Currently open to internships & freelance opportunities
                        </p>
                        <div className="home__buttons">
                            <button className="btn btn-primary" onClick={handleViewProjects}>
                                View Projects
                                <FaArrowRight />
                            </button>
                            <a href={resume} className="btn btn-secondary" download>
                                <FaDownload />
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="home__image-wrapper">
                        <div className="home__image-container">
                            <img src={profilePhoto} alt="Bhanu Pratap Singh" className="home__image" />
                            <div className="home__image-decoration"></div>
                            <div className="home__image-decoration home__image-decoration--2"></div>
                        </div>
                    </div>
                </div>

                <div className="home__highlights">
                    <div className="home__highlight-item">
                        <span>🚀</span> 10+ Projects Built
                    </div>
                    <div className="home__highlight-item">
                        <span>💻</span> MERN Stack Developer
                    </div>
                    <div className="home__highlight-item">
                        <span>🎓</span> B.Tech CSE (AI & ML)
                    </div>
                    <div className="home__highlight-item">
                        <span>🌍</span> Open to Remote Opportunities
                    </div>
                </div>

                <div className="home__scroll-indicator">
                    <div className="home__scroll-mouse">
                        <div className="home__scroll-wheel"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
            </div>
        </section>
    );
};

export default Home;
