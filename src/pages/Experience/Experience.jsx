import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Frontend Developer Intern',
            company: 'Apex Plannet Software Pvt. Ltd',
            duration: 'June 2025 - July 2025',
            type: 'Internship',
            highlights: [
                '• Built reusable and responsive UI components using React and Tailwind CSS.',
                '• Improved frontend performance and reduced response time by ~20%.',
                '• Implemented image upload functionality, improving listing accuracy by 30%.',
                '• Collaborated with backend teams to integrate APIs under tight deadlines.',
            ],
        },
        {
            id: 2,
            role: 'Full-Stack Developer',
            company: 'Infosys SpringBoot',
            duration: 'Oct. 2025 - Dec 2025',
            type: 'Intenship',
            highlights: [
                '• Developed RESTful APIs using Node.js and Express.',
                '• Implemented JWT-based authentication and secure authorization.',
                '• Built data visualization dashboards using Chart.js.',
                '• Worked with MongoDB for efficient data storage and retrieval.',
            ],
        },
    ];

    return (
        <section id="experience" className="experience section">
            <div className="experience__container container">
                <h2 className="section-title">Experience</h2>

                <div className="experience__timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="experience__item">
                            <div className="experience__marker">
                                <FaBriefcase />
                            </div>

                            <div className="experience__card">
                                <div className="experience__header">
                                    <div>
                                        <h3 className="experience__role">{exp.role}</h3>
                                        <p className="experience__company">{exp.company}</p>
                                    </div>
                                    <div className="experience__meta">
                                        <span className="experience__type">{exp.type}</span>
                                        <span className="experience__duration">
                                            <FaCalendarAlt />
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                <ul className="experience__highlights">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="experience__highlight">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
