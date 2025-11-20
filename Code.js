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
 * @param {Date|number|string|Array} datetime The datetime or range of datetimes to convert.
 * @param {string} timezone_target The target timezone (tz database name).
 * @param {string} [timezone_source='UTC'] The source timezone (tz database name).
 * @param {string|boolean} [options] Optional formatting configuration. Accepts TRUE/FALSE, a Moment format string,
 *     or a JSON string containing `inputFormat`, `outputFormat`, and `returnAsText` keys.
 * @return {Date|string|Array} The converted datetime(s) or formatted string(s).
 * @customfunction
 */
function CONVERT_TIMEZONE(datetime, timezone_target, timezone_source = 'UTC', options) {
  if (typeof MomentTimezone === 'undefined' || typeof MomentTimezone.tz === 'undefined') {
    throw new Error('MomentTimezone library not loaded. Please check library configuration.');
  }

  if (Array.isArray(timezone_target) || Array.isArray(timezone_source) || Array.isArray(options)) {
    throw new Error('Range arguments are only supported for the datetime parameter.');
  }

  const parsedOptions = normalizeOptions(options);
  const normalizedTargetTz = validateTimezone(timezone_target, 'target');
  const normalizedSourceTz = timezone_source ? String(timezone_source).trim() : 'UTC';
  const effectiveSourceTz = normalizedSourceTz === '' ? 'UTC' : normalizedSourceTz;

  if (effectiveSourceTz.toUpperCase() !== 'UTC') {
    validateTimezone(effectiveSourceTz, 'source');
  }

  if (Array.isArray(datetime)) {
    return datetime.map(function(row) {
      return row.map(function(cell) {
        try {
          return convertSingleValue(cell, normalizedTargetTz, effectiveSourceTz, parsedOptions);
        } catch (error) {
          return new Error(error.message);
        }
      });
    });
  }

  return convertSingleValue(datetime, normalizedTargetTz, effectiveSourceTz, parsedOptions);
}

function normalizeOptions(options) {
  const defaults = {
    returnAsText: false,
    outputFormat: '',
    inputFormat: ''
  };

  if (options === undefined || options === null || options === '') {
    return defaults;
  }

  if (options instanceof Date || typeof options === 'number') {
    throw new Error('Options argument must be a JSON string, boolean, or format string.');
  }

  if (typeof options === 'boolean') {
    defaults.returnAsText = options;
    return defaults;
  }

  if (typeof options === 'object') {
    if (options.inputFormat) {
      defaults.inputFormat = String(options.inputFormat);
    }
    if (options.outputFormat) {
      defaults.outputFormat = String(options.outputFormat);
      defaults.returnAsText = true;
    }
    if (typeof options.returnAsText === 'boolean') {
      defaults.returnAsText = options.returnAsText;
    }
    return defaults;
  }

  if (typeof options === 'string') {
    const trimmed = options.trim();

    if (!trimmed) {
      return defaults;
    }

    const lowercase = trimmed.toLowerCase();

    if (lowercase === 'true' || lowercase === 'false') {
      defaults.returnAsText = lowercase === 'true';
      return defaults;
    }

    if (lowercase === 'return_text') {
      defaults.returnAsText = true;
      return defaults;
    }

    if (trimmed.charAt(0) === '{') {
      try {
        const parsed = JSON.parse(trimmed);
        return normalizeOptions(parsed);
      } catch (error) {
        throw new Error('Options JSON could not be parsed. Please verify the syntax.');
      }
    }

    defaults.returnAsText = true;
    defaults.outputFormat = trimmed;
    return defaults;
  }

  throw new Error('Unsupported options argument type.');
}

function convertSingleValue(value, timezone_target, timezone_source, options) {
  if (value === null || value === '') {
    throw new Error('Invalid datetime: empty cell.');
  }

  let momentObj;

  if (value instanceof Date) {
    momentObj = createMomentFromDate(value, timezone_source);
  } else if (typeof value === 'number') {
    momentObj = createMomentFromSerial(value, timezone_source);
  } else if (typeof value === 'string') {
    momentObj = createMomentFromString(value, timezone_source, options.inputFormat);
  } else {
    throw new Error('Invalid datetime: must be a Date, number, or string.');
  }

  if (!momentObj.isValid()) {
    throw new Error('Invalid datetime: could not parse the input value.');
  }

  const convertedMoment = momentObj.tz(timezone_target);

  if (options.returnAsText) {
    const format = options.outputFormat || 'YYYY-MM-DD HH:mm:ss z';
    return convertedMoment.format(format);
  }

  return convertedMoment.toDate();
}

function createMomentFromDate(dateValue, timezone_source) {
  if (timezone_source.toUpperCase() === 'UTC') {
    return MomentTimezone.utc(dateValue);
  }

  return MomentTimezone.tz(dateValue, timezone_source);
}

function createMomentFromSerial(serialValue, timezone_source) {
  const GOOGLE_SHEETS_EPOCH = new Date(1899, 11, 30);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const dateValue = new Date(GOOGLE_SHEETS_EPOCH.getTime() + serialValue * millisecondsPerDay);
  return createMomentFromDate(dateValue, timezone_source);
}

function createMomentFromString(stringValue, timezone_source, inputFormat) {
  const trimmed = String(stringValue).trim();

  if (!trimmed) {
    throw new Error('Invalid datetime: empty string.');
  }

  if (inputFormat) {
    if (timezone_source.toUpperCase() === 'UTC') {
      return MomentTimezone.utc(trimmed, inputFormat, true);
    }

    return MomentTimezone.tz(trimmed, inputFormat, timezone_source, true);
  }

  const isoFormat = typeof MomentTimezone.ISO_8601 !== 'undefined' ? MomentTimezone.ISO_8601 : undefined;

  if (timezone_source.toUpperCase() === 'UTC') {
    return isoFormat ? MomentTimezone.utc(trimmed, isoFormat, true) : MomentTimezone.utc(trimmed);
  }

  return isoFormat
    ? MomentTimezone.tz(trimmed, isoFormat, timezone_source, true)
    : MomentTimezone.tz(trimmed, timezone_source);
}

function validateTimezone(timezone, label) {
  if (!timezone || typeof timezone !== 'string') {
    throw new Error(`Invalid ${label} timezone: must be a string.`);
  }

  const trimmed = timezone.trim();

  if (!trimmed) {
    throw new Error(`Invalid ${label} timezone: empty string.`);
  }

  if (!MomentTimezone.tz.zone(trimmed)) {
    throw new Error(`Invalid ${label} timezone: '${trimmed}' is not a recognized IANA timezone.`);
  }

  return trimmed;
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