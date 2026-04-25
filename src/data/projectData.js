import assets from '../assets/images/assets';


const projects = [
    {
        id: 1,
        title: 'Note-Taking-Application',
        description: 'Built a responsive full-stack application using the MERN stack for efficient note management with real-time updates',
        image: assets.noteapp, 
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
        github: 'https://github.com/bhanurjb07/Note-Taking-App.git',
        demo: 'https://note-taking-app-eosin-eight.vercel.app/',
        createdAt: '2024-01-15',
        problem: 'Users needed a simple, persistent way to organize thoughts without the complexity or clutter of enterprise tools',
        solution: 'Developed a RESTful API with Node.js and Express, integrated with a React frontend using Context API for state.',
        outcome: 'Delivered a seamless, bug-free experience allowing users to create, edit, and delete notes with persistent MongoDB storage.'
    },
    {
        id: 2,
        title: 'ForceStats',
        description: 'A productivity application for Codeforces users to analyse their level of understanding on several topics.',
        image: assets.forcestats,
        techStack: ['React', 'JavaScript', 'CodeForces API', 'Tailwind'],
        github: 'https://github.com/bhanurjb07/ForceStats.git',
        demo: 'https://forcestats.vercel.app/',
        createdAt: '2026-04-10',
        problem: 'Coders always faces problems to find which of the topics are weak and which are stronger.',
        solution: 'Built a developer-focused analytics dashboard for Codeforces users to visualize performance insights and problem-solving patterns.',
    },
    {
        id: 2,
        title: 'SynapseAI',
        description: 'A FullStack Open AI based chatting Platoform',
        image: assets.synapseai,
        techStack: ['React', 'JavaScript', 'OpenAI API', 'NodeJs', 'ExpressJs', 'MongoDB'],
        github: 'https://github.com/bhanurjb07/SynapseAI.git',
        demo: 'https://synapse-ai-blue.vercel.app/',
        createdAt: '2026-04-10',
        // problem: 'Coders always faces problems to find which of the topics are weak and which are stronger.',
        // solution: 'Built a developer-focused analytics dashboard for Codeforces users to visualize performance insights and problem-solving patterns.',
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
    {
        id: 6,
        title: 'Prescripto',
        description: 'A full-stack Doctor appointement platform with payment integration and admin for owner adn doctor.',
        image: assets.clinico,
        techStack: ['React, JavaScript, Express js, Tailwind, JWT, Express, NodeJs, MongoDB, PaymentGatway'],
        github: 'https://github.com',
        demo: 'https://prescripto.vercel.app/',
        createdAt: '2024-06-01',
        // problem: 'Writers often struggle with complex CMS platforms that lack developer-friendly features like Markdown support.',
        // solution: 'Built a lightweight, SEO-optimized blog platform supporting Markdown, secure authentication, and a commenting system.',
        // outcome: 'Provided a seamless writing experience with 100% SEO scores and improved content discoverability.'
    },
];

export const getProjects = () => {
    return projects;
};

export default { getProjects };
