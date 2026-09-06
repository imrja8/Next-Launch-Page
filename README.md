<div align="center">
  <h3>Next.js Coming Soon Template</h3>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://i.ibb.co/TB9QtLWZ/Screenshot-2026-09-06-at-08-50-38.png">
    <source media="(prefers-color-scheme: light)" srcset="https://i.ibb.co/dsyqngk7/Screenshot-2026-09-06-at-08-50-27.png">
    <img alt="Next.js Coming Soon Template" src="https://i.ibb.co/dsyqngk7/Screenshot-2026-09-06-at-08-50-27.png" width="100%">
  </picture>
</div>

A highly optimized, production-ready coming soon page built with **Next.js 15+**, **Tailwind CSS**, and **shadcn/ui**. Designed to be deployed instantly with zero code changes required—everything is driven by your environment variables.

### Features

- **Zero-Config Content**: Update headings, copy, and SEO metadata purely via `.env`. Unused variables are gracefully hidden from the UI.
- **Dynamic Countdown**: Automatic time calculation that vanishes seamlessly if a target date is omitted.
- **Built-in Theming**: Out-of-the-box light and dark mode support.
- **Docker-Ready**: Multi-stage `Dockerfile` leveraging Next.js standalone output for minimal image size.

### Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui & Radix Primitives
- **Icons**: Remix Icon

### Quick Start

#### 1. Install Dependencies
Ensure you have Node.js 18+ installed.
```bash
npm install
```

#### 2. Environment Setup
Create a `.env` file at the root of the project. Use the following as a template:

```env
# Page Content
TAGLINE="Coming Soon"
HEADING="The countdown to our biggest launch yet"
DESCRIPTION="We go live the moment the timer hits zero."
TARGET_DATE="2026-12-31T23:59:59.000Z"

# SEO & Metadata
APP_NAME="My App"
APP_DESC="My App Description"
APP_FAVICON_URL="https://example.com/favicon.ico"
APP_OG_IMAGE_URL="https://example.com/og-image.jpg"
```

> [!TIP]
> **Local Assets:** If you don't have your OG Image or Favicon hosted externally, you can place them directly into the `/public` folder of this repository. Then, simply reference them using your future domain (e.g., `https://<your-future-domain.com>/favicon.ico` or `https://<your-future-domain.com>/og-image.jpg`).
>
> **Optimization:** For faster metadata image previews on social platforms, compress your OG image to be less than **300 KB** and your Favicon to be **50 KB** at maximum.

#### 3. Run/Deploy
The development server is configured to run on port `8888`.

### Local Deployment

```bash
# Install dependencies
npm install

# Run the project (dev mode)
npm run dev

# Build the project for production
npm run build

# Run the project in production
npm start
```
Navigate to [http://localhost:8888](http://localhost:8888) to preview your site.

### Docker Deployment

The included `Dockerfile` uses a lean `node:20-bookworm-slim` base and exposes port `8888`, making it perfect for running behind a reverse proxy.

```bash
# Build the image
docker build -t coming-soon-page .

# Run the container with your environment variables
docker run -p 8888:8888 --env-file .env coming-soon-page
```
