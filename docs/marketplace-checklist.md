# Google Workspace Marketplace Submission Checklist

Use this checklist to prepare the Timezone Converter add-on for review and publication as a free listing in the Google Workspace Marketplace.

## Technical Readiness

- [ ] CI/CD workflow secrets (`GOOGLE_CREDENTIALS`, `CLASP_SCRIPT_ID`, `CLASP_DEPLOYMENT_ID`) are configured so `main` always reflects the code referenced by the Marketplace deployment.
- [ ] The production deployment ID supplied to `CLASP_DEPLOYMENT_ID` matches the listing configured in the [Google Workspace Marketplace SDK](https://console.cloud.google.com/marketplace).
- [ ] All project files compile locally via `clasp push` without errors.
- [ ] The manifest (`appsscript.json`) declares the add-on as `Sheets`-compatible and includes the homepage trigger.

## Policy & Content Requirements

- [ ] Privacy policy (`docs/privacy.md`) and terms of service (`docs/terms.md`) URLs are accessible and referenced in the Marketplace listing.
- [ ] Support contact email and website are set in the listing.
- [ ] Branding assets (logo, banner) meet the Marketplace image specifications (400x400 logo, 1280x720 banner). Files live in [`assets/`](../assets/).
- [ ] The add-on description highlights key features (DST handling, range support, strict parsing options) and clearly states that the product is free.

## Testing & Quality

- [ ] End-to-end test of the custom function on desktop Sheets in multiple timezones.
- [ ] Validation on Google Sheets Android/iOS: custom functions calculate as expected and the add-on does not rely on sidebar dialogs unavailable on mobile.
- [ ] Accessibility review of any UI surfaces (cards, dialogs) if added in future updates.

## Submission Steps

1. In the Google Cloud Console, open **Marketplace > Your Add-ons > Edit**.
2. Update the **Store Listing** content (screenshots, description, support links, pricing set to _Free_).
3. Under **Versioning**, choose the deployment updated by CI and provide release notes.
4. Complete the verification questionnaire and OAuth consent requirements if scopes change.
5. Submit for review and monitor the approval status. Respond promptly to reviewer feedback.

Keeping this checklist in the repository ensures that release managers have a repeatable, transparent process for pushing updates to the Marketplace.
