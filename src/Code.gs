/**
 * Timezone Converter Add-on for Google Sheets
 * Version: 1.1.0
 * Date: May 22, 2025
 *
 * Features:
 * - CONVERT_TIMEZONE custom function
 * - IANA timezone database support via Moment-Timezone library
 * - Comprehensive DST handling
 * - Robust error handling for invalid inputs
 *
 * Dependencies:
 * - MomentTimezoneLibrary (separate Apps Script library project)
 *
 * Author: Anthony Maio <anthony.maio@gmail.com>
 * License: MIT License
 */

/**
 * Converts a datetime from one timezone to another.
 *
 * @param {Date} datetime The datetime to convert.
 * @param {string} timezone_target The target timezone (tz database name).
 * @param {string} [timezone_source='UTC'] The source timezone (tz database name).
 * @return {Date} The converted datetime or an error value.
 * @customfunction
 */
function CONVERT_TIMEZONE(datetime, timezone_target, timezone_source = 'UTC') {
  try {
    // Check if the MomentTimezone library is loaded
    if (typeof MomentTimezone === 'undefined' || typeof MomentTimezone.tz === 'undefined') {
      throw new Error('#ERROR! MomentTimezone library not loaded. Please check library configuration.');
    }
    
    // Validate inputs
    if (!datetime) {
      throw new Error('#VALUE! Invalid datetime: empty or null value');
    }
    
    if (!timezone_target || typeof timezone_target !== 'string') {
      throw new Error('#VALUE! Invalid target timezone: must be a valid string');
    }
    
    if (!timezone_source || typeof timezone_source !== 'string') {
      timezone_source = 'UTC';
    }
    
    // Convert input to a moment object
    let momentObj;
    
    if (datetime instanceof Date) {
      // Handle Date object
      if (timezone_source.toUpperCase() === 'UTC') {
        momentObj = MomentTimezone.utc(datetime);
      } else {
        // Create moment object assuming the date is in the source timezone
        momentObj = MomentTimezone.tz(datetime, timezone_source);
      }
    } else if (typeof datetime === 'number') {
      // Handle Google Sheets serial number
      // Google Sheets epoch is December 30, 1899
      const GOOGLE_SHEETS_EPOCH = new Date(1899, 11, 30);
      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const dateValue = new Date(GOOGLE_SHEETS_EPOCH.getTime() + datetime * millisecondsPerDay);
      
      if (timezone_source.toUpperCase() === 'UTC') {
        momentObj = MomentTimezone.utc(dateValue);
      } else {
        momentObj = MomentTimezone.tz(dateValue, timezone_source);
      }
    } else if (typeof datetime === 'string') {
      // Handle string datetime
      if (timezone_source.toUpperCase() === 'UTC') {
        momentObj = MomentTimezone.utc(datetime);
      } else {
        momentObj = MomentTimezone.tz(datetime, timezone_source);
      }
    } else {
      throw new Error('#VALUE! Invalid datetime format: must be a Date, number, or string');
    }
    
    // Validate the moment object
    if (!momentObj.isValid()) {
      throw new Error('#VALUE! Invalid datetime: could not parse the input datetime');
    }
    
    // Validate source timezone
    if (timezone_source.toUpperCase() !== 'UTC' && !MomentTimezone.tz.zone(timezone_source)) {
      throw new Error(`#N/A! Invalid source timezone: '${timezone_source}' is not a valid IANA timezone`);
    }
    
    // Validate target timezone
    if (!MomentTimezone.tz.zone(timezone_target)) {
      throw new Error(`#N/A! Invalid target timezone: '${timezone_target}' is not a valid IANA timezone`);
    }
    
    // Convert to target timezone
    const convertedMoment = momentObj.tz(timezone_target);
    
    // Return as JavaScript Date object
    return convertedMoment.toDate();
    
  } catch (error) {
    // Return the error message as a string
    // Google Sheets will display this as an error in the cell
    return error.message || '#ERROR! Unknown error occurred';
  }
}

