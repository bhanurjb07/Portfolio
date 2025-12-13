import { FaCode, FaLaptopCode, FaRocket, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import aboutPhoto from '../../assets/images/photo2.jpg';
import { socialLinks } from '../../data/socialLinks';
import './About.css';

const About = () => {
    const highlights = [
        { icon: <FaCode />, title: 'Clean Code', description: 'Writing maintainable & scalable code' },
        { icon: <FaLaptopCode />, title: 'Full Stack', description: 'End-to-end development expertise' },
        { icon: <FaRocket />, title: 'Fast Learner', description: 'Quick to adapt new technologies' },
    ];

    const aboutSocialLinks = [
        { icon: <FaLinkedin />, url: socialLinks.linkedin, label: 'LinkedIn' },
        { icon: <FaGithub />, url: socialLinks.github, label: 'GitHub' },
        { icon: <FaTwitter />, url: socialLinks.twitter, label: 'Twitter' },
    ];

    return (
        <section id="about" className="about section">
            <div className="about__container container">
                <h2 className="section-title">About Me</h2>

                <div className="about__content">
                    <div className="about__image-wrapper">
                        <div className="about__image-container">
                            <img src={aboutPhoto} alt="Bhanu Pratap Singh" className="about__image" />
                            <div className="about__image-border"></div>
                        </div>
                        <div className="about__socials">
                            {aboutSocialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="about__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="about__text">
                        <h3 className="about__subtitle">
                            Passionate Developer Building Digital Products Solutions
                        </h3>
                        <p className="about__description">
                            I’m a passionate Full Stack Developer focused on building clean,
                            scalable, and user-centric web applications using modern technologies.
                            I enjoy turning complex problems into simple, efficient solutions.
                        </p>
                        <p className="about__description">
                            My journey started with curiosity—experimenting, breaking things,
                            and learning how systems work under the hood. Over time, this evolved
                            into a strong foundation in frontend, backend, and API development.
                        </p>
                        <p>
                            <b>
                                <i>
                                    I love working on challenging problems and building products that
                                    create real-world impact.
                                </i>
                            </b>
                        </p>

                        <div className="about__highlights">
                            {highlights.map((item, index) => (
                                <div key={index} className="about__highlight-card">
                                    <div className="about__highlight-icon">{item.icon}</div>
                                    <h4 className="about__highlight-title">{item.title}</h4>
                                    <p className="about__highlight-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
