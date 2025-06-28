const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
}));

// Enable CORS
app.use(cors());

// Enable compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Move static files to public directory
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));
app.use('/script.js', express.static(path.join(__dirname, 'script.js')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API routes for future functionality
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'AI Assistant',
            description: 'An intelligent AI assistant with memory, code execution, file upload, and voice input capabilities.',
            url: 'https://myai-14dw.onrender.com',
            icon: '🤖',
            features: ['🧠 Memory', '💻 Code Execution', '📄 File Upload', '🗣️ Voice Input'],
            status: 'live'
        },
        {
            id: 2,
            title: 'Coming Soon',
            description: 'More amazing projects are in the works. Stay tuned!',
            icon: '🚀',
            features: [],
            status: 'coming-soon'
        },
        {
            id: 3,
            title: 'Coming Soon',
            description: 'More amazing projects are in the works. Stay tuned!',
            icon: '🎨',
            features: [],
            status: 'coming-soon'
        },
        {
            id: 4,
            title: 'Coming Soon',
            description: 'More amazing projects are in the works. Stay tuned!',
            icon: '⚡',
            features: [],
            status: 'coming-soon'
        }
    ];
    
    res.json({
        success: true,
        data: projects,
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Analytics endpoint (for future use)
app.post('/api/analytics', express.json(), (req, res) => {
    const { event, projectId, timestamp } = req.body;
    
    // Log analytics event (in production, you'd save to a database)
    console.log('Analytics Event:', {
        event,
        projectId,
        timestamp: timestamp || new Date().toISOString(),
        userAgent: req.get('User-Agent'),
        ip: req.ip
    });
    
    res.json({
        success: true,
        message: 'Event logged successfully'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: 'The requested resource does not exist',
        availableRoutes: ['/', '/api/projects', '/api/health']
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Local: http://localhost:${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    
    if (process.env.NODE_ENV === 'production') {
        console.log('✅ Production mode enabled');
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received, shutting down gracefully');
    process.exit(0);
}); 