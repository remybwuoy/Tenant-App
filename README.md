# TenantPulse - Property Management Platform

A modern, responsive property management platform built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, dark/light mode toggle, and comprehensive property management tools.

## 🚀 Features

### Core Functionality
- **Interactive Dashboard**: Real-time property management with dynamic data visualization
- **Theme Toggle**: Smooth switch between light and dark modes with sun/moon icons
- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Smooth Animations**: GSAP-powered transitions and micro-interactions
- **Interactive Components**: Hover effects, floating elements, and dynamic content

### Property Management Tools
- **Tenant Management**: Complete tenant profiles and communication tools
- **Maintenance Tracking**: Work order management with Kanban board view
- **Financial Dashboard**: Revenue tracking and automated billing
- **Document Management**: Secure storage for leases and important documents
- **AI-Powered Features**: Smart rent optimization and automated performance tracking

### Design System
- **Custom Color Palette**: 
  - Primary Green: `#1E9C4E`
  - Border Color: `#19ABAD`
  - Dark Mode: `#121214`
- **Consistent Components**: Standardized buttons, cards, and interactive elements
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: GSAP (GreenSock Animation Platform)
- **UI Components**: Radix UI primitives with custom styling
- **Theme Management**: next-themes for seamless mode switching
- **Icons**: Lucide React for consistent iconography

## 📦 Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/tenant-pulse.git
   cd tenant-pulse
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Project Structure

\`\`\`
tenant-pulse/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with dashboard preview
│   ├── Features.tsx      # Feature showcase cards
│   ├── Benefits.tsx      # Interactive benefits section
│   ├── Pricing.tsx       # Pricing plans and add-ons
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
│   └── images/          # Image assets
└── README.md            # Project documentation
\`\`\`

## 🎨 Component Features

### Interactive Hero Section
- **Dashboard Preview**: Animated property management interface
- **Floating Elements**: Hover effects with scale and rotation
- **Responsive Layout**: Two-column design with mobile optimization

### Dynamic Benefits Section
- **Interactive Tabs**: Click and hover to change content
- **Image Transitions**: Smooth GSAP animations between states
- **Visual Feedback**: Background highlights and progress indicators

### Pricing Section
- **Toggle Pricing**: Monthly/Annual pricing with savings display
- **Blur Effects**: Modern glass-morphism card design
- **Interactive Cards**: Hover effects with shadow and scale transforms

### Navigation System
- **Sticky Tabs**: Section navigation that follows scroll position
- **Smooth Scrolling**: Animated transitions between sections
- **Visual Indicators**: Active section highlighting

## 🌙 Theme System

### Light Mode
- Clean white backgrounds
- High contrast dark text
- Subtle shadows and borders

### Dark Mode
- Deep dark backgrounds (`#121214`)
- Light text for optimal readability
- Consistent brand color usage

### Theme Toggle
- Switch-style toggle (not button)
- Sun icon (left) and moon icon (right)
- Smooth transitions between modes

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Animation Performance**: Hardware-accelerated CSS transforms
- **Bundle Optimization**: Tree-shaking and dead code elimination

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🎭 Animation System

### GSAP Animations
- **Scroll Triggers**: Elements animate on scroll into view
- **Stagger Effects**: Sequential animation of multiple elements
- **Smooth Transitions**: Easing functions for natural movement

### CSS Transitions
- **Hover Effects**: Scale, rotate, and shadow transforms
- **Theme Switching**: Smooth color transitions
- **Interactive Feedback**: Button and card state changes

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Component Architecture**: Modular and reusable components

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **GSAP** for powerful animation capabilities
- **Radix UI** for accessible component primitives
- **Lucide** for beautiful icons

---

**Built with ❤️ by Remy**

For support or questions, please open an issue on GitHub or contact our team.
\`\`\`

```typescriptreact file="package.json"
[v0-no-op-code-block-prefix]{
  "name": "tenant-pulse",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18",
    "next-themes": "^0.2.1",
    "gsap": "^3.12.2",
    "lucide-react": "^0.294.0",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.0"
  }
}
