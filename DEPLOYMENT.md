# Deploy to Render - Step by Step Guide

## Prerequisites
- A GitHub account
- Your project files committed to a GitHub repository

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Beautiful project homepage"
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

## Step 2: Deploy on Render

1. **Go to Render Dashboard**:
   - Visit [render.com](https://render.com)
   - Sign up or log in with your GitHub account

2. **Create New Static Site**:
   - Click "New +" button
   - Select "Static Site"
   - Connect your GitHub repository

3. **Configure the Site**:
   - **Name**: `dhruv-projects-homepage` (or your preferred name)
   - **Repository**: Select your GitHub repository
   - **Branch**: `main`
   - **Build Command**: Leave empty (not needed for static sites)
   - **Publish Directory**: `.` (root directory)

4. **Advanced Settings** (Optional):
   - **Environment Variables**: None needed for this project
   - **Custom Domain**: You can add your own domain later

5. **Deploy**:
   - Click "Create Static Site"
   - Render will automatically deploy your site
   - Your site will be available at `https://your-site-name.onrender.com`

## Step 3: Custom Domain (Optional)

1. **Add Custom Domain**:
   - In your Render dashboard, go to your site settings
   - Click "Custom Domains"
   - Add your domain (e.g., `projects.yourdomain.com`)

2. **Configure DNS**:
   - Add a CNAME record pointing to your Render URL
   - Wait for DNS propagation (can take up to 48 hours)

## Step 4: Automatic Deployments

- Every time you push changes to your GitHub repository, Render will automatically redeploy your site
- You can see deployment status in your Render dashboard

## Troubleshooting

### Common Issues:

1. **Site not loading**:
   - Check that all files are committed to GitHub
   - Verify the publish directory is set to `.`
   - Check the deployment logs in Render dashboard

2. **Styling not working**:
   - Ensure `styles.css` is in the root directory
   - Check that the file path in `index.html` is correct

3. **JavaScript not working**:
   - Ensure `script.js` is in the root directory
   - Check browser console for errors

### File Structure Check:
Make sure your repository has these files:
```
├── index.html
├── styles.css
├── script.js
├── render.yaml
├── README.md
└── DEPLOYMENT.md
```

## Support

If you encounter any issues:
1. Check the Render documentation: [docs.render.com](https://docs.render.com)
2. Check your deployment logs in the Render dashboard
3. Verify all files are properly committed to GitHub

---

Your beautiful homepage will be live at: `https://your-site-name.onrender.com` 🎉 