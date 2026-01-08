# AmrAstha Marketing Website

A complete, production-ready marketing website for AmrAstha (আমার আস্থা) - a portable trust and reputation platform for Bangladesh.

## Overview

AmrAstha helps buyers verify sellers/workers/tutors and helps honest sellers/workers build trust that follows them everywhere. This marketing website explains the problem, solution, and collects leads for early access.

## Features

- ✅ **Complete Website**: 10+ pages with comprehensive content
- ✅ **Modern Design**: Clean, professional SaaS-style design
- ✅ **Mobile-First**: Responsive design optimized for Bangladesh audience
- ✅ **Dark Mode**: Theme toggle functionality
- ✅ **Forms**: Working waitlist and contact forms with API routes
- ✅ **SEO Optimized**: Meta tags, OpenGraph, sitemap, structured data
- ✅ **Performance**: Next.js 14 with App Router, optimized images
- ✅ **Security**: Spam protection, input validation
- ✅ **Accessibility**: Semantic HTML, proper contrast ratios

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design system
- **Images**: next/image optimization
- **Forms**: API routes with JSON storage
- **Theme**: next-themes for dark mode

## Project Structure

```
amrastha-marketing/
├── app/                          # Next.js App Router pages
│   ├── api/                     # API routes
│   │   ├── waitlist/           # Waitlist form submission
│   │   └── contact/            # Contact form submission
│   ├── blog/                   # Blog pages
│   ├── how-it-works/          # How it works page
│   ├── use-cases/             # Use cases page
│   ├── safety/               # Safety & anti-fraud page
│   ├── pricing/              # Pricing page
│   ├── verify/               # Verify demo page
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── terms/                # Terms of service
│   ├── privacy/              # Privacy policy
│   ├── layout.tsx            # Root layout with navbar/footer
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/                 # React components
│   ├── ui/                    # UI components
│   │   ├── button.tsx
│   │   ├── feature-grid.tsx
│   │   ├── faq-accordion.tsx
│   │   ├── icons.tsx
│   │   └── testimonial-cards.tsx
│   ├── layout/               # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/             # Page sections
│   │   ├── cta-section.tsx
│   │   └── waitlist-form.tsx
│   └── providers/            # Context providers
│       └── theme-provider.tsx
├── lib/                      # Utility libraries
├── public/                   # Static assets
│   ├── images/              # Generated images (placeholder)
│   └── icons/               # SVG icons
├── assets/                  # Assets and documentation
│   └── prompts.md          # AI image generation prompts
└── data/                    # Local data storage
    ├── waitlist-data.json   # Waitlist submissions
    └── contact-data.json    # Contact form submissions
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amrastha-marketing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=https://amrastha.com
```

### Customization

- **Colors**: Update the Tailwind config in `tailwind.config.js`
- **Content**: Edit the copy in each page file
- **Images**: Replace placeholder images in `/public/images/`
- **Styling**: Modify global styles in `app/globals.css`

## Pages Overview

1. **Home** (`/`) - Main landing page with hero, features, testimonials
2. **How it Works** (`/how-it-works`) - 3-step process explanation
3. **Use Cases** (`/use-cases`) - Different scenarios and examples
4. **Safety** (`/safety`) - Anti-fraud measures and trust explanations
5. **Pricing** (`/pricing`) - Pricing plans with "coming soon" notice
6. **Verify Demo** (`/verify`) - Interactive demo of profile verification
7. **Blog** (`/blog`) - Placeholder blog with sample posts
8. **About** (`/about`) - Company mission, values, team
9. **Contact** (`/contact`) - Contact form and waitlist signup
10. **Terms** (`/terms`) - Terms of service
11. **Privacy** (`/privacy`) - Privacy policy

## Key Features

### Forms

- **Waitlist Form**: Collects name, phone, email, role, city, message
- **Contact Form**: General contact form with spam protection
- **Honeypot Protection**: Hidden field to catch spam bots
- **Validation**: Client and server-side validation
- **Storage**: JSON file storage (easily replaceable with database)

### Design System

- **Colors**: Primary (blue), Trust (green), semantic colors
- **Typography**: Inter font family
- **Components**: Button, Card, FeatureGrid, FAQAccordion
- **Spacing**: Consistent 8px grid system
- **Responsive**: Mobile-first with breakpoints

### SEO & Performance

- **Meta Tags**: Dynamic meta tags per page
- **OpenGraph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Structured Data**: JSON-LD for organization and product
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting by route

### Security

- **Input Validation**: Server-side validation for all forms
- **Spam Protection**: Honeypot field implementation
- **XSS Protection**: Built into Next.js React rendering
- **HTTPS**: Recommended for production deployment

## AI Image Generation

The project includes AI image prompts in `/assets/prompts.md` for generating:

1. Hero section illustration
2. Problem section graphics
3. How it works process illustration
4. Safety and security graphics
5. Use cases worker illustrations
6. Footer background pattern

Generate these images using your preferred AI image generator and place them in `/public/images/`.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on each push

### Other Platforms

- **Netlify**: Build from GitHub repository
- **AWS Amplify**: Connect to code repository
- **Self-hosted**: Build and serve static files

### Environment Setup

For production deployment:

1. Set environment variables
2. Configure custom domain
3. Set up SSL certificate
4. Configure analytics (optional)

## Analytics Integration

The project includes stub analytics functions ready for integration:

```typescript
// lib/analytics.ts
export const trackEvent = (event: string, properties?: object) => {
  // Add your analytics provider here
  console.log('Analytics event:', event, properties)
}
```

## Maintenance

### Regular Tasks

- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor form submissions in `/data/`
- Update content as needed

### Content Management

- Forms data stored in JSON files (easily migratable to database)
- Static content in page components
- Images in `/public/images/` directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues:

- Email: hello@amrastha.com
- Documentation: Check component comments
- Issues: Report on GitHub

## License

This project is proprietary software created for AmrAstha. All rights reserved.

---

**AmrAstha (আমার আস্থা)** - Building portable trust for Bangladesh