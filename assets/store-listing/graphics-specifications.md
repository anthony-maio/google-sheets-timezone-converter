# Graphics Assets Specifications

## Required Assets for Google Workspace Marketplace

### 1. Application Icon

- **Size:** 128x128px
- **Format:** PNG with transparent background
- **Usage:** OAuth consent screen, Apps Script, Marketplace listing
- **File:** `logo-128x128.png`

### 2. Small Tile  

- **Size:** 220x140px
- **Format:** PNG
- **Usage:** Marketplace grid view
- **File:** `small-tile-220x140.png`
- **Content:** App name + icon, clean design

### 3. Large Tile

- **Size:** 440x280px  
- **Format:** PNG
- **Usage:** Marketplace detailed view
- **File:** `large-tile-440x280.png`
- **Content:** App name + key features, more detailed

### 4. Screenshots

- **Size:** 1280x800px (recommended)
- **Format:** PNG or JPG
- **Quantity:** 1-5 screenshots
- **Files:** `screenshot-1.png`, `screenshot-2.png`, etc.

## Screenshot Content Requirements

### Screenshot 1: Function in Action

- Show Google Sheets with CONVERT_TIMEZONE function being used
- Display formula bar with: `=CONVERT_TIMEZONE(A1, "America/New_York")`
- Show input datetime in one cell, converted result in another
- Include timezone examples and results

### Screenshot 2: Available Timezones List

- Show the timezone list dialog: Extensions → Timezone Converter → List Available Timezones
- Display scrollable list of supported timezones
- Highlight popular timezone names

### Screenshot 3: Error Handling (Optional)

- Show helpful error messages for invalid inputs
- Demonstrate clear feedback for wrong timezone names
- Show autocomplete suggestion

### Screenshot 4: Multiple Conversions (Optional)

- Show spreadsheet with multiple timezone conversions
- Different source/target timezone combinations
- Real-world use case (meeting scheduler, time tracking, etc.)

### Screenshot 5: About Dialog (Optional)

- Show the About dialog: Extensions → Timezone Converter → About
- Display version info and features

## Design Guidelines

### Color Scheme

- **Primary:** #1a73e8 (Google Blue)
- **Secondary:** #34a853 (Google Green)  
- **Accent:** #fbbc04 (Google Yellow)
- **Text:** #202124 (Google Dark Gray)
- **Background:** #ffffff (White)

### Typography

- **Primary Font:** Google Sans
- **Secondary Font:** Roboto
- **Monospace:** Roboto Mono (for code examples)

### Icon Design

- Clean, modern design
- Clock/timezone theme with world/globe element
- Recognizable at small sizes
- Follows Google Material Design principles

## Asset Creation Tools

### Recommended Software

- **Professional:** Adobe Photoshop, Illustrator, Figma
- **Free:** GIMP, Canva, Google Drawings
- **Online:** Canva Pro, Adobe Express

### Templates

- Use Google Material Design guidelines
- Follow Google Workspace add-on design patterns
- Maintain consistent branding across all assets

## File Organization

```bash
assets/
├── graphics/
│   ├── logo-128x128.png
│   ├── small-tile-220x140.png
│   ├── large-tile-440x280.png
│   └── screenshots/
│       ├── screenshot-1-function-demo.png
│       ├── screenshot-2-timezone-list.png
│       ├── screenshot-3-error-handling.png
│       ├── screenshot-4-multiple-conversions.png
│       └── screenshot-5-about-dialog.png
├── source-files/
│   ├── logo.ai
│   ├── tiles.psd
│   └── screenshots.sketch
└── store-listing/
    ├── app-description.md
    ├── graphics-specifications.md
    └── testing-instructions.md
```

## Quality Checklist

### Before Submission

- [ ] All graphics are pixel-perfect at required dimensions
- [ ] Icons have transparent backgrounds
- [ ] Screenshots show actual functionality (no mockups)
- [ ] Text is readable at all sizes
- [ ] Colors match Google design guidelines
- [ ] No copyrighted content or fonts
- [ ] Files are optimized for web (under 1MB each)
- [ ] Consistent branding across all assets

### Accessibility

- [ ] High contrast ratios (4.5:1 minimum)
- [ ] Color is not the only way to convey information
- [ ] Text alternatives provided for important visual elements
- [ ] Legible at 200% zoom
