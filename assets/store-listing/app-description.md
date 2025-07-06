# Timezone Converter - Store Listing Copy

## Short Description (150 characters max)

Convert datetime values between timezones with automatic DST handling. Supports 500+ IANA timezones in any Google Sheet.

## Detailed Description

Transform your Google Sheets into a powerful timezone conversion tool with the **Timezone Converter** add-on. This workspace add-on provides a custom `CONVERT_TIMEZONE()` function that works instantly in any spreadsheet across your organization.

### 🌍 Key Features

✅ **Automatic DST Handling** - Never worry about daylight saving time calculations again  
✅ **500+ Timezones** - Full IANA timezone database support  
✅ **Universal Compatibility** - Works with dates, times, and datetime values  
✅ **Multiple Formats** - Handles various date formats seamlessly  
✅ **Clear Error Messages** - Helpful feedback for invalid inputs  
✅ **Workspace-Wide** - Install once, use in all sheets  

### 📊 How to Use

Simply type the function in any cell:

**Basic Usage:**

``` html
=CONVERT_TIMEZONE(A1, "America/New_York")
```

**Advanced Usage:**

``` html
=CONVERT_TIMEZONE(A1, "Europe/London", "America/Los_Angeles")
```

**Parameters:**

- `datetime` - The datetime to convert (required)
- `timezone_target` - Target timezone (required)
- `timezone_source` - Source timezone (optional, defaults to UTC)

### 🎯 Perfect For

- **International Teams** - Coordinate meetings across timezones
- **Financial Reports** - Convert market timestamps
- **Project Management** - Schedule tasks globally
- **Data Analysis** - Normalize timestamps from different sources
- **Travel Planning** - Calculate arrival/departure times

### 🔧 Supported Timezones

Americas: New_York, Los_Angeles, Chicago, Toronto, Sao_Paulo  
Europe: London, Paris, Berlin, Rome, Stockholm  
Asia: Tokyo, Shanghai, Mumbai, Seoul, Singapore  
Pacific: Sydney, Auckland, Honolulu  

### 🚀 Enterprise Ready

- **Workspace Add-on** - Installs globally for your organization
- **No Setup Required** - Function available immediately
- **Secure & Private** - No data leaves Google's servers
- **Reliable Performance** - Built on Google Apps Script platform

  *Access the full timezone list via Extensions → Timezone Converter → List Available Timezones*

---

**Developer:** [Anthony Maio](mailto:anthony.maio@gmail.com)
**Support:** GitHub Issues & Documentation  
**License:** MIT Open Source
