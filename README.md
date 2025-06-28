# Dhruv's Projects Homepage - Web Service

A beautiful, interactive web service for showcasing your projects, built with Node.js/Express and inspired by the creative design of [neal.fun](https://neal.fun).

## Features

- 🎨 **Beautiful Design**: Modern gradient background with floating animations
- 🚀 **Interactive Cards**: Hover effects and smooth transitions
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- ♿ **Accessible**: Keyboard navigation and screen reader support
- 🎉 **Fun Interactions**: Confetti effects and parallax animations
- 🔗 **Easy Navigation**: One-click access to your projects
- 🌐 **Web Service**: Full Express.js backend with API endpoints
- 📊 **Analytics Ready**: Built-in analytics endpoint for tracking
- 🔒 **Secure**: Helmet.js security headers and CORS protection

## API Endpoints

### GET `/`
- Serves the beautiful homepage
- Returns the main HTML page with all styling and interactions

### GET `/api/projects`
- Returns JSON data of all projects
- Useful for dynamic project loading and future integrations
- Example response:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "AI Assistant",
      "description": "An intelligent AI assistant with memory, code execution, file upload, and voice input capabilities.",
      "url": "https://myai-14dw.onrender.com",
      "icon": "🤖",
      "features": ["🧠 Memory", "💻 Code Execution", "📄 File Upload", "🗣️ Voice Input"],
      "status": "live"
    }
  ],
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET `/api/health`
- Health check endpoint for monitoring
- Returns service status, uptime, and environment info

### POST `/api/analytics`
- Logs user interactions (for future analytics)
- Accepts JSON with event data

## Current Projects

- **AI Assistant** - [https://myai-14dw.onrender.com](https://myai-14dw.onrender.com)
  - Features: Memory, Code Execution, File Upload, Voice Input

## How to Add New Projects

### Method 1: Edit the API (Recommended)
Update the projects array in `server.js`:

```javascript
const projects = [
    {
        id: 1,
        title: 'AI Assistant',
        description: 'An intelligent AI assistant...',
        url: 'https://myai-14dw.onrender.com',
        icon: '🤖',
        features: ['🧠 Memory', '💻 Code Execution'],
        status: 'live'
    },
    {
        id: 2,
        title: 'Your New Project',
        description: 'Description of your project',
        url: 'https://your-project-url.com',
        icon: '🎯',
        features: ['Feature 1', 'Feature 2'],
        status: 'live'
    }
];
```

### Method 2: Edit the HTML
Add a new project card in the `projects-grid` section of `index.html`:

```html
<div class="project-card" data-url="YOUR_PROJECT_URL">
    <div class="project-content">
        <div class="project-icon">🎯</div>
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Brief description of your project.</p>
        <div class="project-features">
            <span class="feature">Feature 1</span>
            <span class="feature">Feature 2</span>
        </div>
    </div>
    <div class="project-overlay">
        <button class="visit-btn">Visit Project →</button>
    </div>
</div>
```

## File Structure

```
├── server.js              # Express server with API endpoints
├── package.json           # Node.js dependencies and scripts
├── render.yaml            # Render deployment configuration
├── index.html             # Main homepage
├── public/                # Static files directory
│   ├── styles.css         # CSS styles and animations
│   └── script.js          # Frontend JavaScript
├── README.md              # This documentation
├── DEPLOYMENT.md          # Deployment guide
└── .gitignore             # Git ignore rules
```

## Getting Started

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Access your site**:
   - Homepage: http://localhost:3000/
   - API Projects: http://localhost:3000/api/projects
   - Health Check: http://localhost:3000/api/health

### Production Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Render.

## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Styling**: Custom CSS with modern animations
- **Security**: Helmet.js, CORS protection
- **Performance**: Compression middleware
- **Deployment**: Render (Web Service)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization Guide

### Changing Colors

Edit the gradient in `public/styles.css`:

```css
body {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### Adding More API Endpoints

Extend the Express server in `server.js`:

```javascript
app.get('/api/your-endpoint', (req, res) => {
    res.json({
        success: true,
        data: yourData
    });
});
```

### Modifying Layout

The grid layout can be adjusted in `public/styles.css`:

```css
.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
```

## Deployment

This project is configured for deployment on Render as a Web Service:

- **Automatic deployments** from GitHub
- **Health checks** for monitoring
- **Environment variables** support
- **Custom domains** support
- **SSL certificates** included

## Contributing

Feel free to customize this web service for your own projects! The code is well-commented and modular for easy modification.

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Dhruv 