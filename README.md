# Accessibility Baseline & Repository Architecture Audit

A starter monorepo for the Rabtech task: audit one public-facing website for accessibility, document evidence and remediation priority, and create a maintainable client/server project foundation.

## Project status
**Starter foundation — complete the real website audit and verify all evidence before submitting.** The included worksheet is the supplied template. Do not claim an issue is confirmed until you reproduce it on the target website and capture your own screenshots.

## Repository layout
```text
client/                 Front-end app placeholder and local setup notes
server/                 Back-end API placeholder and local setup notes
docs/
  audit/                Audit worksheet and report
  architecture/         Architecture decisions and first vertical slice
tests/
  client/               Client test plan
  server/               Server test plan
```

## Requirements
- Node.js 20+ and npm (for the optional runnable starter)
- A modern browser with keyboard navigation and browser DevTools
- Chrome or Chromium with Lighthouse available in DevTools

## Run locally
1. Install Node.js 20 or newer.
2. Open a terminal in this repository root.
3. Run `npm install` (there are no third-party runtime dependencies).
4. Run `npm run dev` to start the local client and API.
5. Open the client at `http://localhost:5173`; API health check: `http://localhost:3001/api/health`.

## Complete the accessibility audit
1. Choose one public-facing service website and record its exact URL, date, browser, viewport, and pages tested in `docs/audit/audit-report.md`.
2. Run Lighthouse (Accessibility) on the chosen pages and record the score and any relevant findings. A score alone is not a complete audit.
3. Test keyboard-only navigation: use Tab, Shift+Tab, Enter, Space, and Escape where relevant. Record the exact page/component, observed behavior, and reproduction steps.
4. Use the supplied worksheet at `docs/audit/accessibility-audit-template.csv`. Record at least five *verified* accessibility or architecture issues, each with evidence, severity, and remediation owner.
5. Capture screenshots with visible page context. Store them under `docs/audit/screenshots/` and reference their filenames in the report.
6. Replace the clearly marked pending sections in the report with your own verified findings. Never submit illustrative or unverified issues as observed facts.

## First vertical slice
The starter includes a small client page that calls the server health endpoint. See `docs/architecture/README.md`.

## Before submitting
- [ ] Replace all `[FILL IN]` fields in the audit report.
- [ ] Add at least five verified issues and evidence screenshots.
- [ ] Add screenshots and the completed worksheet.
- [ ] Run `npm test` and `npm run check`.
- [ ] Confirm the ZIP contains the repository root and all required files.
