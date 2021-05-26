# TodoList Application

Application is developed in angular2 with version 9.0.0.
The application is developed in VSC IDE.

There are two component for the application logics.

1- The component that list all tasks.

2- The component that is used for creating new task. 

## Run the application

1- Run in local environment(in VSC, Intellij ect.)

Use bellow command to download dependencies
> npm install

Run test cases by bellow command.
> npm test

Launch the server with bellow command.
> npm start

Then open your browser on *http://localhost:4200/*

2- To run in K8S environment execute bellow commands on application root directory.

Create image:

> docker build . -t todolist-frontent:1.0.0-SNAPSHOT

Deploy on K8S:

> kubectl apply deployment.yaml
