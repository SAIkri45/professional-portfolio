// Projects Data
const projects = [
    {
        title: "IoT Soft Starter Platform",
        category: "iot",
        description: "Advanced IoT soft starter motor controller with AI/ML capabilities. Integrates Google AI, OpenAI, and Claude for intelligent motor control and analytics.",
        technologies: ["Hono", "TypeScript", "MQTT", "RabbitMQ", "OpenAI", "Google AI", "AWS S3", "Socket.io"],
        industry: "IoT & Machine Learning"
    },
    {
        title: "iDhara",
        category: "iot",
        description: "IoT motor starter control system for agricultural automation with MQTT real-time communication, motor scheduling, and field management.",
        technologies: ["Hono", "TypeScript", "PostgreSQL", "Drizzle ORM", "MQTT", "Firebase", "BullMQ"],
        industry: "IoT & Agriculture"
    },
    {
        title: "Figlinks - AI Interview Platform & Video Processor",
        category: "hrtech",
        description: "Unified hiring intelligence platform that combines AI-powered interview assessment, proctoring analytics, video processing, candidate scoring, and automated PDF reporting.",
        technologies: ["Hono", "TypeScript", "PostgreSQL", "Drizzle ORM", "Google Gemini", "Deepgram", "FFmpeg", "Puppeteer", "AWS S3", "Upstash"],
        industry: "HR Tech, AI & Video Intelligence"
    },
    {
        title: "Demeter Cloud",
        category: "iot",
        description: "Agricultural IoT platform for farm and robot fleet management with automated mission planning, real-time MQTT communication, and WebRTC video streaming.",
        technologies: ["Hono", "TypeScript", "PostgreSQL", "Drizzle ORM", "MQTT", "Socket.io", "WebRTC", "AWS S3"],
        industry: "Agriculture Technology"
    },
    {
        title: "Sedyam",
        category: "iot",
        description: "Smart agriculture platform for field operations, sprayer/drone fleet management, and order processing with Firebase integration and real-time IoT communication.",
        technologies: ["Hono", "TypeScript", "PostgreSQL", "Drizzle ORM", "MQTT", "Socket.io", "Firebase", "AWS S3"],
        industry: "Smart Agriculture"
    },
    {
        title: "APFC Power Manager",
        category: "iot",
        description: "Automatic Power Factor Correction (APFC) and motor control platform for agricultural farms with real-time MQTT communication and energy management.",
        technologies: ["Hono", "TypeScript", "PostgreSQL", "MQTT", "AWS S3", "Drizzle ORM", "Zod"],
        industry: "Agriculture & Energy"
    },
    {
        title: "Labsquire LIS",
        category: "healthcare",
        description: "Comprehensive Laboratory Information System for lab management, test processing, HL7 integration, and patient data management.",
        technologies: ["Express.js", "MongoDB", "PostgreSQL", "HL7", "Twilio", "Stripe", "AWS", "Puppeteer"],
        industry: "Healthcare & Laboratory"
    },
    {
        title: "Labsquire EMR Bridge",
        category: "healthcare",
        description: "Electronic Medical Records integration platform that bridges lab systems with external EHR platforms using HL7 messaging protocol.",
        technologies: ["Express.js", "MongoDB", "HL7 Parser", "SFTP", "JWT", "AWS SDK"],
        industry: "Healthcare & EMR"
    },
    {
        title: "Labsquire Task Manager",
        category: "management",
        description: "Task and project management system for laboratory teams with real-time updates, file management, and collaborative features.",
        technologies: ["Hono", "TypeScript", "PostgreSQL", "Socket.io", "AWS S3", "Drizzle ORM", "Pino"],
        industry: "Project Management"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Render Projects
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        projectCard.innerHTML = `
            <div class="project-header">
                <span class="project-category">${project.category.toUpperCase()}</span>
                <h3 class="project-title">${project.title}</h3>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <p style="color: var(--accent); font-weight: 600; margin-top: 1rem;">
                    <i class="fas fa-industry"></i> ${project.industry}
                </p>
                <div class="project-tech">
                    ${project.technologies.map(tech =>
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    // Reset hero section animation
    const hero = document.querySelector('.hero');
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
});

// Scroll indicator click
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < originalText.length) {
        heroTitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Uncomment to enable typing effect
// setTimeout(typeWriter, 500);
