import assets from '../assets/images/assets';


const projects = [
    {
        id: 1,
        title: 'Note-Taking-Application',
        description: 'Built a responsive full-stack application using the MERN stack for efficient note management with real-time updates',
        image: '', 
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
        github: 'https://github.com/bhanurjb07/Note-Taking-App.git',
        demo: 'https://vercel.app',
        createdAt: '2024-01-15',
        problem: 'Users needed a simple, persistent way to organize thoughts without the complexity or clutter of enterprise tools',
        solution: 'Developed a RESTful API with Node.js and Express, integrated with a React frontend using Context API for state.',
        outcome: 'Delivered a seamless, bug-free experience allowing users to create, edit, and delete notes with persistent MongoDB storage.'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A productivity application for managing tasks and projects with drag-and-drop functionality, real-time updates, and team collaboration features.',
        image: "",
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
        title: 'TaxPal',
        description: 'TaxPal is a comprehensive financial management application designed specifically for freelancers and gig workers. It helps users manage their income, track expenses, create budgets, estimate taxes, and generate detailed financial reports.',
        image: assets.taxpal,
        techStack: ['React', 'Node.js', 'Express', 'Chart.js', 'MongoDB'],
        github: 'https://github.com/bhanurjb07/Taxpal-Infosys.git',
        demo: 'https://taxpal-infosys.vercel.app/',
        createdAt: '2025-09-10',
        problem: 'Managing finances is chaotic for freelancers. Fragmented tools for tracking expenses, taxes, and invoicing lead to disorganization, missed deductions, and hours wasted on manual administrative work instead of growing the business.',
        solution: 'TaxPal is an all-in-one financial dashboard that automates expense tracking, provides real-time tax estimation, and streamlines invoicing. It consolidates financial data into actionable insights with multi-currency support and secure reporting.',
        outcome: 'Users reduced administrative time by 40% and improved tax compliance. The unified platform provided clarity on financial health, enabling better decision-making and stress-free tax filing for small businesses and freelancers.'
    },
    // {
    //     id: 4,
    //     title: 'Social Media Dashboard',
    //     description: 'Analytics dashboard for social media management with real-time metrics, engagement tracking, and customizable reports for multiple platforms.',
    //     image: '',
    //     techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    //     github: 'https://github.com',
    //     demo: 'https://vercel.app',
    //     createdAt: '2024-04-05',
    //     problem: 'Social media managers lack a unified tool to track performance metrics across multiple platforms efficiently.',
    //     solution: 'Created a centralized dashboard aggregating data from various social APIs, featuring customizable reports and real-time analytics.',
    //     outcome: 'Saved managers ~5 hours per week on reporting and provided actionable insights to improve content strategy.'
    // },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and plain CSS. Features smooth animations, dark theme, and optimized performance.',
        image: assets.portfolio,
        techStack: ['React', 'Vite', 'CSS', 'React Icons'],
        github: 'https://github.com/bhanurjb07/Portfolio.git',
        demo: 'https://bpsingh.vercel.app/',
        createdAt: '2024-05-15',
        problem: 'My skills and projects were scattered across multiple platforms, making it hard to present them clearly.',
        solution: 'I built a portfolio website to showcase my work, skills, and experience in one professional place.',
        outcome: 'You can see at https://bpsingh.vercel.app/'
    },
    // {
    //     id: 6,
    //     title: 'Blog Platform',
    //     description: 'A full-stack blogging platform with markdown support, user authentication, comments system, and SEO optimization for content creators.',
    //     image: '',
    //     techStack: ['Next.js', 'MDX', 'MongoDB', 'NextAuth'],
    //     github: 'https://github.com',
    //     demo: 'https://vercel.app',
    //     createdAt: '2024-06-01',
    //     problem: 'Writers often struggle with complex CMS platforms that lack developer-friendly features like Markdown support.',
    //     solution: 'Built a lightweight, SEO-optimized blog platform supporting Markdown, secure authentication, and a commenting system.',
    //     outcome: 'Provided a seamless writing experience with 100% SEO scores and improved content discoverability.'
    // },
];

export const getProjects = () => {
    return projects;
};

export default { getProjects };
