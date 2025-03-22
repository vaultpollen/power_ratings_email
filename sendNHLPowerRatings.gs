function sendNHLPowerRatings() { // Change the function name depending on the sport, if you want
  // Open the active Google Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('NHL'); // Change this to whatever sheet you want to pull from
  
  // Get the range for columns A and B (adjust row range as needed)
  var range = sheet.getRange(1, 1, sheet.getLastRow() - 1, 2); // (start row, start column, number of rows, number of columns)
  var data = range.getValues();

  // Create the email body with only the content of columns A and B
  var emailBody = "";
  
  for (var i = 0; i < data.length; i++) {
    emailBody += data[i][0] + " - " + data[i][1] + "\n"; // Just the content of A and B
  }

  // Send the email
  var emailAddress = "youremail@gmail.com";  // Replace with your email
  var subject = "Daily NHL Power Ratings";
  GmailApp.sendEmail(emailAddress, subject, emailBody);
}
