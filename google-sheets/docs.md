```
function doGet() {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const worksheet = spreadsheet.getSheetByName("Sheet1");
  const data = worksheet.getRange("A1").getDataRegion().getValues();
  const headers = data.shift();

  //We need an array of objects, and this is how I want my data [{id:1, firstName;"Tony"}, {}]

  const jsonArray = data.map(r => {
    let obj = {};
    headers.forEach((h,i) => {
      obj[h] = r[i];
    });
    return obj;
  });

  const response = [{data: jsonArray}];
  // const response = [{status: "cool!"}];

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);

}
```