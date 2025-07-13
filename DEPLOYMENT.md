# Deployment Guide - Vercel

## Prerequisites

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Make sure you have a Vercel account at [vercel.com](https://vercel.com)

## Environment Variables

Before deploying, you'll need to set up these environment variables in Vercel:

- `OPENROUTER_API_KEY`: Your OpenRouter API key for AI functionality
- `SITE_URL`: Your production domain (e.g., https://your-app.vercel.app)
- `SITE_NAME`: Your site name (e.g., "Zen Studio")

## Deployment Steps

### Option 1: Using Vercel CLI

1. **Login to Vercel:**
```bash
vercel login
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set up environment variables
   - Deploy

### Option 2: Using Vercel Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect your repository to Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your repository

3. **Configure build settings:**
   - Framework Preset: Other
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/spa`
   - Install Command: `npm install`

4. **Set environment variables:**
   - Go to Project Settings > Environment Variables
   - Add the required variables listed above

5. **Deploy**

## Build Configuration

The project is configured with:
- `vercel.json`: Handles routing and build configuration
- `package.json`: Contains the `vercel-build` script
- Client builds to `dist/spa/`
- Server builds to `dist/server/`

## Troubleshooting

- If you get build errors, check that all dependencies are in `package.json`
- Ensure environment variables are set correctly
- Check Vercel logs for specific error messages

## Post-Deployment

After successful deployment:
1. Test all functionality
2. Verify AI chat features work
3. Check that all routes are accessible
4. Monitor performance in Vercel dashboard 