# AW Music Studios Website

## Overview

AW Music Studios is a full-stack web application for a piano instruction studio. The application provides a modern, professional website showcasing the studio's services, instructor information, music samples, and includes a contact form for potential students. Built with React frontend, Express backend, and PostgreSQL database, the application uses modern web technologies and follows a clean architectural pattern.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Theme System**: Next-themes for dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Email**: Nodemailer for contact form notifications
- **Development**: Hot reload with Vite middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection Pooling**: Neon serverless connection pooling
- **Tables**: Users table and contact submissions table

## Key Components

### Frontend Components
- **Layout Components**: Header with responsive navigation, Footer with social links
- **Content Sections**: Hero, About, Music player, Gallery, Testimonials, Location, Resources, Contact
- **Interactive Elements**: Audio player with custom controls, image gallery, testimonials carousel
- **Forms**: Contact form with validation and submission handling
- **UI System**: Complete shadcn/ui component library integration

### Backend Services
- **Contact API**: Handles form submissions with validation and email notifications
- **Database Layer**: Storage abstraction with CRUD operations
- **Middleware**: Request logging, error handling, CORS support
- **Static Serving**: Vite integration for development, static file serving for production

### Database Schema
- **Users**: Basic user authentication structure (id, username, password)
- **Contact Submissions**: Contact form data storage (name, email, phone, subject, message, preferences, timestamp)
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **Form Submission**: Contact form data validated client-side with Zod
3. **API Call**: TanStack Query sends validated data to Express backend
4. **Server Validation**: Backend re-validates data using shared Zod schemas
5. **Database Storage**: Drizzle ORM stores contact submission in PostgreSQL
6. **Email Notification**: Nodemailer sends notification email (when configured)
7. **Response**: Success/error response sent back to client
8. **UI Update**: Toast notification shown to user

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Radix UI components
- **Database**: Neon PostgreSQL, Drizzle ORM
- **Communication**: Nodemailer for email notifications
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS, class-variance-authority
- **State Management**: TanStack Query
- **Date Handling**: date-fns utility library

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Development**: tsx for TypeScript execution
- **Replit Integration**: Replit-specific Vite plugins

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts both frontend and backend with hot reload
- **Port**: Application runs on port 5000
- **Database**: Connected to Neon PostgreSQL via DATABASE_URL environment variable
- **Hot Reload**: Vite middleware integrated with Express for seamless development

### Production Build
- **Frontend**: `vite build` creates optimized static assets
- **Backend**: `esbuild` bundles server code for Node.js execution
- **Static Serving**: Express serves built frontend assets
- **Database**: Same PostgreSQL connection for production
- **Deployment**: Configured for Replit autoscale deployment

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **SMTP_***: Email configuration variables (optional)
- **NODE_ENV**: Environment detection for development/production modes

## Deployment Information

### Custom Domain
- **Domain**: awpianostudio.com
- **Status**: Registered and ready for deployment
- **Deployment Platform**: Replit Deployments

### SEO Optimization
- Complete meta tags with location-specific keywords
- Open Graph and Twitter card support
- Canonical URL configuration
- Custom favicon with piano theme

## Changelog

Changelog:
- July 25, 2025: Prepared codebase for GitHub deployment
  - Added comprehensive README.md with setup instructions
  - Created .env.example file with all required environment variables  
  - Updated .gitignore to exclude sensitive files (.env, logs, IDE files)
  - Updated logo throughout website to new AW Piano Studio branding
  - Fixed hero section button hover effects for better readability
  - Removed subject field from contact form for streamlined design
  - Fixed location section "Get Directions" icon
  - Changed "Contact Us" to "Contact" in section title
- July 9, 2025: Updated bio and contact information
  - Rewrote instructor bio to reflect authentic 20+ years experience and Royal Conservatory training
  - Changed contact email from info@awmusicstudios.com to adam.wirasz@gmail.com throughout website
  - Updated section title from "AW Music Studios" to "AW Piano Studio"
  - Removed all social media buttons (Facebook, Instagram, YouTube, Twitter) from contact section
  - Replaced broken resource links with working alternatives (Vancouver Symphony Orchestra, Music Teachers National Association)
  - Fixed instructor name to "Adam Wiraszka" throughout all documents
  - Created comprehensive student resources (Practice Journal, Studio Handbook, Theory Worksheets)
  - Added collapsible sections to Theory Worksheets with complete answer key
  - Removed testimonials section temporarily for future updates
- June 26, 2025: Prepared website for deployment at awpianostudio.com
  - Added comprehensive SEO meta tags
  - Created custom piano-themed favicon
  - Updated canonical URLs for custom domain
  - Configured Open Graph and Twitter card metadata
- June 25, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.