/**
 * Gets a list of all available timezones.
 * This is a helper function that can be called from the script editor
 * or used in other parts of the add-on.
 * 
 * @return {Array} Array of timezone names
 */
function getAvailableTimezones() {
  if (typeof MomentTimezone === 'undefined' || typeof MomentTimezone.tz === 'undefined') {
    return ['MomentTimezone library not loaded'];
  }
  
  return MomentTimezone.tz.names();
}

/**
 * Opens the About dialog for the add-on
 */
function showAbout() {
  const html = HtmlService.createHtmlOutputFromFile('About')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'About Timezone Converter');
}

/**
 * Called when the add-on is installed.
 * For Workspace add-ons, this runs when the user first installs the add-on.
 */
function onInstall(e) {
  // For a Workspace add-on, we don't need to do anything special on install
  // The custom function will be available automatically in all sheets
  console.log('Timezone Converter add-on installed successfully');
}

/**
 * Called when the add-on homepage is requested.
 * This is used for Workspace add-ons.
 */
function onHomepage(e) {
  // For a custom function add-on, we can return a simple card
  const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
      .setTitle('Timezone Converter')
      .setSubtitle('Version 1.1.0')
      .setImageUrl('https://raw.githubusercontent.com/anthony-maio/google-sheets-timezone-converter/main/assets/logo-128x128.png'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText('Welcome to Timezone Converter! This add-on provides the CONVERT_TIMEZONE custom function for all your Google Sheets.'))
      .addWidget(CardService.newTextParagraph()
        .setText('<b>How to use:</b><br>=CONVERT_TIMEZONE(datetime, timezone_target, [timezone_source])'))
      .addWidget(CardService.newTextParagraph()
        .setText('<b>Example:</b><br>=CONVERT_TIMEZONE(A1, "America/New_York", "UTC")'))
      .addWidget(CardService.newTextButton()
        .setText('View Documentation')
        .setOpenLink(CardService.newOpenLink()
          .setUrl('https://github.com/anthony-maio/google-sheets-timezone-converter'))))
    .build();
  
  return [card];
}

/**
 * Called when the spreadsheet is opened.
 * For Workspace add-ons, this may not be triggered the same way.
 */
function onOpen(e) {
  // This function might not be called for Workspace add-ons
  // But we'll keep it for backward compatibility
  try {
    SpreadsheetApp.getUi()
        .createMenu('Timezone Converter')
        .addItem('About', 'showAbout')
        .addSeparator()
        .addItem('List Available Timezones', 'showTimezoneList')
        .addToUi();
  } catch (error) {
    // Fail silently if we don't have UI permissions
    console.log('Could not create menu:', error);
  }
}

/**
 * Shows a sidebar with all available timezones
 */
function showTimezoneList() {
  const timezones = getAvailableTimezones();
  let html = '<div style="padding: 10px;"><h3>Available Timezones</h3>';
  html += '<p>Total: ' + timezones.length + ' timezones</p>';
  html += '<div style="height: 400px; overflow-y: auto;"><ul>';
  
  timezones.forEach(tz => {
    html += '<li>' + tz + '</li>';
  });
  
  html += '</ul></div></div>';
  
  const htmlOutput = HtmlService.createHtmlOutput(html)
      .setTitle('Available Timezones')
      .setWidth(300);
  
  SpreadsheetApp.getUi().showSidebar(htmlOutput);
}

/**
 * Test function for development
 */
function testConvertTimezone() {
  // Test various scenarios
  const now = new Date();
  console.log('Testing CONVERT_TIMEZONE function...');
  
  // Test 1: UTC to New York
  const result1 = CONVERT_TIMEZONE(now, 'America/New_York', 'UTC');
  console.log('UTC to NY:', result1);
  
  // Test 2: Invalid timezone
  const result2 = CONVERT_TIMEZONE(now, 'Invalid/Timezone');
  console.log('Invalid timezone:', result2);
  
  // Test 3: String datetime
  const result3 = CONVERT_TIMEZONE('2025-05-22 12:00:00', 'Europe/London', 'America/New_York');
  console.log('String datetime:', result3);
}