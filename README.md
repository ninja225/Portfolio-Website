# Modern Portfolio Website

A stunning, modern portfolio website built with React and Vite, featuring a sleek design with glassmorphism effects, smooth animations, and responsive layouts.

## ✨ Features

- **Modern UI/UX Design**

  - Glassmorphism effects with backdrop filters
  - Gradient animations and transitions
  - Smooth scrolling and page transitions
  - Responsive design for all devices

- **Interactive Components**

  - Dynamic skill progress bars
  - Animated statistics counters
  - Filterable project gallery
  - Contact form with validation

- **Performance Optimized**
  - Built with Vite for fast development and builds
  - Optimized asset loading
  - Smooth animations with minimal impact on performance

## 🚀 Tech Stack

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Styled Components
- **Icons**: React Icons
- **Animations**: CSS Animations & Transitions
- **Routing**: React Router DOM
- **Code Quality**: ESLint

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm v7+ or yarn v1.22+ or pnpm v6+
- Git

### Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn

   # Using pnpm
   pnpm install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration

### Development

1. Start the development server:

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

2. Open http://localhost:5173 in your browser

### Production Build

1. Create production build:

   ```bash
   # Using npm
   npm run build

   # Using yarn
   yarn build

   # Using pnpm
   pnpm build
   ```

2. Preview production build:

   ```bash
   # Using npm
   npm run preview

   # Using yarn
   yarn preview

   # Using pnpm
   pnpm preview
   ```

## 🛠 Development

### Project Structure

```
src/
  ├── components/     # React components
  │   ├── About/      # About section
  │   ├── Contact/    # Contact form
  │   ├── Home/       # Hero section
  │   ├── Navbar/     # Navigation
  │   ├── Projects/   # Project gallery
  │   └── Skills/     # Skills section
  ├── assets/         # Images and SVGs
  ├── App.jsx         # Main app component
  └── main.jsx        # Entry point
```

### Customization

1. **Colors and Theme**

   - Edit gradient colors in component styles
   - Modify the primary color (#01bf71) in styled components
   - Adjust glassmorphism effects (background blur and opacity)

2. **Content**

   - Update personal information in components
   - Modify project details in Projects component
   - Adjust skill levels in Skills component
   - Edit social media links in Contact component

3. **Styling**
   - Components use Styled Components for styling
   - Modify component styles in their respective files
   - Global styles are in index.css

## 🌐 Deployment

### Free Hosting Options

1. **GitHub Pages**

   ```bash
   # Install gh-pages package
   npm install -D gh-pages

   # Add deploy script to package.json
   # "deploy": "gh-pages -d dist"

   # Build and deploy
   npm run build
   npm run deploy
   ```

   Configure in repository settings:

   - Go to Settings > Pages
   - Set branch to gh-pages
   - Set folder to / (root)

2. **Netlify**

   Manual deployment:

   - Create new site from Git
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Node version: `16`
   - Environment variables:
     - Add from your `.env` file

   Using Netlify CLI:

   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Initialize project
   netlify init

   # Deploy
   netlify deploy --prod
   ```

3. **Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Login: `vercel login`
   - Deploy: `vercel --prod`
   - Configure project settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

### Paid Hosting Options

1. **DigitalOcean**

   Using App Platform:

   - Create new app
   - Connect GitHub repository
   - Configure build:
     - Environment: Node.js
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Set environment variables
   - Choose plan and deploy

2. **AWS Amplify**
   - Install Amplify CLI: `npm install -g @aws-amplify/cli`
   - Configure Amplify: `amplify configure`
   - Initialize project: `amplify init`
   - Add hosting: `amplify add hosting`
   - Push changes: `amplify push`
   - Publish: `amplify publish`

## 🔧 Troubleshooting

1. **Development Server Issues**

   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall
   - Check for port conflicts

2. **Build Problems**

   - Ensure all dependencies are installed
   - Check for environment variables
   - Verify import paths

3. **Styling Issues**
   - Clear browser cache
   - Check styled-components installation
   - Verify CSS syntax

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For support, email marketkoo@mail.ru or open an issue in the repository.
