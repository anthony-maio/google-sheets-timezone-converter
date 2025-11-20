# Timezone Converter for Google Sheets

## Version 1.1.0

## About

The Timezone Converter add-on provides a powerful custom function for Google Sheets that converts datetime values between different timezones. It supports the full IANA timezone database. Adding a static offset is trivial, though - the impetus for the creation of this add-on was to build in a convenient way to properly incorporate daylight savings time (DST) which has been a personal pain point.

## How to Use

Use the **CONVERT_TIMEZONE** function in any cell:

```python
=CONVERT_TIMEZONE(A1, "America/New_York")
=CONVERT_TIMEZONE(A1, "Europe/London", "America/Los_Angeles")
=CONVERT_TIMEZONE(A1:A5, "Asia/Tokyo")
=CONVERT_TIMEZONE(A1, "Europe/London", "America/Los_Angeles", "YYYY-MM-DD HH:mm z")
=CONVERT_TIMEZONE(A1, "Europe/London", "America/Los_Angeles", '{"inputFormat":"MM/DD/YYYY HH:mm","outputFormat":"YYYY-MM-DD HH:mm z"}')
```

**Parameters:**

- **datetime** - The datetime to convert (required)
- **timezone_target** - Target timezone (required)
- **timezone_source** - Source timezone (optional, defaults to UTC)
- **options** - Optional formatting argument. Accepts:
  - `TRUE`/`FALSE` to force a text response using the default format `YYYY-MM-DD HH:mm:ss z`.
  - A Moment format string (e.g. `"YYYY-MM-DD"`) to return text in the target timezone.
  - A JSON object string such as `'{"inputFormat":"MM/DD/YYYY","outputFormat":"YYYY-MM-DD HH:mm z"}'` for strict parsing and custom output formatting.

### Range-friendly results

`CONVERT_TIMEZONE` now maps across ranges, mirroring how native Sheets functions operate. Provide a column or row of datetimes and the function will return a 2D array with the same shape, handling each value independently.


## Documentation

- [Continuous deployment workflow](docs/ci-cd.md) – how GitHub Actions pushes code updates and versions the Apps Script project.
- [Marketplace submission checklist](docs/marketplace-checklist.md) – requirements and assets needed to publish the free add-on.
- [Privacy policy](docs/privacy.md) and [Terms of Service](docs/terms.md) for listing compliance.

## Platform Support

The custom function is available anywhere Google Sheets evaluates formulas.

- **Desktop (web)** – Full functionality. Use the add-on homepage card and custom function inside Sheets on Chrome, Edge, or Safari. Results format in the sheet's timezone unless you request formatted text via the fourth argument.
- **Mobile (Android & iOS)** – Google Sheets recalculates `CONVERT_TIMEZONE` like any other custom function. Add-on UI surfaces (homepages, sidebars) are not shown on mobile, so interactions rely entirely on formulas. When editing on mobile, use static cell references or named ranges because formula autocomplete is limited.

## Example Timezones

- America/New_York
- America/Los_Angeles
- America/Chicago
- Europe/London
- Europe/Paris
- Asia/Tokyo
- Asia/Shanghai
- Australia/Sydney
- Pacific/Auckland

*See the complete [IANA Timezone Reference](https://gist.github.com/anthony-maio/e4dbded3b4713d98ba36229a52e67b53) for all supported timezones.*

## Features

- ✔️ Automatic DST handling
- ✔️ Support for 500+ timezones
- ✔️ Works with dates, times, and datetime values
- ✔️ Handles various date formats
- ✔️ Clear error messages for invalid inputs
- ✔️ Impresses members of the opposite sex
- ✖️ Does NOT make your late night jokes funny

## Security & Setup

**Important**: This project uses template files for clasp configuration to avoid committing sensitive script IDs to version control.

Before deploying:

1. Copy `.clasp.json.template` to `.clasp.json`
2. Copy `src/.clasp.json.template` to `src/.clasp.json`
3. Replace `YOUR_SCRIPT_ID_HERE` with your actual Google Apps Script project ID

See [`clasp-setup-guide.md`](clasp-setup-guide.md) for detailed instructions.

---
**Support:** [GitHub Repository](https://github.com/anthony-maio/google-sheets-timezone-converter)

Built with 👉👌 using Google Apps Script and Moment-Timezone
© 2025 Anthony Maio - Released under MIT License
