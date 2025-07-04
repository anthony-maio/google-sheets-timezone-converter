# Global Add-on Configuration Update

## Changes Made for Global Installation (v1.1)

### Overview

Updated the add-on configuration to make it a **Workspace Add-on** that installs globally across all user's Google Sheets, rather than requiring per-spreadsheet installation.

### Key Changes

#### 1. **appsscript.json** Updates

- **OAuth Scope**: Changed from `spreadsheets.currentonly` to `spreadsheets` for global access
- **Removed**: Editor add-on specific configurations
- **Added**: Workspace add-on homepage trigger
- **Simplified**: Configuration for global deployment

#### 2. **Code.gs** Updates

- **Added**: `onHomepage()` function for Workspace add-on card UI
- **Updated**: `onInstall()` to work with global installation
- **Enhanced**: Error handling for UI permissions
- **Added**: CardService implementation for add-on homepage

### Benefits of Global Installation

1. **User Convenience**
   - Install once, use everywhere
   - No need to enable for each spreadsheet
   - Works in all existing and new sheets

2. **Better User Experience**
   - Custom function available immediately
   - No "enable add-on" prompts
   - Consistent across all sheets

3. **Easier Maintenance**
   - Updates propagate automatically
   - Single installation to manage
   - Simplified deployment process

### How It Works

When a user installs the add-on from the Marketplace:

1. The add-on is installed at the workspace level
2. The `CONVERT_TIMEZONE` function becomes available in ALL Google Sheets
3. No per-file authorization needed
4. Updates are automatic across all sheets

### Important Notes

- The custom function works exactly the same way
- No changes to the function syntax or parameters
- All error handling remains the same
- The MomentTimezone library setup is unchanged

### Testing Global Installation

1. Deploy as Workspace add-on
2. Install from test deployment
3. Open ANY Google Sheet (new or existing)
4. Type `=CONVERT_TIMEZONE(` and it should autocomplete
5. Function works without any additional setup

### OAuth Considerations

The broader `spreadsheets` scope is necessary for global functionality but:

- Only reads/writes when the function is explicitly called
- No background access to user data
- Follows Google's security best practices
- Users see clear permissions during installation

---

**Version**: 1.1.0  
**Date**: May 22, 2025  
**Status**: Enhanced for global installation
