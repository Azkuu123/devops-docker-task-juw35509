# DevOps Docker Task

## Student Information

* **Student Name:** Azka Tanveer
* **Student ID:** juw35509
* **Course:** DevOps

## Application Description

This project is a simple Node.js web application containerized using Docker.

The application displays:

* Student Name
* Student ID
* Course Name
* A message confirming that the application is running inside a Docker container.

## Technologies Used

* Node.js
* Express.js
* Docker
* Docker Hub
* Git
* GitHub

## Project Files

* `server.js` — Main Node.js application
* `package.json` — Project information and dependencies
* `package-lock.json` — Dependency lock file
* `Dockerfile` — Instructions for building the Docker image
* `.dockerignore` — Files and folders excluded from the Docker image
* `.gitignore` — Files and folders excluded from Git
* `README.md` — Project documentation

## Dockerfile Explanation

The Dockerfile uses the following instructions:

* **FROM node:20-alpine** — Uses Node.js 20 Alpine as the base image.
* **WORKDIR /app** — Sets `/app` as the working directory inside the container.
* **COPY package*.json ./** — Copies the package files into the container.
* **RUN npm install** — Installs the required Node.js dependencies.
* **COPY . .** — Copies the application files into the container.
* **EXPOSE 3000** — Documents that the application uses port 3000.
* **CMD ["npm", "start"]** — Starts the application when the container runs.

## Docker Commands

### Build Docker Image

```bash
docker build -t azkatanveer/devops-task:v1 .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name devops-task azkatanveer/devops-task:v1
```

### Check Running Containers

```bash
docker ps
```

### View Container Logs

```bash
docker logs devops-task
```

### Inspect Container

```bash
docker inspect devops-task
```

### Remove Container

```bash
docker rm -f devops-task
```

### Remove Docker Image

```bash
docker rmi azkatanveer/devops-task:v1
```

### Pull Image from Docker Hub

```bash
docker pull azkatanveer/devops-task:v1
```

## Docker Hub

The Docker image was pushed to Docker Hub with the following image name:

```text
azkatanveer/devops-task:v1
```

Docker Hub Repository:

https://hub.docker.com/r/azkatanveer/devops-task

## How to Run

1. Pull the Docker image:

```bash
docker pull azkatanveer/devops-task:v1
```

2. Run the container:

```bash
docker run -d -p 3000:3000 --name devops-task azkatanveer/devops-task:v1
```

3. Open the following URL in a web browser:

```text
http://localhost:3000
```

## GitHub Repository

GitHub Repository:

https://github.com/Azkuu123/devops-docker-task-juw35509

## Screenshots

The following screenshots are included in the assignment documentation:

1. GitHub Repository
2. Dockerfile
3. `.dockerignore`
4. Successful Docker Image Build
5. Docker Images
6. Running Docker Container
7. Application in Browser
8. Docker Logs
9. Docker Inspect
10. Docker Hub Repository and `v1` Tag
11. Successful Docker Pull
12. Final Docker Container Execution
