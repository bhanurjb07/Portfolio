import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaInstagram, FaMedium } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSocialLinks = [
        { icon: <FaLinkedin />, url: socialLinks.linkedin, label: 'LinkedIn' },
        { icon: <FaTwitter />, url: socialLinks.twitter, label: 'Twitter' },
        { icon: <FaInstagram />, url: socialLinks.instagram, label: 'Instagram' },
    ];

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <span className="footer__logo">Portfolio</span>
                        <p className="footer__tagline">Building digital experiences</p>
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

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Bhanu Pratap Singh. All rights reserved.
                    </p>
                    <p className="footer__made-with">
                        Made with <FaHeart className="footer__heart" /> and React.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
//