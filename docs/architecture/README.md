# Architecture & Local Setup

### Project Boundaries

**client/** - This is for UI only. HTML, CSS, JS and API calls. No secrets or DB passwords here.

**server/** - Handles API routes, validation and business logic. All backend work here.

**docs/** - I kept all audit screenshots, reports and architecture notes here.

**tests/** - Basic tests for server health and client manual checks.

### How Request Works (First Slice)

1. User opens client page at localhost:5173
2. Clicks on "Check API status" button
3. Client calls GET /api/health from server
4. Server replies with JSON like { status: ok }
5. Client shows result on page

### How to Run Locally

You need Node.js 20+ and Python 3.

I am running both client and server from one command now:

Root terminal:

This will start:
- API at http://localhost:3001
- Client at http://localhost:5173

Earlier I used 2 terminals, but now dev.js handles both, so only 1 terminal is enough.

### What I Will Do Next

For next feature:
- Add form in client with proper labels and error messages
- Add validation on server side
- Add service layer for logic
- Add DB only if needed
- Write unit tests for validation

### Design Choices

- Used plain HTML/JS to avoid extra dependencies
- Kept client and server separate but in same repo
- Used .env for config, no secrets committed
- Documented API as I added endpoints
