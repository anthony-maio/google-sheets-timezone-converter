VISUAL REPOSITORY STRUCTURE
===========================

📦 timezone-converter-sheets/          (Your GitHub repo root)
│
├── 📁 src/                           (Google Apps Script main project files)
│   ├── 📄 Code.gs                    ← main-addon-code.js
│   ├── 🌐 About.html                 ← main-addon-about.html
│   └── ⚙️  appsscript.json           ← main-addon-manifest.json
│
├── 📁 library/                       (Separate Google Apps Script library project)
│   └── 📄 Code.gs                    ← moment-library-code.js
│                                       (needs Moment.js code added)
│
├── 📁 docs/                          (Documentation - not uploaded to Apps Script)
│   ├── 📋 PUBLISHING_GUIDE.md        ← publishing-guide.md
│   ├── 🎨 LOGO_SETUP.md              ← logo-instructions.md
│   ├── 🔄 GLOBAL_ADDON_UPDATE.md     ← global-addon-update.md
│   └── 🚀 IMPLEMENTATION_SUMMARY.md  ← implementation-summary.md
│
├── 📁 assets/                        (Graphics hosted on GitHub)
│   ├── 🖼️  logo-128x128.png          (you create this from SVG)
│   └── 📸 screenshots/               (optional marketplace images)
│
├── 📄 README.md                      ← readme-file.md
├── 📄 LICENSE                        ← license-file.txt
├── 📄 .gitignore                     ← gitignore-file.txt
└── 🎨 logo-timezone-converter.svg    ← logo-svg (optional)


TWO GOOGLE APPS SCRIPT PROJECTS:
================================

1️⃣ Project: "MomentTimezoneLibrary"
    └── library/Code.gs only

2️⃣ Project: "Timezone Converter" 
    ├── src/Code.gs
    ├── src/About.html
    └── src/appsscript.json


QUICK RENAME GUIDE:
==================

main-addon-code.js        →  src/Code.gs
main-addon-manifest.json  →  src/appsscript.json
main-addon-about.html     →  src/About.html
moment-library-code.js    →  library/Code.gs
readme-file.md           →  README.md
license-file.txt         →  LICENSE
gitignore-file.txt       →  .gitignore
logo-instructions.md    →  docs/LOGO_SETUP.md
publishing-guide.md      →  docs/PUBLISHING_GUIDE.md
global-addon-update.md  →  docs/GLOBAL_ADDON_UPDATE.md
implementation-summary.md → docs/IMPLEMENTATION_SUMMARY.md
logo-svg                  →  assets/logo-timezone-converter.svg
logo-128x128.png         →  assets/logo-128x128.png
