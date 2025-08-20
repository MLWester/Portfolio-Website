## Mason Wester – Developer Portfolio

Modern, responsive portfolio showcasing my projects and skills across full‑stack web development. Built with React and Tailwind CSS, animated with Framer Motion, and structured for fast local development and simple deployment.

## About Me

I’m Mason Wester, a full‑stack developer focused on building production‑ready web applications with clean UX, robust data models, and reliable deployments. I enjoy shipping useful software and refining performance, accessibility, and developer experience along the way.

## Portfolio Features

- Responsive, accessible UI built with Tailwind CSS
- Smooth page and element animations powered by Framer Motion
- Project cards with tech badges, GitHub links, and live demos
- Media‑rich modals supporting videos and screenshots
- Embedded PDF Resume viewer with one‑click download
- Single‑Page App routing with deep‑link support

## Tech Stack (Portfolio)

- React 18 with React Router 6
- Tailwind CSS 3, PostCSS, Autoprefixer
- Framer Motion, React Icons
- tsparticles/react‑tsparticles for particle background effects
- Create React App build tooling (react‑scripts)
- Node 18
- Deployment: Netlify (SPA redirects via `netlify.toml`)

## Projects Showcase

### TalentScope AI – Smart Resume Analyzer
- AI‑powered resume analysis, JD matching, ATS checks, PDF‑to‑image processing, and modern UI/UX.
- Tech: React 19, React Router 7, TypeScript, Tailwind, Zustand, Vite, pdfjs‑dist, react‑dropzone, Docker, Puter
- Live: https://puter.com/app/talentscope-ai
- Repo: https://github.com/MLWester/resume-analyzer

### Dwellify – Real Estate Landing + Signup
- Modern landing + signup with smooth cross‑route navigation, responsive carousel, polished animations, and frosted‑glass mobile menu.
- Tech: React 19, Vite 7, Tailwind CSS 3, Motion, React Router 6, React Toastify, ESLint
- Live: https://dwellifyrealestate.netlify.app
- Repo: https://github.com/MLWester/Dwellify---Real-Estate-App

### GetFit – Exercise App
- Discover exercises, filter by body part/equipment, view details, and watch related videos via RapidAPI integrations.
- Tech: React 18, React Router 6, Material UI, RapidAPI (ExerciseDB, YouTube), REST APIs, Netlify
- Live: https://mlw-getfit.netlify.app/
- Repo: https://github.com/MLWester/Exercise-App

### DevWithMe – Full Stack Developer Collaboration Platform
- Developers can create profiles, showcase skills, start/join projects, and manage tasks with Kanban boards and role‑based access.
- Tech: ASP.NET Core (.NET 9), Razor Pages, EF Core, SQL Server, Azure, Tailwind CSS, ASP.NET Identity, GitHub Actions
- Live: https://devwithme-app-afdsctcwa2gracha.westcentralus-01.azurewebsites.net/
- Repo: https://github.com/MLWester/DevWithMe

### RaceLens – Sim Racing Telemetry Visualizer
- Analyze iRacing telemetry: multi‑lap comparison, tire wear simulation, driver input consistency, and rich charts.
- Tech: React, Tailwind CSS, FastAPI, Recharts, Python, Data Analysis
- Live: https://bright-maamoul-e3e9ab.netlify.app/
- Repo: https://github.com/MLWester/RaceLens

### FitPro – Gym Membership Manager
- Manage members and plans with search/sort, validation, and clean Razor UI.
- Tech: ASP.NET Core, Razor Pages, EF Core, Bootstrap, SQL Server
- Repo: https://github.com/MLWester/FitPro-Gym-Membership-Manager

### Hospital Database Management System
- Comprehensive SQL solution supporting registration, billing, medical records, and staff coordination with HIPAA‑minded design.
- Asset: public/Hospital-DB-Project.pdf (viewable in the site’s Projects page)

### Choose Your Own Adventure (CYOA) Game
- C# console text adventure with OOP design, multilingual messaging, combat logic, and unit‑tested components.
- Repo: https://github.com/MLWester/Create-Your-Own-Adventure-Game

## Getting Started (Local)

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm start
```

3) Open http://localhost:3000

Build for production
```bash
npm run build
```

## Deployment

This project is configured for Netlify. Connect your repository and use:
- Build command: `npm run build`
- Publish directory: `build`
- SPA redirects are configured in `netlify.toml`

## Folder Structure

- `src/components/` – Reusable components (cards, modals, particle background, etc.)
- `src/pages/` – `Home`, `Projects`, `Skills`, `Resume`, `Contact`
- `public/` – Static assets (images, PDFs, videos)

## Contact

- GitHub: https://github.com/MLWester
- Resume (PDF): `/public/images/Wester_Resume_2025.pdf` (also embedded on the Resume page)

---

Thanks for taking a look! If you’re interested in collaborating or discussing a role, feel free to reach out.