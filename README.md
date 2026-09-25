# Rabtech Accessibility Audit - Project Foundation

This repo is the starter foundation for the accessibility audit task. I have set up a basic client/server monorepo and completed audit on one public website.

**Audited Website:** https://www.wikipedia.org
**Audit Date:** 24 Sep 2025
**Browser Tested:** Chrome 129, Firefox
**Viewport:** Desktop 1920x1080 and Mobile 390x844

### Repository Layout
- client/ - Frontend static page that shows audit overview and calls API health check
- server/ - Node.js API with /api/health endpoint
- docs/audit/ - My audit report, worksheet and screenshots
- docs/architecture/ - Notes on project setup and first vertical slice
- tests/ - Basic test plans for client and server

### How to Run Locally
1. Need Node.js 20+
2. Clone this repo: git clone https://github.com/krupapatte/-rabtech-accessibility-audit
3. cd rabtech_accessibility_audit
4. npm install
5. npm run dev
6. Client runs at http://localhost:5173, API at http://localhost:3001/api/health

### What I Did For Audit
- Ran Lighthouse accessibility check on Wikipedia homepage
- Tested keyboard navigation using Tab, Shift+Tab, Enter
- Checked color contrast and alt text issues
- Found 5 issues and documented in docs/audit/accessibility-audit-template.csv
- Took screenshots with page context and saved in docs/audit/screenshots/

### Tests
- npm test - runs basic health checks
- npm run check - verifies project structure

### Notes
This is initial foundation. Screenshots are my own and issues are verified manually on target site.
