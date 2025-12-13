// Initial project data
const initialProjects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with product listings, shopping cart, checkout flow, and admin panel for product management. Built with React and Node.js.',
        image: '',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
        github: 'https://github.com',
        demo: 'https://vercel.app',
        createdAt: '2024-01-15',
        problem: 'Small businesses struggle to set up affordable, engaging online stores with custom branding and easy inventory management.',
        solution: 'Developed a scalable MERN stack platform with a responsive frontend, an intuitive admin dashboard for inventory tracking, and a secure checkout flow.',
        outcome: 'Reduced store setup time by 40% for beta users and streamlined inventory management with real-time stock updates.'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A productivity application for managing tasks and projects with drag-and-drop functionality, real-time updates, and team collaboration features.',
        image: '',
        techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com',
        demo: 'https://vercel.app',
        createdAt: '2024-02-20',
        problem: 'Teams often face communication gaps and reduced productivity due to scattered task tracking tools.',
        solution: 'Built a collaborative Kanban-style board with real-time updates using Firebase and a drag-and-drop interface for seamless task organization.',
        outcome: 'Improved team collaboration efficiency by 30% and provided a centralized hub for project tracking.'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard that displays current conditions, forecasts, and weather alerts. Features location-based weather and interactive maps.',
        image: '',
        techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
        github: 'https://github.com',
        demo: 'https://vercel.app',
        createdAt: '2024-03-10',
        problem: 'Users need accurate, visually appealing weather data for their specific locations without navigating complex interfaces.',
        solution: 'Integrated OpenWeather API to fetch real-time data and visualized trends using Chart.js in a clean, responsive UI.',
        outcome: 'Delivered accurate weather insights with a 99% uptime and enhanced user engagement through interactive charts.'
    },
    {
        id: 4,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management with real-time metrics, engagement tracking, and customizable reports for multiple platforms.',
        image: '',
        techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
        github: 'https://github.com',
        demo: 'https://vercel.app',
        createdAt: '2024-04-05',
        problem: 'Social media managers lack a unified tool to track performance metrics across multiple platforms efficiently.',
        solution: 'Created a centralized dashboard aggregating data from various social APIs, featuring customizable reports and real-time analytics.',
        outcome: 'Saved managers ~5 hours per week on reporting and provided actionable insights to improve content strategy.'
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and plain CSS. Features smooth animations, dark theme, and optimized performance.',
        image: '',
        techStack: ['React', 'Vite', 'CSS', 'React Icons'],
        github: 'https://github.com',
        demo: 'https://vercel.app',
        createdAt: '2024-05-15',
        problem: 'Need a professional, high-performance way to showcase skills and projects to potential recruiters and clients.',
        solution: 'Designed and built a custom React portfolio with a focus on clean aesthetics, responsive design, and fast load times.',
        outcome: 'Successfully established a personal brand online, leading to increased visibility and networking opportunities.'
    },
    {
        id: 6,
        title: 'Blog Platform',
        description: 'A full-stack blogging platform with markdown support, user authentication, comments system, and SEO optimization for content creators.',
        image: '',
        techStack: ['Next.js', 'MDX', 'MongoDB', 'NextAuth'],
        github: 'https://github.com',
        demo: 'https://vercel.app',
        createdAt: '2024-06-01',
        problem: 'Writers often struggle with complex CMS platforms that lack developer-friendly features like Markdown support.',
        solution: 'Built a lightweight, SEO-optimized blog platform supporting Markdown, secure authentication, and a commenting system.',
        outcome: 'Provided a seamless writing experience with 100% SEO scores and improved content discoverability.'
    },
];

// Get projects from localStorage or use initial data
export const getProjects = () => {
    const stored = localStorage.getItem('portfolioProjects');
    if (stored) {
        return JSON.parse(stored);
    }
    // Initialize with default projects
    localStorage.setItem('portfolioProjects', JSON.stringify(initialProjects));
    return initialProjects;
};

// Save projects to localStorage
export const saveProjects = (projects) => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
};

// Add a new project
export const addProject = (project) => {
    const projects = getProjects();
    const newProject = {
        ...project,
        id: Date.now(),
        createdAt: new Date().toISOString().split('T')[0],
    };
    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
    return updatedProjects;
};

// Update a project
export const updateProject = (id, updatedData) => {
    const projects = getProjects();
    const updatedProjects = projects.map((p) =>
        p.id === id ? { ...p, ...updatedData } : p
    );
    saveProjects(updatedProjects);
    return updatedProjects;
};

// Delete a project
export const deleteProject = (id) => {
    const projects = getProjects();
    const updatedProjects = projects.filter((p) => p.id !== id);
    saveProjects(updatedProjects);
    return updatedProjects;
};

export default { getProjects, saveProjects, addProject, updateProject, deleteProject };
