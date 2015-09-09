# TestProject02 <br>
Single page app for generating posts. The key feature of this app is to take user input and generate a post with a time stamp. When a post is clicked, it generates a view. This project focuses on the UI and has a time limit to develop as much as possible within 2 days.<br>


  This app has a simple, easy to understand layout. Navigation on the top with a login form. The list of posts generates down the center. Then a footer at the bottom with the logo and a status showing whether the user is logged in or not. The login features do not work in this app as this is more of a UI focused project. Working features for this app include the ability to create a post, click existing posts and view them in a modal that slides down to the center of the page. <br><br>
  A "new post" button is provided on top and bottom of the list of posts to avoid having to scroll to it if the page is populated with many posts. The "new post" form requires an author name, post title, and content. I used angular's validation to disable the submit button until all fields are valid. $timeout is used to wait until the modal animation completes before clearing the form fields. If they are cleared immediately before the modal animates, the form becomes invalid and the modal won't animate. The new post gets updated to the page below the existing posts with a new timestamp. The posts can be clicked to be displayed in a seperate view (modal that slides down the same way as the form). <br><br>
I added the bootstrap modal for the form and also added the angularModalService found at <a href="https://github.com/dwmkerr/angular-modal-service">https://github.com/dwmkerr/angular-modal-service</a> for displaying each post when clicked on. I think this shows my ability to adjust to alternative methods to produce the same result.

<ol>To view the app:
<li>Clone the repository (Can click "Clone in Desktop")</li>
<li>in terminal, type "cd TestProject02" to navigate to the root folder of the app</li>
<li>then type "node nodeserver" to start the local server</li>
<li>in browser, go to "localhost:8000/app/index.html" to view the app</li>
</ol>



/TestProject02/app/index.html <br>
Directory to the app

/TestProject02/app/css/ <br>
Will contain any custom css outside of bootstrap

/TestProject02/app/js/ <br>
Contains the angular code for the app including the controllers and services.

/TestProject02/app/partials/ <br>
Contains the html for the modal used with angularModalService

/TestProject02/bower_components <br>
Scripts for AngularJS, Bootstrap, and angular-route where installed with bower and are stored in bower_components<br>

/TestProject02/node_modules <br>
node_modules contains express which is associated with nodeJS for running the local server
