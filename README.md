# Cybersecurity Portfolio

A modern, expert-level cybersecurity portfolio website built with React, Vite, Tailwind CSS, and shadcn/ui components.

## Features

- **Hero Section**: Eye-catching introduction with animated shield icon and gradient text
- **Core Competencies**: 8 skill cards showcasing cybersecurity expertise
- **Featured Projects**: 13 real-world security projects with CVSS scores and GitHub links
- **Education & Experience**: Academic background and professional experience
- **Technical Proficiency**: Comprehensive list of security tools and technologies
- **Contact Section**: Contact form and social media links
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Dark theme with red accent colors and smooth animations

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icon library
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
cybersecurity-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Hero.tsx     # Hero section
│   │   │   ├── Skills.tsx   # Skills section
│   │   │   ├── Projects.tsx # Projects section
│   │   │   ├── Certifications.tsx # Education & Experience
│   │   │   └── Contact.tsx  # Contact section
│   │   └── App.tsx          # Main app component
│   ├── styles/
│   │   ├── fonts.css        # Font imports
│   │   ├── tailwind.css     # Tailwind configuration
│   │   ├── theme.css        # Theme variables
│   │   └── index.css        # Main stylesheet
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── postcss.config.mjs
```

## Customization

### Updating Content

- **Hero**: Edit `src/app/components/Hero.tsx`
- **Skills**: Modify the `skills` array in `src/app/components/Skills.tsx`
- **Projects**: Update the `projects` array in `src/app/components/Projects.tsx`
- **Education**: Edit the `education` array in `src/app/components/Certifications.tsx`
- **Experience**: Modify the `experience` array in `src/app/components/Certifications.tsx`
- **Contact**: Update contact information in `src/app/components/Contact.tsx`

### Styling

The theme uses Tailwind CSS with custom CSS variables defined in `src/styles/theme.css`. You can customize colors, spacing, and other design tokens by modifying the CSS variables.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use the GitHub Actions workflow

## Performance

- Optimized build with Vite
- Tree-shaking for minimal bundle size
- Lazy loading for better initial load time
- CSS purging with Tailwind CSS

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios for readability
- Responsive design for all screen sizes

## License

© 2026 Greg Ochieng. All rights reserved.
