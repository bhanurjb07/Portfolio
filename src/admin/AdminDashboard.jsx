import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaGithub,
    FaExternalLinkAlt, FaTimes, FaSave, FaProjectDiagram
} from 'react-icons/fa';
import { getProjects, addProject, updateProject, deleteProject } from '../data/projectData';
import './Admin.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        techStack: '',
        github: '',
        demo: '',
    });

    useEffect(() => {
        // Check authentication
        const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin');
            return;
        }
        loadProjects();
    }, [navigate]);

    const loadProjects = () => {
        setProjects(getProjects());
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuthenticated');
        navigate('/admin');
    };

    const openModal = (project = null) => {
        if (project) {
            setEditingProject(project);
            setFormData({
                title: project.title,
                description: project.description,
                image: project.image || '',
                techStack: project.techStack.join(', '),
                github: project.github,
                demo: project.demo,
            });
        } else {
            setEditingProject(null);
            setFormData({
                title: '',
                description: '',
                image: '',
                techStack: '',
                github: '',
                demo: '',
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingProject(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const projectData = {
            ...formData,
            techStack: formData.techStack.split(',').map((t) => t.trim()).filter(Boolean),
        };

        if (editingProject) {
            updateProject(editingProject.id, projectData);
        } else {
            addProject(projectData);
        }

        loadProjects();
        closeModal();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            deleteProject(id);
            loadProjects();
        }
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <div className="admin-header__content">
                    <h1 className="admin-header__title">
                        <FaProjectDiagram />
                        Project Management
                    </h1>
                    <button className="admin-header__logout" onClick={handleLogout}>
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </header>

            <main className="admin-main">
                <div className="admin-toolbar">
                    <h2 className="admin-toolbar__title">
                        Projects ({projects.length})
                    </h2>
                    <button className="admin-toolbar__add" onClick={() => openModal()}>
                        <FaPlus />
                        Add Project
                    </button>
                </div>

                <div className="admin-projects">
                    {projects.length === 0 ? (
                        <div className="admin-projects__empty">
                            <p>No projects yet. Click "Add Project" to create one.</p>
                        </div>
                    ) : (
                        <div className="admin-projects__grid">
                            {projects.map((project) => (
                                <div key={project.id} className="admin-project-card">
                                    <div className="admin-project-card__header">
                                        <h3 className="admin-project-card__title">{project.title}</h3>
                                        <span className="admin-project-card__date">{project.createdAt}</span>
                                    </div>

                                    <p className="admin-project-card__description">{project.description}</p>

                                    <div className="admin-project-card__tech">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="admin-project-card__tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="admin-project-card__links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub /> GitHub
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    </div>

                                    <div className="admin-project-card__actions">
                                        <button
                                            className="admin-project-card__edit"
                                            onClick={() => openModal(project)}
                                        >
                                            <FaEdit /> Edit
                                        </button>
                                        <button
                                            className="admin-project-card__delete"
                                            onClick={() => handleDelete(project.id)}
                                        >
                                            <FaTrash /> Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="admin-modal-overlay" onClick={closeModal}>
                    <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal__header">
                            <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
                            <button className="admin-modal__close" onClick={closeModal}>
                                <FaTimes />
                            </button>
                        </div>

                        <form className="admin-modal__form" onSubmit={handleSubmit}>
                            <div className="admin-modal__field">
                                <label htmlFor="title">Project Name *</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter project name"
                                    required
                                />
                            </div>

                            <div className="admin-modal__field">
                                <label htmlFor="description">Description *</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter project description (3-4 lines)"
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="admin-modal__field">
                                <label htmlFor="image">Image URL</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div className="admin-modal__field">
                                <label htmlFor="techStack">Tech Stack *</label>
                                <input
                                    type="text"
                                    id="techStack"
                                    name="techStack"
                                    value={formData.techStack}
                                    onChange={handleChange}
                                    placeholder="React, Node.js, MongoDB (comma-separated)"
                                    required
                                />
                            </div>

                            <div className="admin-modal__row">
                                <div className="admin-modal__field">
                                    <label htmlFor="github">GitHub Link *</label>
                                    <input
                                        type="url"
                                        id="github"
                                        name="github"
                                        value={formData.github}
                                        onChange={handleChange}
                                        placeholder="https://github.com/..."
                                        required
                                    />
                                </div>

                                <div className="admin-modal__field">
                                    <label htmlFor="demo">Live Demo Link *</label>
                                    <input
                                        type="url"
                                        id="demo"
                                        name="demo"
                                        value={formData.demo}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="admin-modal__actions">
                                <button type="button" className="admin-modal__cancel" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="admin-modal__submit">
                                    <FaSave />
                                    {editingProject ? 'Update Project' : 'Add Project'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
