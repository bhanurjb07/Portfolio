import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import collegeImage from '../../assets/images/college.jpg';
import schoolImage from '../../assets/images/school.jpg';
import './Education.css';

const Education = () => {
    const education = [
        {
            id: 1,
            institution: 'Ajay Kumar Garg Engineering College',
            degree: 'Bachelor of Technology in Computer Science(AI ML)',
            duration: '2024 - 2028',
            location: 'ghaziabad, Uttar Pradesh',
            description: 'Focused on software development, data structures, algorithms, and web technologies. Actively improving problem-solving skills and exploring AI/ML concepts alongside full-stack development.',
            type: 'College',
            image: collegeImage,
        },
        {
            id: 2,
            institution: 'Delhi Public School',
            degree: 'Higher Secondary (12th Grade)',
            duration: '2022 - 2023',
            location: 'Firozabad',
            description: 'Built a strong foundation in logical thinking, mathematics, and analytical problem-solving.',
            type: 'School',
            image: schoolImage,
        },
        {
            id: 3,
            institution: 'Delhi Public School',
            degree: 'Secondary (10th Grade)',
            duration: '2020-2021',
            location: 'Firozabad',
            description: 'Completed secondary education with strong foundation in Science and Mathematics. Achieved excellence in academics with 94.8% and extracurricular activities.',
            type: 'School',
            image: schoolImage,
        },
    ];

    return (
        <section id="education" className="education section">
            <div className="education__container container">
                <h2 className="section-title">Education</h2>

                <div className="education__timeline">
                    {education.map((edu, index) => (
                        <div key={edu.id} className={`education__item ${index % 2 === 0 ? 'education__item--left' : 'education__item--right'}`}>
                            <div className="education__marker">
                                <FaGraduationCap />
                            </div>
                            <div className="education__card">
                                <div className="education__image">
                                    <img src={edu.image} alt={edu.institution} className="education__img" />
                                </div>

                                <div className="education__content">
                                    <span className="education__type">{edu.type}</span>
                                    <h3 className="education__institution">{edu.institution}</h3>
                                    <h4 className="education__degree">{edu.degree}</h4>

                                    <div className="education__meta">
                                        <span className="education__meta-item">
                                            <FaCalendarAlt />
                                            {edu.duration}
                                        </span>
                                        <span className="education__meta-item">
                                            <FaMapMarkerAlt />
                                            {edu.location}
                                        </span>
                                    </div>

                                    <p className="education__description">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
