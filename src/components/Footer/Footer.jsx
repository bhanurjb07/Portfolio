import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Work' },
        { id: 'experience', label: 'Experience' },
    ];

    const footerSocialLinks = [
        { icon: <FaLinkedin />, url: `https://${socialLinks.linkedin}`, label: 'LinkedIn' },
        { icon: <FaGithub />, url: socialLinks.github, label: 'GitHub' },
        { icon: <FaEnvelope />, url: `mailto:${socialLinks.email}`, label: 'Email' },
        { icon: <FaTwitter />, url: socialLinks.twitter, label: 'Twitter' },
    ];

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    {/* Column 1: About */}
                    <div className="footer__section footer__section--about">
                        <h3 className="footer__title">Bhanu's Portfolio</h3>
                        <p className="footer__text">
                            Thank you for visiting my personal portfolio website. Connect with me over socials to colloborate.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer__section footer__section--links">
                        <h3 className="footer__title">Quick Links</h3>
                        <ul className="footer__links-list">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className="footer__link"
                                    >
                                        <FaChevronRight className="footer__link-icon" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="footer__section footer__section--contact">
                        <h3 className="footer__title">Contact Info</h3>
                        <div className="footer__contact-info">
                            <p className="footer__contact-item">
                                <FaPhone className="footer__contact-icon" />
                                <span>{socialLinks.phone}</span>
                            </p>
                            <p className="footer__contact-item">
                                <FaEnvelope className="footer__contact-icon" />
                                <span>{socialLinks.email}</span>
                            </p>
                            <p className="footer__contact-item">
                                <FaMapMarkerAlt className="footer__contact-icon" />
                                <span>{socialLinks.address || 'Noida, Uttar Pradesh, India'}</span>
                            </p>
                        </div>

                        <div className="footer__socials">
                            {footerSocialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        Designed With <FaHeart className="footer__heart" /> By <span className="text-accent">Bhanupratap Singh</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
//