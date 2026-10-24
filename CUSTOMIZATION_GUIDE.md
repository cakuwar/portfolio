# Portfolio Website - Customization Guide

Your portfolio is now configured with the **Dinesh Barri design**! This guide shows you exactly where to add your information.

## 🎨 Design Features

✅ Modern dark theme with cyan accents
✅ Smooth navigation with scroll-to-section links
✅ Hero section with profile photo
✅ About section with 6 expertise cards
✅ Skills organized by category
✅ Professional experience timeline
✅ Featured projects with category filters
✅ Education section
✅ Certifications section
✅ Contact form with social links
✅ Responsive mobile design

---

## 📝 Where to Add Your Content

### 1. **Hero Section** - `src/components/Hero.tsx`

Update these lines:

```typescript
<p className="text-cyan-400 text-lg mb-4">Hi, I am</p>
<h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
  YOUR NAME  // ← Replace with your name
</h1>
<p className="text-2xl text-slate-300 mb-4">Your Professional Title</p>
<p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
  Brief tagline about your expertise...  // ← Replace with your tagline
</p>
```

Add your profile photo:
- Save image to `public/images/profile.jpg`
- Replace the placeholder circle with actual image

```typescript
<div className="w-32 h-32 mx-auto mb-8 bg-slate-700 rounded-full flex items-center justify-center">
  <Image src="/images/profile.jpg" alt="Your Name" width={128} height={128} className="rounded-full" />
</div>
```

Update social links:
```typescript
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="mailto:your@email.com">Email</a>
```

---

### 2. **Header Navigation** - `src/components/Header.tsx`

Replace the logo:
```typescript
<Link href="/" className="text-2xl font-bold text-cyan-400">
  { "{" } YOUR NAME {"}" }  // ← Replace with your name or initials
</Link>
```

---

### 3. **About Section** - `src/components/About.tsx`

Edit the `skills` array with your 6 expertise areas:
```typescript
const skills = [
  { 
    title: 'Data Analytics', 
    description: 'Transforming raw data into actionable insights' 
  },
  { 
    title: 'Machine Learning', 
    description: 'Building predictive models and AI systems' 
  },
  // ... add 4 more skills
];
```

Update the background story:
```typescript
<p className="text-slate-300 leading-relaxed mb-4">
  Write your background story here. Include years of experience, what drives you...
</p>
```

---

### 4. **Skills & Expertise** - `src/components/Skills.tsx`

Update skill categories and technologies:
```typescript
const skillCategories = [
  {
    title: 'Programming & Analytics',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'R']
  },
  {
    title: 'Data Visualization & BI',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Plotly']
  },
  // ... add more categories
];
```

---

### 5. **Professional Experience** - `src/components/Experience.tsx`

Add your work experience:
```typescript
const experiences = [
  {
    title: 'Senior Data Analyst',
    company: 'Company Name',
    period: 'Jan 2023 - Present',
    location: 'New York, USA',
    description: 'Led analytics initiatives and delivered business insights',
    type: 'Full-time',
    logo: '🏢'
  },
  // ... add more experiences
];
```

---

### 6. **Featured Projects** - `src/components/Projects.tsx`

Add your projects:
```typescript
const projects = [
  {
    title: 'Olympic Data Analytics Dashboard',
    description: 'Interactive Power BI dashboard with 120 years of data',
    tags: ['Power BI', 'Data Visualization', 'Analytics'],
    category: 'data-viz',  // Used for filtering
    image: '📊',  // Replace with emoji or image path
    github: 'https://github.com/yourprofile/project',
    live: 'https://your-demo-link.com'
  },
  // ... add more projects
];
```

Update filter buttons:
```typescript
const filters = ['All Projects', 'Data Viz', 'ML & AI', 'Web Development'];
```

---

### 7. **Education** - `src/components/Education.tsx`

Add your education:
```typescript
const education = [
  {
    degree: 'MS in Data Science',
    school: 'University Name',
    period: '2022 - 2024',
    location: 'Dublin, Ireland',
    description: 'Comprehensive program covering ML and data analytics',
    logo: '🎓'
  },
  // ... add more education
];
```

---

### 8. **Certifications** - `src/components/Certifications.tsx`

Add your certifications:
```typescript
const certifications = [
  {
    title: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
    skills: ['Statistical Analysis', 'Machine Learning', 'Python'],
    credentialLink: 'https://coursera.org/verify/...'
  },
  // ... add more certifications
];
```

---

### 9. **Contact Section** - `src/components/Contact.tsx`

Update contact information:
```typescript
<a href="mailto:your@email.com" className="text-white text-lg hover:text-cyan-400 transition">
  your@email.com  // ← Replace
</a>

<a href="tel:+1234567890" className="text-white text-lg hover:text-cyan-400 transition">
  +1 (234) 567-8900  // ← Replace
</a>

<p className="text-white text-lg">Your City, Country</p>  // ← Replace
```

Update social links:
```typescript
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
```

---

### 10. **Footer** - `src/components/Footer.tsx`

Update footer branding:
```typescript
<Link href="/" className="text-2xl font-bold text-cyan-400 mb-4 block">
  { "{" } YOUR NAME {"}" }  // ← Replace
</Link>
<p className="text-slate-400">Your Professional Title</p>  // ← Replace
```

---

## 🖼️ Adding Project Images

Instead of emojis, use real images:

1. Save images to `public/images/` folder
2. Update the projects component:

```typescript
import Image from 'next/image';

<Image 
  src="/images/project1.jpg" 
  alt="Project 1" 
  width={400} 
  height={200} 
  className="rounded-lg"
/>
```

Or create a dedicated projects folder:
```
public/
  images/
    profile.jpg
    project1.jpg
    project2.jpg
    project3.jpg
```

---

## 🎨 Customizing Colors

The portfolio uses cyan/slate theme. To change colors:

1. Open `tailwind.config.ts`
2. Find color references:
   - `cyan-400`, `cyan-600`, `cyan-700` (accent colors)
   - `slate-950`, `slate-900`, `slate-800`, etc. (backgrounds)

Example: Change cyan to blue
```typescript
// Replace all cyan-* with blue-*
className="text-cyan-400 hover:text-cyan-700"
// Becomes
className="text-blue-400 hover:text-blue-700"
```

---

## 📱 Testing Responsiveness

The site is mobile-responsive by default. Test on:
- Desktop (1920px+)
- Tablet (768px)
- Mobile (375px)

Use browser DevTools: `F12` → Toggle device toolbar

---

## 🚀 Deployment Steps

### Deploy to Vercel (Recommended - 2 minutes)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! ✅

### Deploy to Netlify

1. Build: `npm run build`
2. Connect GitHub to [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy! ✅

---

## 🔍 Google Search Console (SEO)

1. Build and deploy your site
2. Go to [Google Search Console](https://search.google.com/search-console)
3. Add your domain
4. Verify ownership (DNS or file upload)
5. Submit sitemap
6. Request indexing for key pages

The portfolio already has:
- Meta tags and descriptions
- Open Graph tags
- Mobile responsive design
- Fast load times

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server locally
npm start

# Check for code errors
npm run lint

# Type check TypeScript
npm run type-check
```

---

## 📧 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs

---

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added profile photo
- [ ] Added all projects with images
- [ ] Updated skills and technologies
- [ ] Added work experience
- [ ] Added education details
- [ ] Added certifications
- [ ] Updated social media links
- [ ] Updated contact email and phone
- [ ] Tested on mobile devices
- [ ] Fixed any broken links
- [ ] Ready to deploy! 🚀

---

**Your portfolio is ready to go!** Customize the placeholders, add your content, and deploy to the world! 🌍

