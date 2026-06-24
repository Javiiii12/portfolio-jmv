# OpenCode Agent Instructions — Portfolio Profesional - Ciberseguridad & Full Stack

This file provides high-signal context for future OpenCode/AI agent sessions to prevent regressions, ensure consistent development practices, and maintain the project's "Secure by Design" principles.

## 🛠 Project Architecture & Core Technologies

*   **Framework:** Angular 20+ (using Signals, Zoneless architecture).
*   **Language:** TypeScript (strict mode enabled per `tsconfig.json`).
*   **Styling:** Tailwind CSS (configured for `darkMode: 'class'`, scans `src/**/*.{html,ts}`).
*   **Application Type:** 100% static Single Page Application (SPA), deployed to GitHub Pages.
*   **Data Layer:** Consumes static `.json` files from the `/public` folder via Angular's HttpClient. No traditional backend.
*   **Entry Points:**
    *   `src/main.ts`: Application bootstrap.
    *   `src/app/app.config.ts`: Global application configuration (e.g., router providers).
    *   `src/app/app.routes.ts`: Defines application routes with hash location strategy and in-memory scrolling.

## 🚀 Development & Build Commands

*   **Start Dev Server:** `npm start` or `ng serve`
*   **Build Project:** `npm run build` or `ng build` (uses `@angular/build:application`)
*   **Run Tests:** `npm test` or `ng test` (uses `@angular/build:unit-test` via Vitest)
*   **Deploy to GitHub Pages:** `npm run deploy` (uses `angular-cli-ghpages:deploy`)

## 🔒 Security & Best Practices (Secure by Design)

*   **Strict Sanitization:** Always use Angular's `DomSanitizer` for any dynamically rendered HTML content to prevent XSS.
*   **Secure Rendering:** Leverage Angular's Control Flow (`@if`, `@for`) for conditional rendering and loops to minimize security risks. Avoid direct DOM manipulation where Angular alternatives exist.
*   **CSP Readiness:** Avoid injecting inline styles or scripts. The project is designed to be compatible with restrictive Content Security Policies.

## ⚠️ Critical Constraints & Conventions

*   **Routing:** All navigation must utilize Angular's router and the defined `src/app/app.routes.ts`. Custom routes should extend this file.
*   **Asset Management:** Static assets (images, `.json` data, PDFs) are served from the `/public` directory. Ensure new assets are placed here or configured correctly in `angular.json` if placed elsewhere.
*   **TypeScript Strictness:** Adhere to all TypeScript strict mode rules as defined in `tsconfig.json`. This includes `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`.