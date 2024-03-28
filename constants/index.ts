import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const headerLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'About',
        route: '/about',
    },
    {
        label: 'Portfolio',
        route: '/portfolio',
    },
    {
        label: 'Contact',
        route: '/contact'
    }
]

export const socialLinks = [
    {
        icon: Github,
        label: 'Github',
        route: 'https://github.com/dulee19',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        route: 'https://www.linkedin.com/in/dusan-aleksic-b22237211/',
    },

]

export const contactDetails = [
    {
        id: 1,
        icon: Phone,
        text: "+381 62 1085057",
    },
    {
        id: 2,
        icon: Mail,
        text: "adusan53@gmail.com",
    },
    {
        id: 3,
        icon: MapPin,
        text: "Niš, Serbia",
    },
];

export const skills = [
    {
        id: 1,
        name: "Front-end Development",
        description:
            "Proficient in HTML, CSS, and JavaScript, with expertise in React.js and modern frontend frameworks.Experienced in Redux for state management, React Query for optimized server communication, and Tailwind CSS for responsive and visually appealing UIs.Committed to crafting seamless user experiences through clean, maintainable code.",
        icon: "/icons/frontend.png",
    },
    {
        id: 2,
        name: "User Interface - UI Development",
        description:
            "Ability to craft visually appealing and user-friendly interfaces using code to enhance user engagement and interaction.",
        icon: "/icons/ux.png",
    },
    {
        id: 3,
        name: "Responsive Web Development",
        description:
            "Capability to develop websites that adapt and function flawlessly across various devices and screen sizes using coding techniques.",
        icon: "/icons/responsive.png",
    },
    {
        id: 4,
        name: "User Experience - UX Development",
        description:
            "Understanding of user behavior and experience principles applied through coding to create seamless and satisfying user interactions.",
        icon: "/icons/ux.png",
    },
    {
        id: 5,
        name: "Backend Development",
        description:
            "Familiar with building robust server-side applications and APIs using Node.js and Laravel. Experienced in database schema design, query optimization, and efficient data management. Knowledgeable about security best practices to safeguard data. Committed to writing clean, maintainable code following industry standards.",
        icon: "/icons/backend.png",
    },
    {
        id: 6,
        name: "Mobile-Friendly Coding",
        description:
            "Proficiency in coding practices that ensure websites function seamlessly on mobile devices.",
        icon: "/icons/mobile.png",
    },
];

export const benefits = [
    {
        id: 1,
        name: "Creative Coding for Visitor Engagement",
        description:
            "With a strong sense of aesthetics and a creative drive, I specialize in coding visually stunning and engaging websites. By integrating elegant code structures, interactive elements, and strategic design principles, I craft an immersive and impactful user experience. Your website will captivate visitors, enhancing your brand's credibility and professionalism.",
    },
    {
        id: 2,
        name: "User-Centric Development for Enhanced Experience",
        description:
            "I prioritize user experience (UX) development, focusing on your visitors throughout the coding process. Through extensive research and user testing methodologies, I ensure that your website is intuitive, easy to navigate, and guides users effectively. The outcome is a gratifying user journey that boosts engagement and conversions.",
    },
    {
        id: 3,
        name: "Mobile-Optimized Coding for Widespread Accessibility",
        description:
            "In today's mobile-driven landscape, a responsive website is essential. I specialize in coding mobile-friendly designs that seamlessly adapt to various devices and screen sizes. Your website will maintain its appearance and functionality across desktops, smartphones, and tablets, allowing you to reach and engage your audience effectively.",
    },
    {
        id: 4,
        name: "Proficiency in Latest Technologies",
        description:
            "With expertise in HTML, CSS, JavaScript, and cutting-edge front-end technologies including Next.js, I possess the technical prowess to execute your design concepts. From seamless animations to immersive user interfaces, I leverage the latest coding technologies to enhance user engagement and deliver dynamic and modern web experiences.",
    },
];

export const portfolios = [
    {
        id: 1,
        title: "Snapgram",
        link: "https://snapgram-lac-nine.vercel.app/",
        images: [
            "/portfolio/snapgram-home.png",
            "/portfolio/snapgram-article.png",
            "/portfolio/snapgram-saved.png",
        ],
    },
    {
        id: 2,
        title: "Airbnb",
        link: "https://airbnb-next-dtvp.vercel.app/",
        images: [
            "/portfolio/airbnb-home.png",
            "/portfolio/airbnb-article.png",
            "/portfolio/airbnb-search.png",
            "/portfolio/airbnb-create.png",
        ],
    },
    {
        id: 3,
        title: "Evently",
        link: "https://next-evently-9rkrrtnu9-dulee19s-projects.vercel.app/",
        images: [
            "/portfolio/evently-home.png",
            "/portfolio/evently-articles.png",
            "/portfolio/evently-article.png",
            "/portfolio/evently-tickets.png",
            "/portfolio/evently-create.png",
        ],
    },
    {
        id: 4,
        title: "Brainware",
        link: "https://brainware-ai-landing.vercel.app/",
        images: [
            "/portfolio/brainware-section-1.png",
            "/portfolio/brainware-section-2.png",
            "/portfolio/brainware-section-3.png",
            "/portfolio/brainware-section-4.png",
            "/portfolio/brainware-section-5.png",
        ],
    },
];

export const timeline = [
    {
        id: 1,
        title: "Medior Web Developer",
        duration: "2020 - Present",
        description:
            "Currently serving as a Medior Web Developer, where I contribute to the development of innovative web solutions, e-commerce platforms, lead frontend projects, and collaborate with cross-functional teams to deliver high-quality products.",
    },
    {
        id: 2,
        title: "Junior Web Developer at UpWork",
        duration: "2018 - 2020",
        description:
            "Worked as a Junior Web Developer on UpWork, gaining valuable experience in frontend development, responsive design, and client communication. Completed multiple projects successfully, showcasing strong problem-solving skills and attention to detail.",
    },
    {
        id: 3,
        title: "Degree in Computer Science",
        duration: "2018 - 2022",
        description:
            "Pursued a degree in Computer Science, where I acquired a solid foundation in programming, algorithms, and software development principles. Developed a passion for frontend development and honed my skills through coursework and projects.",
    },
];
