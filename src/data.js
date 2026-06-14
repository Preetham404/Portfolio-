
import swocCertificate from "./assets/SWOC26-TC-Preetham_Shetty.png";
import wanderStay from "./assets/Wanderstay.png";
import spotifyClone from "./assets/Spotify.png";
import solarTracker from "./assets/solar-tracker.jpeg";
import sapHackfest from "./assets/SAP_HackFest.jpeg";
import innovex from "./assets/CodeForInnovex.JPG";
import ayushHabba from "./assets/AyushHabba.png";
import mite from "./assets/mite.jpg";



export const personalInfo = {
    name: "Preetham Shetty",
    github: "https://github.com/preetham404",
    linkedin: "https://www.linkedin.com/in/preetham404",
    email: "preethamshetty5353@gmail.com",
};

export const aboutMe = {
    tagline: "Computer Science Engineering Student & Full Stack Developer",

    paragraphs: [
        "I am a Computer Science Engineering student at MITE, Mangalore. I enjoy building modern web applications and learning new technologies.",

        "My main interests are Full Stack Development, React, Node.js, MongoDB and Artificial Intelligence. I love solving problems and creating useful software.",

        "Currently, I am focused on improving my development skills, building projects, and preparing for a software development career."
    ]
};

export const education = {
    period: "2024 - 2028",
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Mangalore Institute of Technology & Engineering (MITE)",
    cgpa: "Currently pursuing Computer Science Engineering"
};


export const projects = [
    {
        id: 1,
        title: "WanderStay",
        subtitle: "Full Stack Web App",
        description:
            "An Airbnb-inspired property rental platform with authentication, image uploads, reviews .",
        bulletPoints: [
            "User authentication and authorization",
            "Property listing CRUD operations",
            "Cloudinary image uploads",

        ],
        tech: [
            "MongoDB",
            "Express",
            "Node.js",
            "EJS",
            "Cloudinary",
            "React.js"
        ],
        githubUrl: "https://github.com/Preetham404/WanderStay",
        liveUrl: "https://wanderstay-5aiw.onrender.com/"
    },

    {
        id: 2,
        title: "Spotify Clone",
        subtitle: "Frontend",
        description:
            "A responsive clone of Spotify with modern UI, sidebar navigation and music player layout.",
        bulletPoints: [
            "Responsive design",
            "Modern Spotify interface",
            "Sidebar navigation",
            "Music player section"
        ],
        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        githubUrl: "https://github.com/Preetham404/Spotify_Clone",

    },

    {
        id: 3,
        title: "Dual-Axis Solar Tracker",
        subtitle: "IoT / Hardware",
        description:
            "A 360° solar tracking system using servo motors and LDR sensors for efficient solar energy harvesting.",
        bulletPoints: [
            "Automatic sunlight tracking",
            "Arduino based system",
            "Servo motor control",
            "Renewable energy project"
        ],
        tech: [
            "Arduino Uno",
            "C/C++",
            "IoT",
            "Servo Motors",
            "LDR Sensors"
        ],
        githubUrl: "https://github.com/Preetham404/Simon_Says",

    },
];

export const experience = [
    {
        role: "Contributor",
        company: "Social Winter of Code (SWOC)",
        period: "Jan 2026 - Mar 2026",
        description:
            "Ranked #44 among 2000+ contributors in Social Winter of Code 2026. Contributed to open-source projects while improving problem-solving, teamwork and collaboration skills.",

        bulletPoints: [
            "Ranked #44 among 2000+ contributors",
            "Achieved Top 100 Contributors recognition",
            "Contributed to open-source repositories",
            "Improved GitHub workflow and collaboration skills",
            "Worked remotely with developers from different backgrounds"
        ],

        offerLetterImage: swocCertificate,
    },
];


