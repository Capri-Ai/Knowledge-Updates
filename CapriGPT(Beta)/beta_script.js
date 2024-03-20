function sendHttpRequest(e) {
    // Replace this with the URL of your external database
    var url = "https://api.capriai.us/google-sheet/webhook/update";
  
    // Get the active sheet and range
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = e.range;
    var fullRange = sheet.getDataRange();
    var newValue = e.value;
  
    // Get the row number that was updated
    var startRow = range.getRow();
    var endRow = range.getLastRow();
    
    // Get the spreadsheet ID
    var spreadsheetId = sheet.getParent().getId();
    var newData = range.getValues();
  
    // Create an object containing all the data in the sheet
    var data = [];
    var values = fullRange.getValues();
    for (let i = 0; i < values.length; i++) {
      const obj = {};
      values[i].forEach((value, index) => {
        obj[index] = value;
      });
      data.push(obj);
    }
  
    // Create an object containing the request parameters
    var params = {
      method: "post",
      payload: JSON.stringify({
        rowNumber: startRow,
        newValue,
        endRow,
        task : 'update',
        spreadsheetId: spreadsheetId,
        data: data,
        newData: newData,
        capri_token : 'YOUR_CAPRI_TOKEN'
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // Make the HTTP request
    UrlFetchApp.fetch(url, params);
  }
  