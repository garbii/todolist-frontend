# ToDoList FrontEnd Application

Application is developed in angular2 with version 9.0.0.
The application is developed in VSC IDE.

There are two components for the application business logic.

1- The first one is the component that lists all tasks.

2- The second one is used for creating new task to add list. 

## Deploying application in 3 ways.

### *1- To run in local environment(in VSC, Intellij ect.)*
```
Run the following command to download dependencies
> npm install

Run test cases by the following command.
> npm test

Launch the server with the following command.
> npm start
```
Then open your browser on *http://localhost:4200/*

### *2- To run in K8S environment execute the following commands on application root directory.*
```
Create image:
> docker build . -t todolist-frontend:1.0.0-SNAPSHOT

Deploy on K8S:
> kubectl apply deployment.yaml
```
Then open your browser on *http://localhost:30008/*

### *3- Using CI/CD with Circleci Environment* 

Each commit to Githup Repository(https://github.com/garbii/todolist-frontend)
will trigger the Circleci CI/CD job. CI/CD job will process the following steps.
```
> 1- Githup send notify to circleci to make new build.

> 2- Circleci checkout the code

> 3- Checking for package.json

> 4- Installing NPM packages

> 5- Setup environment for image name and tag

> 6- Build and push docker image to DockerHub 

> 7- Deploy image on AWS using Ansible
```
Then open your browser on *http://ec2-15-206-178-60.ap-south-1.compute.amazonaws.com:30008/*
