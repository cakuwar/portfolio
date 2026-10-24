# My Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **React**, and **Tailwind CSS**. Designed to showcase projects, skills, and experience.

## Features

✨ **Modern Design** - Clean, professional interface with smooth animations
📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile devices
⚡ **Fast Performance** - Optimized with Next.js and Tailwind CSS
🎯 **SEO Optimized** - Built-in SEO best practices
📧 **Contact Form** - Functional contact form for visitor inquiries
🚀 **Deployment Ready** - Easy deployment to Vercel, Netlify, or traditional hosting

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) or any Node.js hosting

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with header & footer
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects showcase
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer component
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data & content
│   └── public/
│       └── images/             # Project images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Your Portfolio

Edit `src/data/portfolio.ts` with your information:
- Personal details (name, title, email, phone, location)
- Social media links
- Skills and technologies
- Project information
- Experience and education

### 3. Add Project Images
Place your project images in `public/images/` and reference them in the portfolio data.

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Create new project and connect your GitHub repository
4. Vercel will automatically detect Next.js and deploy

```bash
# Optional: Install Vercel CLI
npm i -g vercel

# Deploy from your local machine
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to Google Cloud / Other Hosting

1. Build: `npm run build`
2. Deploy the `.next` folder to your hosting provider
3. Ensure Node.js runtime is available

## Google SEO Optimization

### Included Optimizations
✅ Meta tags and descriptions
✅ Open Graph tags for social sharing  
✅ Mobile responsiveness
✅ Fast page load times
✅ Structured data ready

### Submit to Google Search Console

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your domain
3. Upload sitemap (auto-generated at `/sitemap.xml`)
4. Request indexing for pages

### Add Sitemap (Optional Manual Setup)

Create `src/app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yoursite.com' },
    { url: 'https://yoursite.com/about' },
    { url: 'https://yoursite.com/projects' },
    { url: 'https://yoursite.com/contact' },
  ]
}
```

## Customization

### Change Color Scheme
Edit `tailwind.config.ts` to modify colors. The portfolio uses a blue/slate color scheme by default.

### Add More Sections
1. Create new component in `src/components/`
2. Create new page in `src/app/[page]/page.tsx`
3. Add navigation link in `Header.tsx`

### Update Styling
All components use Tailwind CSS classes. Modify class names to customize appearance.

## Performance Tips

- Keep images optimized (use next/image)
- Lazy load components
- Minimize bundle size
- Use production build for deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Support & Questions

For Next.js documentation: [nextjs.org](https://nextjs.org)
For Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)

---

Built with ❤️ using Next.js & Tailwind CSS
