# Architecture and Local Setup

## Boundaries

- `client/`: browser UI, semantic markup, styling, user interactions, and API calls. It must not contain secrets or direct database credentials.
- `server/`: HTTP routes, request validation, authorization (when added), business logic, and persistence adapters.
- `docs/`: audit evidence, architecture decisions, setup, and handoff documentation.
- `tests/`: automated server tests and manual/client accessibility test plans.

## Request flow (first vertical slice)

1. A user opens the client page.
2. The user activates **Check API status**.
3. The client sends `GET /api/health` to the server.
4. The server returns a small JSON health payload.
5. The client displays the result in a polite live region.

## Local setup

Requirements: Node.js 20+ and Python 3 (for the static client server).

Terminal 1 (repository root):
```bash
npm run dev
```

Terminal 2:
```bash
cd client
python -m http.server 5173
```

Open `http://localhost:5173`. The API runs on port 3001.

## Future vertical slice

For the first user-facing feature, implement one complete path end-to-end:
- client form with explicit labels and accessible validation;
- server route with input validation and consistent error responses;
- service layer for business rules;
- repository/data layer only if persistent storage is required;
- unit tests for validation and business rules, plus keyboard/screen-reader checks.

## Design decisions

- Start with native HTML and browser APIs to minimize dependencies.
- Keep client and server independently organized within one repository.
- Keep configuration in environment variables; never commit secrets.
- Add a database only when the first feature requires persistent data.
- Document API contracts and error cases as endpoints are added.
