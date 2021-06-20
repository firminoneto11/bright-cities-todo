<!---->
<div align='center'></div>
<!---->
<div align='center'>

![GitHub](https://img.shields.io/github/license/firminoneto11/bright-cities-todo?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/firminoneto11/bright-cities-todo?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/firminoneto11/bright-cities-todo?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/firminoneto11/bright-cities-todo?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/firminoneto11/bright-cities-todo?style=for-the-badge)
![Website](https://img.shields.io/website?down_message=Offline&style=for-the-badge&up_message=Online&url=https%3A%2F%2Fbright-cities-todo.herokuapp.com%2F)

</div>
<div align='center'><h1>bright-cities-todo</h1></div>
<div align='center'><h2>A Todo list web application using the Django Framework and PostgreSQL database.</h2></div>
<hr>

<!--Project's Goal-->
<div align='center'><h2>🤔 Project's Goal 🤔</h2></div>
<p>This project is a To Do list web application, where users can create, read, update and delete their tasks. Basically, a CRUD kind of application.<br>
With a simple and nice interface, users can easily administrate their 'to do' tasks and never get disorganized!
</p>
<hr>

<!--Technologies-->
<div align='center'><h2>💻 Technologies 💻</h2></div>
<p>The technologies used to built this project were:</p>

- Python
- Django
- PostgreSQL
- HTML
- CSS
- Javascript

<p>In the <a href="./requirements.txt" target="_blank">requirements.txt</a> file you can find all the libraries and dependencies for the Python language.</p>
<hr>

<!--Deploy and Demo-->
<div align='center'><h2>🚧🚦 Deploy | Demo 🚦🚧</h2></div>
<p>This project was deployed on the Heroku cloud service, and you can access the demo of it <a href="https://bright-cities-todo.herokuapp.com/" target="_blank">here</a>.<br>
Also, in order to have the best experience using the application, try to open it on either a desktop or notebook, because i haven't optimized the responsiveness for mobile devices yet, but i will do so soon.
</p>
<hr>

<!--Screens-->
<div align='center'><h2>👻 App screens 👻</h2></div>
<p>This web application is divided by the operations that exists within the code:</p>

- Creating a task
- Listing the task(s)
- Updating and deleting the tasks

<p>First, if there aren't any tasks registered in the database, the following screen will be displayed:</p>

<img src="./readme_content/gif_1.gif" alt="A gif showing when there aren't any tasks">

<h2>Creating a task</h2>
<p>When the 'New task' button is pressed, the user will be able to create a new task. There are a few things to notice:</p>

- The task name field is not optional and it can have a length up to 25 characters;
- The task's description is optional and it can have a length up to 255 characters;

<p>Bellow we can see the process of creating a task.</p>

<img src="./readme_content/gif_2.gif" alt="A gif showing when the user is creating a task">

<h2>Listing the tasks</h2>
<p>After a successful task registration, the user will be redirected to the home page, which will now show the tasks that are stored in the database. By default, every new task is checked as 'To Do'. Check out bellow how the tasks are displayed.</p>

<img src="./readme_content/gif_3.gif" alt="A gif showing the tasks being listed.">

<h2>Updating the tasks</h2>
<p>Now that we have some tasks stored, if the user clicks on any of the tasks that are listed, the application will redirect the user to the page where he/she can both update and delete the task that was selected.<br>
Bellow we can see the update process.
</p>

<img src="./readme_content/gif_4.gif" alt="A gif showing the update process">

<h2>Deleting the tasks</h2>
<p>And finally, we can do the same process, select a task of the list and choose the 'delete' option. This will delete the selected task from the database.<br>
Check the delete process bellow.
</p>

<img src="./readme_content/gif_5.gif" alt="A gif showing the delete process">

<p>Also, after every successful update and delete, the user will be redirected to the home page, which is dynamic, meaning that if there are any task in the database, it will show them, otherwise, it will show a nice message instead.</p>
<hr>

<!--Author-->
<div align='center'><h2>👾 Author 👾</h2></div>
<p>Made with ❤ by <a href="https://github.com/firminoneto11" target="_blank">Firmino Neto</a>.</p>