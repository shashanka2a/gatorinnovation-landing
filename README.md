# GatorInnovation Landing Page

A modern, production-ready Next.js landing page for GatorInnovation - a student-run development agency at the University of Florida.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags and structured data
- **Performance Optimized** with Next.js Image component
- **Modern UI Components** built with Radix UI
- **Accessibility** compliant

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.33
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gatorinnovation-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── components/               # React components
│   │   ├── ui/                   # Reusable UI components
│   │   ├── figma/                # Custom components
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Hero section
│   │   ├── OurWork.tsx           # Portfolio section
│   │   ├── Services.tsx          # Services section
│   │   ├── ContactCTA.tsx        # Contact call-to-action
│   │   └── Footer.tsx            # Footer component
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: `#6366F1` (Indigo)
- Secondary: `#3B82F6` (Blue)
- Accent: `#8B5CF6` (Purple)

### Components
All UI components are located in `app/components/ui/` and are built with Radix UI primitives for accessibility and functionality.

### Styling
The project uses Tailwind CSS with custom configurations for:
- Responsive design
- Dark mode support
- Custom animations
- Typography scales

## 🚀 Performance Features

- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: Pre-rendered pages for optimal performance
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant components

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development

### Adding New Components
1. Create component in `app/components/`
2. Add "use client" directive if using hooks or browser APIs
3. Import and use in pages

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the design system colors
- Ensure responsive design
- Test accessibility

## 📈 SEO Features

- Meta tags for social sharing
- Open Graph tags
- Twitter Card support
- Structured data
- Sitemap generation
- Robots.txt

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: hello@gatorinnovation.com
- **Website**: [gatorinnovation.com](https://gatorinnovation.com)
- **University of Florida**: Student Innovation Hub

---

Built with ❤️ by GatorInnovation at the University of Florida