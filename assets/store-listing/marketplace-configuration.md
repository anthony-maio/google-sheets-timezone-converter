# Google Workspace Marketplace SDK Configuration

## App Configuration Settings

### Basic Information
- **Application name:** `Timezone Converter`
- **Application description:** `Convert datetime values between timezones with automatic DST handling. Supports 500+ IANA timezones in any Google Sheet.`
- **Application icon:** Upload `logo-128x128.png`
- **Detailed description:** (Use content from [`app-description.md`](./app-description.md))
- **Terms of service URL:** `https://your-domain.com/terms`
- **Privacy policy URL:** `https://your-domain.com/privacy`
- **Post-install tip:** `Use =CONVERT_TIMEZONE() in any cell to start converting timezones! The add-on is installed globally for your workspace.`

### Application Integration
- **Enabled APIs:** 
  - Google Sheets API
  - Google Apps Script API
- **OAuth Scopes:** (Auto-populated from [`appsscript.json`](../../src/appsscript.json))
  - `https://www.googleapis.com/auth/spreadsheets`
  - `https://www.googleapis.com/auth/script.container.ui`

---

## Add-on Extensions

### Extension Configuration
1. **Extension Type:** `Google Sheets Add-on`
2. **Script project key:** `[YOUR_DEPLOYMENT_ID]` (from Apps Script deployment)
3. **Script version:** `1` (or latest version number)
4. **Add-on type:** `Workspace add-on` (global)

---

## Store Listing

### Language Settings
- **Primary language:** `English`
- **Available in these countries:** (Select all desired countries)
  - United States
  - Canada
  - United Kingdom
  - Australia
  - European Union countries
  - Asia-Pacific regions

### Graphics Assets
1. **Small tile (220x140px):** `small-tile-220x140.png`
2. **Large tile (440x280px):** `large-tile-440x280.png`
3. **Screenshots (1280x800px):**
   - `screenshot-1-function-demo.png`
   - `screenshot-2-timezone-list.png`
   - `screenshot-3-error-handling.png` (optional)
   - `screenshot-4-multiple-conversions.png` (optional)
4. **Video URL:** (Optional) `https://youtube.com/watch?v=your-demo-video`

### Pricing
- **Pricing model:** `Free`
- **Installation pricing:** `Free`
- **Usage pricing:** `Free`

### Support Information
- **Developer name:** `Anthony Maio`
- **Developer website:** `https://github.com/anthony-maio`
- **Support URL:** `https://github.com/anthony-maio/google-sheets-timezone-converter/issues`
- **Support email:** `anthony.maio@gmail.com`

---

## Category & Discovery

### Primary Category
- **Category:** `Productivity`
- **Subcategory:** `Time Management`

### Tags/Keywords
```
timezone, convert, datetime, time, DST, IANA, international, global, sheets, function, custom, workspace, add-on
```

### Target Audience
- **Business type:** All business types
- **Company size:** All sizes
- **Use cases:**
  - International collaboration
  - Project management
  - Data analysis
  - Financial reporting
  - Travel planning

---

## Compliance & Policies

### Data Handling
- **Data access:** `User data in Google Sheets only`
- **Data storage:** `No external data storage`
- **Data transmission:** `No data transmitted outside Google's environment`
- **Third-party services:** `None`

### Privacy & Security
- **Permissions justification:**
  - `spreadsheets` scope: Required to read datetime values and write converted results
  - `script.container.ui` scope: Required for add-on menu and dialog interfaces
- **Sensitive data:** None accessed
- **Encryption:** Google's standard encryption

---

## Testing Information

### Test Account (if required)
- **Email:** `test@your-domain.com`
- **Password:** `[Provide secure test password]`
- **Test Spreadsheet:** `[Link to pre-configured test sheet]`

### Review Instructions
Copy content from [`testing-instructions.md`](./testing-instructions.md) into the "Review instructions" field.

### Test Data
```
Sample datetime values:
- =NOW()
- 2025-07-04 15:30:00
- 2025-12-25 00:00:00

Sample timezone pairs:
- UTC → America/New_York
- America/Los_Angeles → Europe/London
- Asia/Tokyo → Australia/Sydney
```

---

## Pre-Submission Checklist

### Technical Requirements
- [ ] Apps Script deployment created with "Add-on" type
- [ ] Deployment ID copied for script project key
- [ ] All required APIs enabled in Cloud Console
- [ ] OAuth consent screen fully configured
- [ ] Apps Script project linked to Cloud project

### Content Requirements
- [ ] All graphics assets created and optimized
- [ ] Screenshots show actual functionality (not mockups)
- [ ] Description is clear and accurate
- [ ] Privacy policy and terms of service accessible
- [ ] Support channels are active and monitored

### Testing Requirements
- [ ] Add-on tested in multiple Google accounts
- [ ] All functions work correctly in deployed version
- [ ] Error handling verified
- [ ] UI elements accessible and functional
- [ ] No console errors or warnings

### Policy Compliance
- [ ] No policy violations
- [ ] Appropriate permissions requested
- [ ] Data handling disclosed accurately
- [ ] Content appropriate for all audiences

---

## Submission Process

### Steps
1. Complete all configuration in Marketplace SDK
2. Review all settings carefully
3. Upload all graphics assets
4. Submit for review
5. Monitor review status in Cloud Console

### Review Timeline
- **Internal/Private:** Immediate (no review required)
- **Unlisted:** Usually 1-2 business days
- **Public:** Usually 2-5 business days

### Post-Approval
- [ ] Monitor installation metrics
- [ ] Respond to user reviews
- [ ] Track error logs in Cloud Console
- [ ] Plan future updates and improvements

---

## Contact Information

**Primary Contact:** Anthony Maio  
**Email:** anthony.maio@gmail.com  
**GitHub:** https://github.com/anthony-maio  
**Project Repository:** https://github.com/anthony-maio/google-sheets-timezone-converter