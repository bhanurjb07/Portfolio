import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
    FaDatabase, FaGitAlt, FaGithub, FaDocker, FaAws, FaFigma,
    FaNpm
} from 'react-icons/fa';
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb,
    SiPostgresql, SiRedis, SiExpress, SiVite, SiVercel,
    SiPostman
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
                { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
                { name: 'JavaScript', icon: <FaJs />, level: 'Advanced' },
                //  { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'React', icon: <FaReact />, level: 'Intermediate to Advanced' },
                { name: 'Next.js', icon: <SiNextdotjs />, level: 'Learning' },
                { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Intermediate' },
                { name: 'Vite', icon: <SiVite />, level: 'Advanced' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
                { name: 'Express', icon: <SiExpress />, level: 'Intermediate' },
            ],
        },
        {
            title: 'Database',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermediate' },
                { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Beginner' },
                { name: 'SQL', icon: <FaDatabase />, level: 'Intermediate' },
            ],
        },
        {
            title: 'Tools',
            skills: [
                { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
                { name: 'GitHub', icon: <FaGithub />, level: 'Advanced' },
                //  { name: 'Docker', icon: <FaDocker /> },
                { name: 'AWS', icon: <FaAws />, level: 'Beginner' },
                { name: 'Vercel', icon: <SiVercel />, level: 'Intermediate' },
                { name: 'Postman', icon: <SiPostman />, level: 'Intermediate' },
                { name: 'npm', icon: <FaNpm />, level: 'Advanced' },
                { name: 'Figma', icon: <FaFigma />, level: 'Intermediate' },
            ],
        },
    ];

    return (
        <section id="skills" className="skills section">
            <div className="skills__container container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills__categories">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skills__category">
                            <h3 className="skills__category-title">{category.title}</h3>
                            <div className="skills__grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skills__card">
                                        <div className="skills__icon">{skill.icon}</div>
                                        <div className="skills__info">
                                            <span className="skills__name">{skill.name}</span>
                                            {skill.level && <span className="skills__level">{skill.level}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
