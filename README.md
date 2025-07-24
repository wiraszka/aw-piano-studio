# AW Piano Studio Website

A professional website for AW Piano Studio featuring instructor information, music samples, student resources, and contact functionality.

## Features

- **Modern Design**: Clean, responsive design with professional styling
- **Music Player**: Interactive audio player with piano instruction samples
- **Student Resources**: Downloadable practice materials, studio handbook, and theory worksheets
- **Contact Form**: Database-backed contact form with email notifications
- **Location Integration**: Google Maps integration for studio location
- **SEO Optimized**: Complete meta tags and Open Graph support

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: Optimized for Replit Deployments

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd aw-piano-studio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `GOOGLE_MAPS_API_KEY`: Google Maps API key for location features

Optional (for email notifications):
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`: Email server configuration

### 4. Database Setup
```bash
# Push database schema
npm run db:push
```

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5000` to view the website.

## Deployment

### Replit Deployment (Recommended)
1. Import this repository to Replit
2. Set environment variables in Replit Secrets
3. Click "Deploy" in Replit interface
4. Configure custom domain in deployment settings

### Other Platforms
1. Build the project: `npm run build`
2. Set environment variables on your hosting platform
3. Deploy the `dist` folder (frontend) and run `npm start` (backend)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `GOOGLE_MAPS_API_KEY` | Yes | Google Maps API key |
| `SMTP_HOST` | No | Email server host |
| `SMTP_USER` | No | Email username |
| `SMTP_PASS` | No | Email password |
| `NODE_ENV` | No | Environment (development/production) |

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities and constants
├── server/                 # Express backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Database operations
├── shared/                 # Shared TypeScript types
│   └── schema.ts           # Database schema and validation
└── public/                 # Static assets
```

## Contact

For questions about this website:
- **Email**: adam.wirasz@gmail.com

## License

This project is proprietary and confidential.