export const hackathons = [
    {
        title: "MITE, Mangalore",
        achievement: "Education",
        year: "2024 - Present",
        scope: "Computer Science Engineering",
        photo: mite,
        description:
            "Currently pursuing Bachelor of Engineering in Computer Science and Engineering at MITE, Mangalore while building projects and participating in hackathons."
    },

    {
        title: "Dual-Axis Solar Tracker",
        achievement: "IoT Project",
        year: "2024",
        scope: "Hardware Development",
        photo: solarTracker,
        description:
            "Designed and built a dual-axis solar tracking system using Arduino, LDR sensors and servo motors for efficient solar energy harvesting."
    },

    {
        title: "SAP Hackfest 2025",
        achievement: "Regional Round",
        year: "2025",
        scope: "National Level Hackathon",
        photo: sapHackfest,
        description:
            "Selected for the Regional Round of SAP Hackfest 2025, one of India's leading enterprise technology competitions."
    },

    {
        title: "Spotify Clone",
        achievement: "Frontend Project",
        year: "2025",
        scope: "Web Development",
        photo: spotifyClone,
        description:
            "Built a responsive Spotify-inspired web application with sidebar navigation, playlists and modern UI design."
    },

    {
        title: "Code For Innovex",
        achievement: "Top 15 Teams",
        year: "2025",
        scope: "24 Hour Hackathon",
        photo: innovex,
        description:
            "Finished among the Top 15 teams in a 24-hour hackathon focused on innovation, teamwork and rapid problem solving."
    },

    {
        title: "Ayush Habba 2026",
        achievement: "Round 2 Selection",
        year: "2026",
        scope: "Technical Competition",
        photo: ayushHabba,
        description:
            "Successfully cleared the first round and advanced to Round 2 among competing teams."
    },

    {
        title: "SWOC 2026",
        achievement: "Top 100 Contributor",
        year: "2026",
        scope: "Open Source",
        photo: swocCertificate,
        description:
            "Ranked #44 among 2000+ contributors and earned recognition as a Top 100 Contributor in Social Winter of Code 2026."
    },

    {
        title: "WanderStay",
        achievement: "Major Project",
        year: "2026",
        scope: "Full Stack Development",
        photo: wanderStay,
        description:
            "Built and deployed a full-stack Airbnb-inspired property rental platform featuring authentication, reviews, image uploads and property management."
    }
];



export const hobbies = [
    {
        name: "Coding",
        icon: "Code",
        description:
            "I enjoy building web applications, learning new technologies, and solving programming challenges. Coding helps me turn ideas into real projects."
    },

    {
        name: "Mentorship",
        icon: "Users",
        description:
            "I like helping classmates and fellow students by sharing knowledge, solving doubts, and supporting them in their learning journey."
    },

    {
        name: "Playing Cricket",
        icon: "Compass",
        description:
            "Cricket is my favorite outdoor activity. I enjoy playing with friends in the evenings as it helps me stay active, improve teamwork, and relax."
    },

    {
        name: "Exploring New Things",
        icon: "Cpu",
        description:
            "I am always curious about new technologies, tools, and ideas. I enjoy exploring innovative concepts and continuously learning something new."
    }
];

export const personaldetails = {
    name: "Preetham Shetty",
    title: "Computer Science Engineering Student & Full Stack Developer",
    github: "https://github.com/preetham404",
    linkedin: "https://www.linkedin.com/in/preetham404",
    email: "preethamshetty5353@gmail.com",
    phone: "+91 8088130030",
    resumeUrl: "/Preetham_Shetty_Resume.pdf",
};


export const techStack = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "React.js" },
            { name: "Tailwind CSS" },
        ],
    },

    {
        category: "Backend",
        skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "MongoDB" },
        ],
    },

    {
        category: "Programming",
        skills: [
            { name: "C" },
            { name: "C++" },
            { name: "Java" },
        ],
    },

    {
        category: "Tools",
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "VS Code" },
            { name: "Cloudinary" },
        ],
    },
];