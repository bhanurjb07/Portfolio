import { useState } from 'react';
import {
    FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin,
    FaTwitter, FaMedium, FaWhatsapp, FaPaperPlane, FaInstagram, FaPhone
} from 'react-icons/fa';
import { socialLinks, getWhatsappLink } from '../../data/socialLinks';
import { sendEmail } from '../../utils/emailService';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await sendEmail(formData);

        setIsSubmitting(false);

        if (result.success) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } else {
            console.error('Failed to send email:', result.error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: socialLinks.phone,
            link: `tel:${socialLinks.phone}`,
        },
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: socialLinks.email,
            link: `mailto:${socialLinks.email}`,
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Address',
            value: socialLinks.address,
            link: null,
        },
    ];

    const contactSocialLinks = [
        { icon: <FaLinkedin />, url: socialLinks.linkedin, label: 'LinkedIn', newTab: true },
        { icon: <FaGithub />, url: socialLinks.github, label: 'GitHub', newTab: true },
        { icon: <FaTwitter />, url: socialLinks.twitter, label: 'Twitter / X', newTab: true },
        { icon: <FaMedium />, url: socialLinks.medium, label: 'Medium', newTab: true },
        { icon: <FaInstagram />, url: socialLinks.instagram, label: 'Instagram', newTab: true },
        { icon: <FaWhatsapp />, url: getWhatsappLink(), label: 'WhatsApp', newTab: false, isWhatsapp: true },
    ];

    return (
        <section id="contact" className="contact section">
            <div className="contact__container container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact__content">
                    <div className="contact__info">
                        <h3 className="contact__subtitle">Let's Connect</h3>
                        <p className="contact__description">
                            I'm currently available for freelance work and open to new opportunities.
                            Whether you have a project in mind or just want to say hello,
                            feel free to reach out!
                            <br />
                            <span className="contact__response-time">
                                I usually respond within 24 hours.
                            </span>
                        </p>

                        <div className="contact__cta">
                            <a
                                href={getWhatsappLink('Hi Bhanu, I saw your portfolio and would like to connect.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary contact__whatsapp-btn"
                            >
                                <FaWhatsapp />
                                Chat on WhatsApp
                            </a>
                        </div>

                        <div className="contact__details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact__detail-item">
                                    <div className="contact__detail-icon">{info.icon}</div>
                                    <div className="contact__detail-text">
                                        <span className="contact__detail-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact__detail-value">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact__detail-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact__socials">
                            <span className="contact__socials-label">Find me on</span>
                            <div className="contact__socials-links">
                                {contactSocialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        className={`contact__social-link ${link.isWhatsapp ? 'contact__social-link--whatsapp' : ''}`}
                                        target={link.newTab ? '_blank' : '_self'}
                                        rel={link.newTab ? 'noopener noreferrer' : undefined}
                                        aria-label={link.label}
                                        title={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="contact__error">{errors.name}</span>}
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="contact__error">{errors.email}</span>}
                        </div>



                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                                placeholder="Your message..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="contact__error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary contact__submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    Send Message
                                </>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="contact__success">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="contact__error-message">
                                Failed to send message. Please try again or use WhatsApp/Email directly.
                                <br />
                                <small>(Note: EmailJS keys might be missing)</small>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
