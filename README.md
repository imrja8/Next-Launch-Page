<div align="center">
  <h3>Next.js Coming Soon Template</h3>
  <p align="center">
    <img width="1920" height="1080" alt="NLP-PREVIEW" src="https://github.com/user-attachments/assets/3ef2e579-33ea-426c-bd1a-2b20d5be7f1f" />
  </p>
</div>

A highly optimized, production-ready coming soon page built with **Next.js 15+**, **Tailwind CSS**, and **Framer Motion**. Designed to be deployed instantly with zero code changes required—everything is driven by your environment variables.

### Features

- **Zero-Config Content**: Update headings, copy, and SEO metadata purely via `.env`. Unused variables are gracefully hidden from the UI.
- **Dynamic Countdown**: Automatic time calculation that vanishes seamlessly if a target date is omitted.
- **Built-in Theming**: Dynamic theme selection across 5 distinct colors.
- **Adjustable Corners**: Configure UI elements' roundness perfectly without CSS hacks (`sharp`, `normal`, `curved`).
- **Dynamic Icons**: Select your preferred tagline icon right from the `.env` file.
- **Docker-Ready**: Multi-stage `Dockerfile` leveraging Next.js standalone output for minimal image size.

### Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui & Radix Primitives
- **Icons**: Remix Icon

### Quick Start

#### 1. Clone the Repository
```bash
git clone https://github.com/imrja8/Next-Launch-Page.git
cd Next-Launch-Page
```

#### 2. Environment Setup
Create your environment file by copying the provided example:

```bash
cp .env.example .env
```

Open the newly created `.env` file in your editor and configure your application. The file contains clear comments explaining every option, including themes, corners, icons, and text content.

> [!TIP]
> **Local Assets:** If you don't have your OG Image or Favicon hosted externally, you can place them directly into the `/public` folder of this repository. Then, simply reference them using your future domain (e.g., `https://<your-future-domain.com>/favicon.ico` or `https://<your-future-domain.com>/og-image.jpg`).
>
> **Optimization:** For faster metadata image previews on social platforms, compress your OG image to be less than **300 KB** and your Favicon to be **50 KB** at maximum.

#### 3. Run/Deploy

**Option A: Local Deployment**  
Ensure you have Node.js 18+ installed.

```bash
# Install dependencies
npm install

# Run the project (dev mode)
npm run dev

# Or build and run for production
npm run build
npm start
```
Navigate to [http://localhost:8888](http://localhost:8888) to preview your site.

**Option B: Docker Deployment**  
The included `Dockerfile` uses a lean `node:20-bookworm-slim` base and exposes port `8888`, making it perfect for running behind a reverse proxy.

```bash
# Build the image
docker build -t coming-soon-page .

# Run the container with your environment variables
docker run -p 8888:8888 --env-file .env coming-soon-page
```
