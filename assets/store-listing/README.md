# Google Workspace Marketplace Store Listing Assets

This directory contains all the assets and documentation needed to submit the **Timezone Converter** add-on to the Google Workspace Marketplace.

## 📁 Files Overview

### Documentation
- **[`app-description.md`](./app-description.md)** - Complete store listing copy (short & detailed descriptions)
- **[`graphics-specifications.md`](./graphics-specifications.md)** - Requirements and specifications for all graphics assets
- **[`testing-instructions.md`](./testing-instructions.md)** - Comprehensive testing guide for marketplace reviewers
- **[`marketplace-configuration.md`](./marketplace-configuration.md)** - Complete Marketplace SDK configuration settings
- **[`README.md`](./README.md)** - This overview file

### Graphics Assets (To Be Created)
```
assets/graphics/
├── logo-128x128.png              # App icon (128x128px, transparent)
├── small-tile-220x140.png        # Marketplace grid view
├── large-tile-440x280.png        # Marketplace detail view  
└── screenshots/
    ├── screenshot-1-function-demo.png         # Function usage demo
    ├── screenshot-2-timezone-list.png         # Available timezones
    ├── screenshot-3-error-handling.png       # Error messages
    ├── screenshot-4-multiple-conversions.png # Multiple examples
    └── screenshot-5-about-dialog.png         # About dialog
```

## 🚀 Quick Start Checklist

### Phase 1: Graphics Creation
- [ ] Create app icon (128x128px PNG with transparent background)
- [ ] Design small tile (220x140px) for marketplace grid
- [ ] Design large tile (440x280px) for marketplace detail view
- [ ] Take screenshots of actual add-on functionality (1280x800px)
- [ ] Optimize all graphics for web (under 1MB each)

### Phase 2: Google Cloud Setup
- [ ] Create/configure Google Cloud Project
- [ ] Enable Google Workspace Marketplace SDK
- [ ] Enable Google Sheets API
- [ ] Configure OAuth consent screen
- [ ] Link Apps Script project to Cloud project

### Phase 3: Apps Script Deployment
- [ ] Create new deployment in Apps Script
- [ ] Select "Add-on" deployment type
- [ ] Copy Deployment ID for marketplace configuration
- [ ] Test deployment functionality

### Phase 4: Marketplace Configuration
- [ ] Access Marketplace SDK in Cloud Console
- [ ] Fill in basic app information using [`marketplace-configuration.md`](./marketplace-configuration.md)
- [ ] Upload all graphics assets
- [ ] Configure add-on extension with Deployment ID
- [ ] Set pricing to "Free"
- [ ] Add support information

### Phase 5: Testing & Submission
- [ ] Complete internal testing using [`testing-instructions.md`](./testing-instructions.md)
- [ ] Submit for marketplace review
- [ ] Provide clear testing instructions to reviewers
- [ ] Monitor review status

## 📝 Key Information

### Add-on Details
- **Name:** Timezone Converter
- **Version:** 1.1.0
- **Type:** Google Sheets Workspace Add-on
- **Primary Function:** `CONVERT_TIMEZONE()` custom function
- **Timezone Support:** 500+ IANA timezones with automatic DST

### Target Audience
- International teams and businesses
- Financial analysts working with global markets
- Project managers coordinating across timezones
- Anyone working with datetime data from multiple regions

### Unique Selling Points
1. **Workspace-wide installation** - Install once, use in all sheets
2. **Automatic DST handling** - No manual calculations needed
3. **500+ timezone support** - Complete IANA database
4. **Error-resistant** - Clear feedback for invalid inputs
5. **No external dependencies** - All processing within Google's environment

## 🎨 Design Guidelines

### Visual Identity
- **Colors:** Google Material Design palette (Blue #1a73e8, Green #34a853)
- **Style:** Clean, professional, modern
- **Icons:** Clock/timezone theme with global elements
- **Typography:** Google Sans, Roboto family

### Screenshots Content
1. **Function Demo:** Show `=CONVERT_TIMEZONE()` in use with real results
2. **Timezone List:** Display the available timezones dialog
3. **Error Handling:** Show helpful error messages for invalid inputs
4. **Multiple Examples:** Demonstrate various timezone conversions
5. **About Dialog:** Show add-on information and features

## 📋 Submission Requirements

### Required Graphics
- [x] App icon (128x128px) - **NEEDED**
- [x] Small tile (220x140px) - **NEEDED**
- [x] Large tile (440x280px) - **NEEDED**
- [x] At least 1 screenshot (1280x800px) - **NEEDED**

### Required Documentation
- [x] App description (short & detailed) - **COMPLETE**
- [x] Privacy policy URL - **[Available](../../docs/privacy.md)**
- [x] Terms of service URL - **[Available](../../docs/terms.md)**
- [x] Testing instructions - **COMPLETE**

### Technical Requirements
- [x] Apps Script code - **[Complete](../../src/Code.gs)**
- [x] Manifest file - **[Complete](../../src/appsscript.json)**
- [x] OAuth scopes defined - **COMPLETE**
- [ ] Deployment created - **PENDING**
- [ ] Cloud project configured - **PENDING**

## 🔗 Useful Links

### Google Documentation
- [Workspace Marketplace Developer Guide](https://developers.google.com/workspace/marketplace)
- [Apps Script Add-on Guide](https://developers.google.com/apps-script/add-ons)
- [Marketplace Publishing Policies](https://developers.google.com/workspace/marketplace/policies)

### Project Resources
- [Main Repository](https://github.com/anthony-maio/google-sheets-timezone-converter)
- [Publishing Guide](../../docs/PUBLISHING_GUIDE.MD)
- [Privacy Policy](../../docs/privacy.md)
- [Terms of Service](../../docs/terms.md)

## 🆘 Support

### For Development Issues
- **GitHub Issues:** [Project Issues](https://github.com/anthony-maio/google-sheets-timezone-converter/issues)
- **Documentation:** [README](../../README.MD)

### For Marketplace Submission
- **Google Support:** [Workspace Developer Community](https://developers.google.com/community)
- **Stack Overflow:** Tag with `google-apps-script` and `google-workspace-marketplace`

---

**Next Step:** Create the graphics assets listed in [`graphics-specifications.md`](./graphics-specifications.md) to complete the marketplace submission package.