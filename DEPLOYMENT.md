# Deploy to Render as Web Service - Step by Step Guide

## Prerequisites
- A GitHub account
- Your project files committed to a GitHub repository
- Node.js knowledge (basic)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Web service with beautiful homepage"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it something like `dhruv-projects-homepage`
   - Make it public or private (your choice)
   - Don't initialize with README (since we already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dhruv-projects-homepage.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy on Render as Web Service

1. **Go to Render Dashboard**:
   - Visit [render.com](https://render.com)
   - Sign up or log in with your GitHub account

2. **Create New Web Service**:
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository

3. **Configure the Web Service**:
   - **Name**: `dhruv-projects-homepage` (or your preferred name)
   - **Repository**: Select your GitHub repository
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or choose paid plan)

4. **Environment Variables** (Optional):
   - `NODE_ENV`: `production`
   - Add any other environment variables you need

5. **Advanced Settings**:
   - **Health Check Path**: `/api/health`
   - **Auto-Deploy**: Enabled (recommended)

6. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy your service
   - Your service will be available at `https://your-service-name.onrender.com`

## Step 3: Test Your Web Service

Once deployed, test these endpoints:

1. **Homepage**: `https://your-service-name.onrender.com/`
2. **API Projects**: `https://your-service-name.onrender.com/api/projects`
3. **Health Check**: `https://your-service-name.onrender.com/api/health`

## Step 4: Custom Domain (Optional)

1. **Add Custom Domain**:
   - In your Render dashboard, go to your service settings
   - Click "Custom Domains"
   - Add your domain (e.g., `projects.yourdomain.com`)

2. **Configure DNS**:
   - Add a CNAME record pointing to your Render URL
   - Wait for DNS propagation (can take up to 48 hours)

## Step 5: Automatic Deployments

- Every time you push changes to your GitHub repository, Render will automatically redeploy your service
- You can see deployment status and logs in your Render dashboard
- Monitor your service health and performance

## API Endpoints

Your web service includes these endpoints:

### GET `/`
- Serves the beautiful homepage
- Returns the main HTML page

### GET `/api/projects`
- Returns JSON data of all projects
- Useful for dynamic project loading

### GET `/api/health`
- Health check endpoint
- Returns service status and uptime

### POST `/api/analytics`
- Logs user interactions (for future use)
- Accepts JSON with event data

## File Structure

```
├── server.js              # Express server
├── package.json           # Node.js dependencies
├── render.yaml            # Render configuration
├── index.html             # Main homepage
├── public/                # Static files
│   ├── styles.css         # CSS styles
│   └── script.js          # JavaScript
├── README.md              # Documentation
├── DEPLOYMENT.md          # This file
└── .gitignore             # Git ignore rules
```

## Troubleshooting

### Common Issues:

1. **Build fails**:
   - Check that `package.json` exists and is valid
   - Verify all dependencies are listed
   - Check build logs in Render dashboard

2. **Service won't start**:
   - Verify `startCommand` is correct (`npm start`)
   - Check that `server.js` exists and is valid
   - Review startup logs in Render dashboard

3. **Static files not loading**:
   - Ensure files are in the `public/` directory
   - Check file paths in `index.html`
   - Verify Express static middleware is configured

4. **API endpoints not working**:
   - Check that routes are properly defined in `server.js`
   - Verify CORS is enabled if needed
   - Test endpoints locally first

### Local Development:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```

3. **Test endpoints**:
   - Homepage: `http://localhost:3000/`
   - API: `http://localhost:3000/api/projects`
   - Health: `http://localhost:3000/api/health`

## Monitoring and Logs

- **View logs**: In Render dashboard, go to your service → Logs
- **Monitor performance**: Check the Metrics tab
- **Health checks**: Render automatically monitors `/api/health`

## Scaling

- **Free plan**: Limited resources, good for development
- **Paid plans**: More resources, custom domains, better performance
- **Auto-scaling**: Available on paid plans

## Support

If you encounter any issues:
1. Check the Render documentation: [docs.render.com](https://docs.render.com)
2. Review your service logs in the Render dashboard
3. Test locally to isolate issues
4. Check the Render community forums

---

Your web service will be live at: `https://your-service-name.onrender.com` 🚀 