# Professional Portfolio Website

A modern, responsive portfolio website showcasing your professional projects and skills.

## Features

- ✨ Modern and clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful gradient color scheme
- 🔍 Project filtering by category (IoT, Healthcare, Management)
- 🚀 Smooth scrolling and transitions
- 📊 Skills showcase organized by category
- 💼 Professional project cards with technology tags
- 🌙 Dark theme optimized for readability

## Quick Start

1. **Open the portfolio**: Simply open `index.html` in any modern web browser
   ```bash
   # On Windows
   start index.html

   # Or double-click the index.html file
   ```

2. **View locally**: You can also use a local server for better experience
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. **Access**: Open your browser and go to `http://localhost:8000`

## Customization

### Update Personal Information

#### 1. Contact Links (in `index.html`)
Find the contact section and update your information:
```html
<a href="mailto:your.email@example.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    <span>Email Me</span>
</a>
<a href="https://github.com/yourusername" target="_blank" class="contact-link">
    <i class="fab fa-github"></i>
    <span>GitHub</span>
</a>
<a href="https://linkedin.com/in/yourusername" target="_blank" class="contact-link">
    <i class="fab fa-linkedin"></i>
    <span>LinkedIn</span>
</a>
```

#### 2. Add/Modify Projects (in `script.js`)
Edit the `projects` array:
```javascript
const projects = [
    {
        title: "Your Project Name",
        category: "iot", // or "healthcare", "management"
        description: "Brief description of your project",
        technologies: ["Tech1", "Tech2", "Tech3"],
        industry: "Industry Name"
    },
    // Add more projects...
];
```

#### 3. Update About Section (in `index.html`)
Modify the about text and statistics:
```html
<p>
    Your custom bio and professional summary here...
</p>
<div class="stats">
    <div class="stat-item">
        <h3>9+</h3>
        <p>Projects Completed</p>
    </div>
    <!-- Update numbers as needed -->
</div>
```

#### 4. Customize Colors (in `styles.css`)
Change the color scheme at the top of the CSS file:
```css
:root {
    --primary-color: #6366f1;  /* Primary brand color */
    --secondary-color: #8b5cf6; /* Secondary accent */
    --accent: #22d3ee;          /* Highlight color */
    /* Modify as needed */
}
```

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a new repository on GitHub
2. Upload all portfolio files
3. Go to repository Settings > Pages
4. Select "main" branch as source
5. Your portfolio will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Vercel (Recommended for Speed)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd professional-portfolio
   vercel
   ```

3. Follow the prompts, and your site will be live in seconds!

### Option 3: Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop your `professional-portfolio` folder
3. Your site is live instantly!

### Option 4: Traditional Hosting

Upload the entire `professional-portfolio` folder to any web hosting service:
- cPanel hosting
- Shared hosting
- VPS
- AWS S3 static website hosting

## Project Structure

```
professional-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity and projects
└── README.md           # This file
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Your Projects Included

### HR Tech
1. **Figlinks - AI Interview Platform & Video Processor** - Unified AI interviewing, proctoring analytics, and video intelligence pipeline

### IoT & Agriculture
2. **IoT Soft Starter Platform** - Advanced motor controller with AI/ML integrations
3. **iDhara** - Agricultural motor automation and scheduling platform
4. **Demeter Cloud** - Farm and robot fleet management with real-time communication
5. **Sedyam** - Smart agriculture operations and order processing platform
6. **APFC Power Manager** - Power factor correction and farm energy management

### Healthcare
7. **Labsquire LIS** - Laboratory Information System
8. **Labsquire EMR Bridge** - EMR/EHR integration via HL7

### Management
9. **Labsquire Task Manager** - Team task and project management

## Technologies Showcased

- **Backend**: Node.js, TypeScript, Python, Hono, Express.js, FastAPI
- **Databases**: PostgreSQL, MongoDB, Drizzle ORM, SQLAlchemy
- **IoT/Real-time**: MQTT, Socket.io, RabbitMQ, WebSockets
- **Cloud**: AWS S3, Firebase, Docker, Neon
- **AI/ML**: OpenAI, Google AI, Claude
- **Healthcare**: HL7 Protocol, EMR/EHR Integration
- **Tools**: Git, JWT, Stripe, Twilio

## Adding More Features

### Add Social Media Icons
Add more social links in the contact section using [Font Awesome icons](https://fontawesome.com/icons).

### Add Project Links
Modify the project card in `script.js` to include GitHub/demo links:
```javascript
<div class="project-footer">
    <a href="github-link" target="_blank">
        <i class="fab fa-github"></i> Code
    </a>
    <a href="demo-link" target="_blank">
        <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
</div>
```

### Add a Blog Section
Create a new section in `index.html` following the existing section structure.

### Add Resume Download
Add a download button in the hero or contact section:
```html
<a href="resume.pdf" download class="btn btn-primary">
    <i class="fas fa-download"></i> Download Resume
</a>
```

## Performance Tips

1. **Optimize images**: If you add project images, compress them first
2. **Minify files**: Use tools like [minifier.org](https://www.minifier.org/) for production
3. **CDN**: Font Awesome is loaded from CDN for optimal performance

## Maintenance

- Update project information regularly
- Add new projects as you complete them
- Keep technology tags current
- Update contact information as needed

## Need Help?

If you need to make specific changes or have questions:
1. The HTML structure is in `index.html`
2. All styling is in `styles.css`
3. Interactive features are in `script.js`
4. Each file is well-commented for easy understanding

## License

This portfolio is for your personal use. Feel free to customize it as needed!

---

**Built with passion for showcasing professional work** 🚀
