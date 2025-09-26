# Freedom Showcase - Marching Band Competition PWA

A Progressive Web App for the Freedom Showcase Marching Band Competition. This mobile-first application provides event information, schedules, band details, and more for attendees.

## Features

- **Mobile-First Design**: Optimized for smartphone users attending the event
- **Progressive Web App**: Installable on devices with offline capabilities
- **Event Schedule**: Complete timeline of performances and activities
- **Band Information**: Details about each participating band
- **Interactive Map**: Navigate the venue with points of interest
- **Concessions Menu**: Food and beverage options with pricing
- **Sponsors Page**: Recognition of event sponsors

## Technology Stack

- **SvelteKit**: Framework for building high-performance web applications
- **Progressive Web App (PWA)**: Service workers for offline capabilities
- **Vercel Deployment**: Optimized for Vercel hosting platform

## Project Structure

```
/
├── src/
│   ├── app.html            # Main HTML template
│   ├── routes/             # SvelteKit routes (pages)
│   │   ├── +page.svelte    # Home page
│   │   ├── schedule/       # Schedule page
│   │   ├── bands/          # Bands listing and detail pages
│   │   ├── map/            # Venue map
│   │   ├── concessions/    # Food and beverage information
│   │   └── sponsors/       # Sponsors recognition
│   └── lib/                # Shared libraries
│       ├── components/     # Reusable Svelte components
│       └── stores/         # Svelte stores for state management
├── static/                 # Static assets
│   ├── icons/              # PWA icons
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Service worker for offline capabilities
└── vercel.json             # Vercel deployment configuration
```

## Developing

### Requirements
- Node.js (v24)
- Vercel CLI (v48)

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

A typical workflow would be:

- During development: Run `npm run dev` to work with live reloading
- When ready to deploy: Run `npm run build` to create optimized production files
- Before deploying: Run `npm run preview` to test the production build locally
- Deploy to vercel

## Deployment

This project is configured for deployment on Vercel. You have two options for deploying to vercel.

1. You can link the GitHub repo to vercel from vercel's web interface. When you do this, any time you push changes to GitHub, vercel will redeploy those assets.
2. You can deploy directly from the commandline. After you've logged into vercel, `vercel login`, run the following two commands:

```bash
npm run build
vercel
```

## License

Copyright © 2025 Freedom High School Marching Band. All rights reserved.
