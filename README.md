# TestProject02 <br>
Single page app for generating posts. The key feature of this app is to take user input and generate a post with a time stamp. When a post is clicked, it generates a view.<br>

Currently, this page has a navigation menu at the top, the posts displayed in the body below, and a section on the right side that lists highlighted posts. I may change that part later depending how other parts develop. Each post has a button that can be clicked to highlight that post, which it then is displayed in the section on the right. So far, I plan to impliment angular route to handle the navigation on the app, then add the page that would hold the form for creating a new post.<br>

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

/TestProject02/bower_components <br>
Scripts for AngularJS, Bootstrap, and angular-route where installed with bower and are stored in bower_components<br>

/TestProject02/node_modules <br>
node_modules contains express which is associated with nodeJS for running the local server
