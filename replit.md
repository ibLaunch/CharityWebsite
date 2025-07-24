# Bundele Foundation Website

## Overview

This is a full-stack web application for the Bundele Foundation, a 501(c)(3) nonprofit organization focused on education support, senior care, and community building. The application is built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database with Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and build processes
- **UI Components**: Custom components built on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact forms and PayPal integration
- **Middleware**: Custom logging and error handling middleware

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migration**: Drizzle Kit for schema management
- **Development**: In-memory storage fallback for development

## Key Components

### Pages and Routes
- **Home Page**: Main landing page with hero section, mission, impact stories, and challenges
- **Impact Circle**: Donation program page with PayPal integration
- **Wellness/Yoga**: Bundele Wellness program with pricing and class packages
- **Contact**: Contact form with backend submission
- **FAQ**: Frequently asked questions page
- **Founder's Message**: About page with founder biography
- **Board of Directors**: Team information page

### Core Features
- **Contact Management**: Contact form submission and storage
- **PayPal Integration**: Secure donation processing with order creation and capture
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Image Carousel**: Dynamic hero image rotation
- **WhatsApp Integration**: Direct links to community WhatsApp group

### UI Components
- **Navigation**: Responsive navigation with dropdown menus
- **Hero Section**: Dynamic image carousel with call-to-action buttons
- **Cards**: Reusable card components for content organization
- **Forms**: Contact forms with validation using react-hook-form and Zod
- **Buttons**: Consistent button styling with navy color scheme

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. Data sent to `/api/contact` endpoint
4. Backend validates and stores message
5. Success/error response returned to frontend
6. Toast notification displayed to user

### Payment Flow
1. User initiates donation through PayPal button
2. Frontend calls `/order` endpoint to create PayPal order
3. PayPal SDK handles payment processing
4. Payment capture handled through `/order/:orderID/capture` endpoint
5. Success confirmation displayed to user

### Navigation Flow
- Client-side routing with Wouter
- Smooth scrolling to sections within pages
- Back navigation buttons on sub-pages
- External links for WhatsApp and Google Forms

## External Dependencies

### Payment Processing
- **PayPal SDK**: Complete payment processing integration
- **Environment**: Supports both sandbox and production modes

### Third-Party Services
- **WhatsApp**: Community group integration
- **Google Forms**: External form handling for some workflows
- **Neon Database**: PostgreSQL hosting service

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TanStack Query**: Server state management
- **React Hook Form**: Form handling and validation

## Deployment Strategy

### Build Process
- **Development**: Vite dev server with hot module replacement
- **Production**: Vite build for frontend, ESBuild for backend
- **Output**: Static files to `dist/public`, server bundle to `dist/`

### Environment Configuration
- **Development**: NODE_ENV=development with tsx for TypeScript execution
- **Production**: NODE_ENV=production with optimized builds
- **Database**: DATABASE_URL environment variable required

### Server Configuration
- **Static Files**: Served from `dist/public` in production
- **API Routes**: Express server handling `/api/*` endpoints
- **Fallback**: SPA fallback for client-side routing

## Changelog

```
Changelog:
- January 5, 2025: Updated Impact section heading from "Our impact since 2022" to "News and Featured Stories"
- January 5, 2025: Changed Master Chef of Farmwell year from 2024 to 2025
- January 5, 2025: Updated wellness hero page with sunset yoga photo and improved button visibility
- June 30, 2025: Updated wellness pricing - tripled all session rates and applied 10% discount across all packages
- June 30, 2025: Replaced Master Chef event photo with official flyer image
- June 30, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```