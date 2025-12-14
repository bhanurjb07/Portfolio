import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getProjects } from '../../data/projectData';
import './Projects.css';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleProjectExpand = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    useEffect(() => {
        // Load projects from static data
        setProjects(getProjects());
    }, []);

    return (
        <section id="projects" className="projects section">
            <div className="projects__container container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article key={project.id} className="projects__card">
                            <div className="projects__image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="projects__image-placeholder">
                                        <span>{project.title.split(' ').map(w => w[0]).join('')}</span>
                                    </div>
                                )}
                                <div className="projects__overlay">
                                    <div className="projects__links">
                                        <a
                                            href={project.github}
                                            className="projects__link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View GitHub repository"
                                        >
                                            <FaGithub />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="projects__link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View live demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="projects__content">
                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__description">{project.description}</p>

                                <div className="projects__tech-stack">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="projects__tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.problem && (
                                    <div className="projects__case-study">
                                        <button
                                            className="projects__case-study-btn"
                                            onClick={() => toggleProjectExpand(project.id)}
                                        >
                                            {expandedProject === project.id ? 'Hide Case Study' : 'View Case Study'}
                                        </button>

                                        {expandedProject === project.id && (
                                            <div className="projects__case-study-content">
                                                <div className="projects__case-study-item">
                                                    <h4>Problem:</h4>
                                                    <p>{project.problem}</p>
                                                </div>
                                                <div className="projects__case-study-item">
                                                    <h4>Solution:</h4>
                                                    <p>{project.solution}</p>
                                                </div>
                                                <div className="projects__case-study-item">
                                                    <h4>Outcome:</h4>
                                                    <p>{project.outcome}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="projects__buttons">
                                    <a
                                        href={project.github}
                                        className="btn btn-secondary projects__btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="btn btn-primary projects__btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
