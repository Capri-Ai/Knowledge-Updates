# Google Sheet to External Database Integration

This script is designed to send data from a Google Sheet to an external database. It uses Google Apps Script, which is a scripting language for Google Sheets, to send an HTTP request to an external API with the data from the sheet.

## Installation

To use this script, follow these steps:

1. Open your Google Sheet.
2. Click on the **Tools** menu and select **Script editor**.
3. Create a new script file or open an existing one.
4. Copy and paste the code from this repository into the script editor.
5. Replace the `url` variable in the script with the URL of your external database.
6. Modify the `capri_token` variable with your own token to authenticate with the database.
7. Save the script by clicking on the **File** menu and selecting **Save**.

## Usage

Once you have installed the script, it will automatically send an HTTP request to your external database whenever a row is updated in your Google Sheet. The script will send an object containing all the data in the sheet, along with the row number that was updated and the spreadsheet ID.

## License

This script is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

If you would like to contribute to this script, please open an issue or a pull request on the [GitHub repository](https://github.com/yourusername/your-repository).
