# Local clasp Setup

1. Install Node.js 18 or newer.
2. Run `npm install -g @google/clasp`.
3. Copy `.clasp.json.template` to `.clasp.json` and replace `InsertScriptIdHere` with your Apps Script project ID.
4. Authenticate: `clasp login --creds path/to/service-account.json` (recommended) or `clasp login` for OAuth-based auth.
5. Run `clasp pull` to verify connectivity, or `clasp push` to upload local changes.

For CI usage, see [`docs/ci-cd.md`](docs/ci-cd.md).
