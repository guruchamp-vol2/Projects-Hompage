# Dhruv's Projects Homepage

A beautiful, interactive homepage for showcasing your projects, inspired by the creative design of [neal.fun](https://neal.fun).

## Features

- 🎨 **Beautiful Design**: Modern gradient background with floating animations
- 🚀 **Interactive Cards**: Hover effects and smooth transitions
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- ♿ **Accessible**: Keyboard navigation and screen reader support
- 🎉 **Fun Interactions**: Confetti effects and parallax animations
- 🔗 **Easy Navigation**: One-click access to your projects

## Current Projects

- **AI Assistant** - [https://myai-14dw.onrender.com](https://myai-14dw.onrender.com)
  - Features: Memory, Code Execution, File Upload, Voice Input

## How to Add New Projects

To add a new project, edit the `index.html` file and add a new project card in the `projects-grid` section:

```html
<div class="project-card" data-url="YOUR_PROJECT_URL">
    <div class="project-content">
        <div class="project-icon">🎯</div>
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Brief description of your project and what it does.</p>
        <div class="project-features">
            <span class="feature">Feature 1</span>
            <span class="feature">Feature 2</span>
            <span class="feature">Feature 3</span>
        </div>
    </div>
    <div class="project-overlay">
        <button class="visit-btn">Visit Project →</button>
    </div>
</div>
```

### Customization Options

1. **Change the title and subtitle** in the header section
2. **Modify colors** by editing the CSS variables in `styles.css`
3. **Add more animations** by extending the JavaScript in `script.js`
4. **Change the background** by modifying the gradient in the body styles

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript interactions
└── README.md           # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. The page will load with smooth animations
3. Click on any project card to visit the project
4. Use keyboard navigation (Tab + Enter) for accessibility

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization Guide

### Changing Colors

Edit the gradient in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### Adding More Animations

Extend the JavaScript in `script.js` to add custom animations or interactions.

### Modifying Layout

The grid layout can be adjusted in `styles.css`:

```css
.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
```

## Deployment

You can deploy this homepage to any static hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy

## Contributing

Feel free to customize this homepage for your own projects! The code is well-commented and modular for easy modification.

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Dhruv 