# Timezone Converter for Google Sheets

## Version 1.1.0

## About

The Timezone Converter add-on provides a powerful custom function for Google Sheets that converts datetime values between different timezones. It supports the full IANA timezone database. Adding a static offset is trivial, though - the impetus for the creation of this add-on was to build in a convenient way to properly incorporate daylight savings time (DST) which has been a personal pain point.

## How to Use

Use the **CONVERT_TIMEZONE** function in any cell:

```python
=CONVERT_TIMEZONE(A1, "America/New_York")
=CONVERT_TIMEZONE(A1, "Europe/London", "America/Los_Angeles")
```

**Parameters:**

- **datetime** - The datetime to convert (required)
- **timezone_target** - Target timezone (required)
- **timezone_source** - Source timezone (optional, defaults to UTC)

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
