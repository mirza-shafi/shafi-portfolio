# Mirza Md. Shafi Uddin — Personal Portfolio

A modern, high-performance personal portfolio website showcasing my skills, projects, and professional experience as an AI Engineer & Full-Stack Developer. Built with **Astro** and **React**, using an Island Architecture for near-instant page loads and top-tier Lighthouse scores.

### 🚀 Live Demo

**[mirzashafi.com](https://mirzashafi.com/)** — Deployed on Vercel

---

## ✨ Features

- **Island Architecture (Astro):** Static HTML is served instantly; React only loads for interactive components (carousel, contact form, theme toggle).
- **Cloudflare R2 Storage:** All project images and videos are hosted on Cloudflare R2 object storage to ensure lightning-fast asset delivery and zero bandwidth strain on the main hosting server.
- **Zero JS by default:** Navbar, Hero, Experience, and marquee sections ship as pure HTML — no JavaScript overhead.
- **Dark / Light Theme:** Persisted in `localStorage` with flash-of-wrong-theme prevention via an inline script.
- **3D Coverflow Carousel:** Interactive project showcase with smooth 3D perspective animations.
- **Contact Form:** EmailJS-powered form with service checkboxes — sends directly to inbox, no backend needed.
- **Visitor Counter:** Live view counter via CounterAPI, proxied through Vercel to avoid CORS.
- **Scroll Animations:** Elements fade in as you scroll using the Intersection Observer API.
- **Fully Responsive:** Optimized for all screen sizes — mobile, tablet, and desktop.
- **SEO Ready:** Proper meta tags, semantic HTML, and single `<h1>` per page.

---

## 🌟 Featured Projects

Here are some of the flagship projects featured in this portfolio, demonstrating expertise across AI, ML, RAG, and Full-Stack Engineering:

- **AskMyDocs:** Production-grade RAG system combining hybrid retrieval, cross-encoder reranking, and Groq Llama-3.3-70B with a Ragas evaluation CI gate.
- **AutofyBit RAG Chatbot:** Production RAG chatbot utilizing pgvector semantic search and GPT-4o-mini to generate answers strictly grounded in official documentation.
- **Heart Disease Prediction API:** Production-grade FastAPI service serving a Random Forest classifier with SHAP explanations, Celery/Redis async batching, and Pytest integration.
- **Virtual Try-On System:** CV pipeline for virtual clothing try-on via text prompts, using Segformer for semantic segmentation and Stable Diffusion Inpainting.
- **Hospital RAG Assistant:** Patient-facing AI assistant grounded in live hospital data using parent-child RAG with MongoDB Atlas Vector Search and Llama-3.1.
- **Local SLM Benchmark Suite:** Full-stack privacy-first benchmarking suite for evaluating and comparing small language models (SLMs) on local hardware.
- **TaskFlow:** Full-stack productivity suite featuring task management, habit tracking, and team workspaces built with FastAPI, React, and MongoDB.
- **StuRent:** Student rental marketplace for housing and equipment built with Django REST Framework, React, and PostgreSQL.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **Astro** | Static site framework — renders pages to HTML at build time |
| **React** | Interactive UI islands (carousel, form, theme toggle, visitor counter) |
| **Vanilla CSS** | All styling — no utility framework, full custom design system |
| **Cloudflare R2** | Global object storage for all media assets (images, videos) to reduce server load |
| **EmailJS** | Contact form email delivery (no backend required) |
| **CounterAPI** | Visitor view counter |
| **Vercel** | Hosting & deployment with API proxy rewrites |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Carousel.jsx       ← React island — 3D project showcase
│   ├── ContactForm.jsx    ← React island — EmailJS contact form
│   ├── ThemeToggle.jsx    ← React island — dark/light switcher
│   └── VisitorCounter.jsx ← React island — live view counter
├── layouts/
│   └── Layout.astro       ← Base HTML shell, SEO meta, fonts
├── pages/
│   └── index.astro        ← Main page (static HTML + island slots)
└── styles/
    └── global.css         ← Full design system & component styles
```

---

## ⚙️ Setup & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mirza-shafi/shafi-portfolio.git
   cd shafi-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   Available at `http://localhost:4321`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Outputs optimized static files to `dist/` and `.vercel/output/`.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## ☁️ Vercel Deployment

The project is deployed as a **static site** on Vercel via the `@astrojs/vercel` adapter.

**`vercel.json`** — API proxy to avoid CORS on the visitor counter:
```json
{
  "rewrites": [
    {
      "source": "/api/counter/:path*",
      "destination": "https://api.counterapi.dev/v1/:path*"
    }
  ]
}
```

Vercel auto-detects Astro from `astro.config.mjs`. No changes are needed in the Vercel dashboard after deployment — just push to GitHub and it redeploys automatically.

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/mirza-shafi](https://linkedin.com/in/mirza-shafi)
- **GitHub:** [github.com/mirza-shafi](https://github.com/mirza-shafi)
- **Email:** [mirza.md.shafi.uddin@gmail.com](mailto:mirza.md.shafi.uddin@gmail.com)
- **WhatsApp:** [+880 1938 820835](https://wa.me/8801938820835)
