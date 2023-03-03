function sendHttpRequest(e) {
  // Replace this with the URL of your external database
  var url = "https://systems.capriai.us/knowledge/update";

  // Get the active sheet and range
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = e.range;

  // Get the row number that was updated
  var rowNumber = range.getRow();

  // Get the spreadsheet ID
  var spreadsheetId = sheet.getParent().getId();

  // Create an object containing all the data in the sheet
  var data = [];
  var values = sheet.getDataRange().getValues();
  var headers = values.shift();
  values.forEach(function(row) {
    var obj = {};
    row.forEach(function(value, index) {
      obj[headers[index]] = value;
    });
    data.push(obj);
  });

  // Create an object containing the request parameters
  var params = {
    method: "post",
    payload: JSON.stringify({
      rowNumber: rowNumber,
      task : 'update',
      spreadsheetId: spreadsheetId,
      data: data,
      capri_token : '<YOUR CAPRI TOKEN>'
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Make the HTTP request
  UrlFetchApp.fetch(url, params);
}
