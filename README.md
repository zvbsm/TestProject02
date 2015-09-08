# TestProject02 <br>
Single page app for generating posts. The key feature of this app is to take user input and generate a post with a time stamp. When a post is clicked, it generates a view. This project focuses on the UI.<br>

Currently, this page has a navigation menu at the top, the posts displayed in the body below, and a section on the right side that lists highlighted posts. <br>
A "new post" button is provided on top and bottom of the list of posts to avoid having to scroll to it if the page is populated with many posts. When the new post button is clicked, a bootstrap modal slides down with a form to enter name, post title, and the content of the post. It then adds the new post to the page below the existing posts with a new timestamp. <br> 
Each post has a button for highlighting. When a post is clicked, it generates a summarized version of the post on the right hand side. Basically a sort of "bookmark" function. I'd make it so the highlighted post would be clicked on to get a full view of it either in a modal or seperately on it's own page. Another option I would consider is making it scroll to the post it's associated with on the main page. <br>
Initially, form validation was working correctly and the form was not able to submit without being completed, but somehow the validation has stopped working. This is an issue I'll be debugging next. <br>

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
