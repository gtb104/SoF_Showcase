# Freedom Showcase - Marching Band Competition PWA

A Progressive Web App for the Freedom Showcase Marching Band Competition. This mobile-first application provides event information, schedules, band details, and more for attendees.

## Features

- **Mobile-First Design**: Optimized for smartphone users attending the event
- **Progressive Web App**: Installable on devices with offline capabilities
- **Event Schedule**: Complete timeline of performances and activities
- **Band Information**: Details about each participating band
- **Map**: The venue with points of interest
- **Concessions Menu**: Food and beverage options with pricing
- **Sponsors Page**: Recognition of event sponsors

## Technology Stack

- **SvelteKit**: Framework for building high-performance web applications
- **Progressive Web App (PWA)**: Service workers for offline capabilities
- **GitHub Pages Deployment**: This app utilizes GitHub Pages as its hosting platform

## Project Structure

```
/
├── src/
│   ├── app.html            # Main HTML template
│   ├── routes/             # SvelteKit routes (pages)
│   │   ├── +layout.svelte  # App shell - defines common layout for all pages
│   │   ├── +page.svelte    # Home page
│   │   ├── schedule/       # Schedule page
│   │   ├── bands/          # Bands listing
│   │   │   └──[bandid]     # Band detail page
│   │   ├── map/            # Venue map
│   │   ├── concessions/    # Food and beverage information
│   │   └── sponsors/       # Sponsors recognition
│   └── lib/                # Shared libraries
│       └── stores/         # Data files
└── static/                 # Static assets
    ├── icons/              # PWA icons
    ├── images/             # School and sponsor icons
    ├── manifest.json       # PWA manifest
    └── service-worker.js   # Service worker for offline capabilities
```

## Updating Data

This application is data-driven, with all event-specific content stored in data files within the `lib/stores` directory. For future events, you should only need to update these data files rather than modifying the application code.

The following data files can be updated annually:

- `src/lib/stores/bands.js` - Information about participating bands
- `src/lib/stores/schedule.js` - Event timeline and performance schedule
- `src/lib/stores/concessions.js` - Food and beverage options with pricing
- `src/lib/stores/sponsors.js` - Sponsor information
- `src/lib/stores/eventInfo.js` - General event details (date, location, etc.)

In addition to updating the data files, you may need to add new images for participating schools or sponsors.

- `static/images/schools/` - School logos. Use the school's ID as the filename (e.g., `freedom.webp`)
- `static/images/sponsors/` - Sponsor logos. Use the sponsor's ID as the filename (e.g., `sponsor-name.webp`)
- Notice the images are in the `webp` format. If you take a jpg or png screenshot of a new school logo, use an [online](https://cloudconvert.com/webp-converter) or [commandline](https://developers.google.com/speed/webp/docs/using) converter.
  - For commanline, use `cwebp` like so: `cwebp -q 80 -resize 0 64 liberty.png -o liberty.webp `

To update the data files in future years:

1. Edit the appropriate store files with the new information
2. Add or replace school and sponsor images in their respective directories
3. Test the changes locally using `npm run dev`
4. Deploy the updated application

This approach allows for easy annual updates without requiring changes to the underlying application structure or components.

## Developing

### Requirements
- Node.js (v24)

### Local Development

1. Install requirements
2. Clone or fork the repository
3. Install dependencies:
   ```bash
   npm install
   ```

A typical workflow would be to run `npm run dev` while editing files so you can work with live reloading. Run `npm run preview` to test the production build locally.

## Deployment

When you've updated this project, you'll want to update the version number. There are two places to update.
1. `package.json`
2. `static/service-worker.js`

Update the package JSON when you make major changes, add new feature, or fix a problem.

Update the service worker when you have made changes and you want to invalidate the cache on the client. You'll most likely want to do this yearly, right before your final publish before showcase.

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Automatic Deployment:**
1. Any push to the `main` branch automatically triggers a build and deployment
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the entire process
3. The site is published to `https://gtb104.github.io/SoF_Showcase/`

**Manual Deployment:**
If you need to deploy manually, you can also build locally and verify before pushing:

```bash
npm run build
```

Then commit and push your changes to the `main` branch to trigger automatic deployment.

**Note:** Make sure GitHub Pages is enabled in your repository settings (Settings → Pages → Source: GitHub Actions).

## License

Copyright © 2025 Freedom High School Marching Band. All rights reserved.
