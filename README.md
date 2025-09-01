# JUT Official Hub

Official Portal for Examination Materials & Important Questions for Jharkhand University of Technology (JUT).

## Features

- 📚 Semester-wise study materials (1st to 8th semester + yearly)
- 🎓 Branch-specific content for all engineering streams
- 📄 Complete question papers and important questions
- 🔒 Secure payment integration
- 📱 Mobile-optimized responsive design

## Deployment

### Vercel Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Vercel will automatically detect it's a Vite project
5. Deploy with default settings

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