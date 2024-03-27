# Google Sheet Extension For Capri Ai!

This script is designed to send data from a Google Sheet to our Capri ML Database. It uses Google Apps Script, which is a scripting language for Google Sheets, to send an HTTP request to an external API with the data from the sheet.

### [If you'd like a video walkthrough, you can find it here](https://systems.capriai.us/knowledge)

[You can sign up for this extension here!](https://beta.capriai.us)

[Learn more about this extension here!](https://youtu.be/Lj9lMDHGvJw)
## Installation

To use this script, follow these steps:

1. Open your Google Sheet.

2. Click on the **Extensions** menu and select **Apps Script**.
![Sheets Extension](https://storage.googleapis.com/paint-logo/sheets_extensions_appsript.png)

3. You should be taken to a code editor screen.

4. Copy and paste the code from this repository into the script editor.
![Code Editor](https://storage.googleapis.com/paint-logo/sheets_code_editor.png)

5. Modify the `capri_token` variable with your own token to authenticate with the database.

7. Save the script by clicking on the **Save** button.

8. In the top right, click **Deployments**

9. Click **New Deployment**
![New Deployment](https://storage.googleapis.com/paint-logo/sheets_new_deployment.png)

10. For Deployment Type (little gear in the top left), click **web app**
![Deployment Type](https://storage.googleapis.com/paint-logo/sheets_deployment_type.png)

11. In the **Description** field, just enter "New deployment" and hit "Deploy" in the bottom right

12. On the left-hand menu, click on the **Triggers** icon (small clock icon)
![Deployment Trigger](https://storage.googleapis.com/paint-logo/sheet_trigger.png)

13. Create a new trigger
    
14. Make sure your trigger settings have the following settings:
    - **Choose which function to run** is selected to "sendHttpRequest"
    - **Select event type** is set to "onEdit"
    - Click "Save" in the bottom right. **Grant permissions if asked!**
    ![Trigger Settings](https://storage.googleapis.com/paint-logo/apps_script_trigger.png)
    


