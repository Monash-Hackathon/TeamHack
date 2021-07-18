# Dream Job
Dream Job is a mobile web app that allows user to find out their career pathway, and also to search for jobs.

# Description
Dream Job has 2 main functions - performing a personality test and job searching. 

A RIASEC Personality Test was carried out to find out the user's personality. Based on the results from the personality test, the app would recommend career pathways to the user. The list of recommended pathways is stored in a hard-coded dictionary which can be searched upon.

The job searching functionality was carried out by 2 APIs, Adzuna API and Open Cage Geocoding API. Adzuna API is used to carry out the job searching, whereas Open Cage Geocoding API is used to locate the location's country.

The major drawback of this app is that a lot of the code was hard-code. We were unable to find any APIs that were free to perform a personality test, so the only other way was to hard-code all of the questions into the app as well as the results into the app. 

The second drawback of this app is that the Adzuna API only works in certain countries. We were unable to perform an error checking to show to the user if an error occured. 

# Installation
Dream Job does not need to be installed since it is a mobile web application, and can support devices on different platforms. All you need to have a web browser(preferably Google Chrome) to open the HTML files to run the program.

# Usage
To use the app, open up welcome.html. It will show a welcome message and transition to a page with a button, click on the button to enter the app.

Once you enter the main page, there will be a navigation bar at the top to allow user to switch between different features easily, and also there will be a carousell which showcase all the features as well.

To do the RIASEC Personality Test, click on the "Test Now" button, and it will redirect you to "test.html". Complete all the questions and press the "Submit" button at the bottom of the page, and it will redirect you to "history.html" that shows you your Personality Result as well as some of the recommended career pathways. The app will have memory of the latest personality result as the latest data is stored in the web browser's local storage. You can always come back to view this page by clicking on the "History" on the navigation bar. However, if app detects no records of the tests, it will ask you to perform the test. 

For job searching, press "Search Now" on the navigation bar, and it will redirect you to "jobSearch.html". Fill in the job, location and the job type for the app to begin searching for jobs. However, the app only works in certain countries, so it will notify the user whenever no results are found. 

# Credits
Chok Ming Jie
Lee Xue Qi
Ken Wilbert Osman
Lim Wen Jun Kevin

 