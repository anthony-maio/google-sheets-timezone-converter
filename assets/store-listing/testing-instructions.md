# Testing Instructions for Google Workspace Marketplace Review

## Timezone Converter Add-on - Version 1.1.0

### Overview
This workspace add-on provides a global `CONVERT_TIMEZONE()` custom function for Google Sheets with automatic DST handling and support for 500+ IANA timezones.

---

## Installation Testing

### Step 1: Install the Add-on
1. Navigate to the marketplace listing
2. Click **"Install"** button
3. **Expected Result:** Add-on installs globally for the entire workspace
4. **Verification:** No per-sheet installation required

### Step 2: Verify Global Availability
1. Open **ANY** existing Google Sheets document
2. Click on any empty cell
3. Type: `=CONVERT_TIMEZONE(`
4. **Expected Result:** Function appears in autocomplete suggestions
5. **Verification:** Function is immediately available without additional setup

---

## Core Function Testing

### Test 1: Basic Timezone Conversion
**Input Setup:**
1. Cell A1: Enter current date/time (use `=NOW()`)
2. Cell B1: Enter `=CONVERT_TIMEZONE(A1, "America/New_York")`

**Expected Results:**
- B1 displays the datetime converted to Eastern Time
- DST is automatically applied if applicable
- No error messages appear

### Test 2: Three-Parameter Conversion
**Input Setup:**
1. Cell A2: Enter `2025-07-04 12:00:00`
2. Cell B2: Enter `=CONVERT_TIMEZONE(A2, "Europe/London", "America/Los_Angeles")`

**Expected Results:**
- Converts from Pacific Time to British Time
- Shows correct time difference (8 hours during PDT/BST)
- Handles DST correctly for July date

### Test 3: Multiple Timezone Examples
**Input Setup:**
1. Cell A3: `=NOW()`
2. Cell B3: `=CONVERT_TIMEZONE(A3, "Asia/Tokyo")`
3. Cell C3: `=CONVERT_TIMEZONE(A3, "Australia/Sydney")`
4. Cell D3: `=CONVERT_TIMEZONE(A3, "Europe/Paris")`

**Expected Results:**
- All cells show correct timezone conversions
- Time differences are accurate
- DST is properly calculated for each timezone

---

## Error Handling Testing

### Test 4: Invalid Timezone
**Input Setup:**
1. Cell A4: `=NOW()`
2. Cell B4: `=CONVERT_TIMEZONE(A4, "Invalid/Timezone")`

**Expected Results:**
- Cell displays error: `#N/A! Invalid target timezone: 'Invalid/Timezone' is not a valid IANA timezone`
- Error message is clear and helpful

### Test 5: Empty Parameters
**Input Setup:**
1. Cell A5: `=CONVERT_TIMEZONE(, "America/New_York")`

**Expected Results:**
- Cell displays error: `#VALUE! Invalid datetime: empty or null value`
- Function handles empty inputs gracefully

### Test 6: Invalid Date Format
**Input Setup:**
1. Cell A6: `=CONVERT_TIMEZONE("not-a-date", "America/New_York")`

**Expected Results:**
- Cell displays error: `#VALUE! Invalid datetime: could not parse the input datetime`
- Clear feedback about invalid input format

---

## UI Features Testing

### Test 7: About Dialog
**Steps:**
1. Go to **Extensions** → **Timezone Converter** → **About**
2. **Expected Result:** Modal dialog opens showing:
   - Add-on name and version (1.1.0)
   - Feature descriptions
   - Usage examples
   - Developer information

### Test 8: Timezone List Feature
**Steps:**
1. Go to **Extensions** → **Timezone Converter** → **List Available Timezones**
2. **Expected Result:** Sidebar opens displaying:
   - Complete list of supported timezones
   - Total count of timezones (500+)
   - Scrollable list format
   - Common timezone names like America/New_York, Europe/London, etc.

---

## Advanced Testing Scenarios

### Test 9: DST Transition Verification
**Input Setup:**
1. Cell A7: `2025-03-09 06:00:00` (DST starts in US)
2. Cell B7: `=CONVERT_TIMEZONE(A7, "America/New_York", "UTC")`
3. Cell A8: `2025-11-02 06:00:00` (DST ends in US)
4. Cell B8: `=CONVERT_TIMEZONE(A8, "America/New_York", "UTC")`

**Expected Results:**
- March conversion shows correct DST offset
- November conversion shows correct standard time offset
- Automatic DST handling is accurate

### Test 10: Different Date Formats
**Input Setup:**
1. Cell A9: `=DATE(2025,6,15)` (Excel date function)
2. Cell B9: `=CONVERT_TIMEZONE(A9, "Asia/Shanghai")`
3. Cell A10: `2025-12-25` (text date)
4. Cell B10: `=CONVERT_TIMEZONE(A10, "Australia/Melbourne")`

**Expected Results:**
- Both date formats are parsed correctly
- Conversions are accurate
- No parsing errors occur

---

## Performance Testing

### Test 11: Multiple Conversions
**Input Setup:**
1. Create a column of 50 datetime values
2. Create corresponding column with CONVERT_TIMEZONE formulas
3. Use various timezone combinations

**Expected Results:**
- All conversions complete within reasonable time
- No timeout errors
- Consistent performance across all rows

---

## Test Data Examples

### Sample Datetime Values
```
=NOW()
=DATE(2025,7,4) + TIME(15,30,0)
"2025-01-01 00:00:00"
"2025-06-21 12:00:00"
"2025-12-31 23:59:59"
```

### Sample Timezone Pairs
```
UTC → America/New_York
America/Los_Angeles → Europe/London  
Asia/Tokyo → America/Chicago
Australia/Sydney → Europe/Paris
America/New_York → Asia/Shanghai
```

---

## Browser Compatibility
Test in these environments:
- Chrome (recommended)
- Firefox
- Safari
- Edge

---

## Known Limitations
1. Function requires MomentTimezone library (included in deployment)
2. Limited to Google Sheets environment
3. Cannot convert historical dates before timezone data availability

---

## Support Information
- **Documentation:** https://github.com/anthony-maio/google-sheets-timezone-converter
- **Issue Reporting:** GitHub Issues
- **Developer Contact:** anthony.maio@gmail.com

---

## Reviewer Notes
- This is a **Workspace Add-on** (global installation)
- Primary function is the custom `CONVERT_TIMEZONE()` formula
- UI elements (menu items) are supplementary features
- No external API calls - all processing happens within Google's environment
- Open source project with MIT license