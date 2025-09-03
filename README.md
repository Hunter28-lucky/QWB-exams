# QWB Question Wala Bank

Your Trusted Source for Question Papers & Study Materials

## Features

- 📚 Semester-wise study materials (1st to 8th semester + yearly)
- 🎓 Branch-specific content for all engineering streams
- 📄 Complete question papers and important questions
- 🔒 Secure payment integration
- 📱 Mobile-optimized responsive design

## Deployment

### Vercel Deployment

#### Step 1: Prepare Your Repository
1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/jut-official-hub.git
   git push -u origin main
   ```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "New Project" or "Add New..." → "Project"
3. Import your repository from the list
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy" - no additional configuration needed!

#### Step 3: Verify Deployment
- Vercel will provide a live URL (e.g., `your-project.vercel.app`)
- The payment API will work automatically through the configured proxy
- Mobile optimization is fully functional

#### Optional: Custom Domain
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain and follow DNS instructions

### Local Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons
- Zapupi payment gateway integration

## Payment Integration

The application uses Zapupi payment gateway for secure transactions. The API proxy is configured in `vercel.json` for production deployment.