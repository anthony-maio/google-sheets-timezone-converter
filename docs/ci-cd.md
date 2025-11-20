# Continuous Deployment

This project uses [GitHub Actions](https://docs.github.com/actions) to deploy the Apps Script project that powers the Timezone Converter add-on. The workflow lives at [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) and runs automatically whenever changes are pushed to the `main` branch or when triggered manually from the Actions tab.

## Prerequisites

Create the following GitHub repository secrets so the workflow can authenticate with Google and target the correct Apps Script deployment:

| Secret | Description |
| --- | --- |
| `GOOGLE_CREDENTIALS` | Contents of a service account JSON key that has been granted the _Editor_ role on the Apps Script project. |
| `CLASP_SCRIPT_ID` | The Apps Script project ID that should receive code updates. |
| `CLASP_DEPLOYMENT_ID` | (Optional) The deployment ID to promote after each push. Provide the identifier from `clasp deployments`. |

> **Note:** Service account authentication requires enabling the [Google Apps Script API](https://developers.google.com/apps-script/api/how-tos/enable). Share the script project with the service account email address using the Apps Script editor.

## Pipeline Steps

1. **Checkout & Tooling** – Pulls the repository and installs Node.js 18 and the [`@google/clasp`](https://github.com/google/clasp) CLI.
2. **Project Configuration** – Copies `.clasp.json.template` to `.clasp.json` and injects the script ID stored in `CLASP_SCRIPT_ID`.
3. **Authentication** – Writes the `GOOGLE_CREDENTIALS` secret to `creds.json` and logs in to Apps Script using `clasp login --creds`.
4. **Push Source** – Executes `clasp push --force` to synchronize the repository with the Apps Script project.
5. **Versioning** – Calls `clasp version` with the branch and commit SHA for traceability.
6. **Deployment (optional)** – If `CLASP_DEPLOYMENT_ID` is defined, runs `clasp deploy` to update the published deployment in place.

## Local Verification

Before merging changes, run `clasp push` locally to verify that the script compiles and that all files listed in `.claspignore` behave as expected. The CI workflow uses the same commands, so local success typically means CI success once credentials are in place.

## Publishing to the Google Workspace Marketplace

After the workflow updates the deployment, visit the [Google Cloud Console Marketplace SDK page](https://console.cloud.google.com/marketplace) for the associated project to submit the add-on for review. The CI job ensures that the deployment referenced in the Marketplace listing always points to the latest code on `main`.
