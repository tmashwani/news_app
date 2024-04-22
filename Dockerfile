React Application on Docker Container Environment 

1. code and packet.json file
2. Docker Installation and Configuration on Server Side 
3. Dockerfile 4. Required Node Version Installation and Configuration 
5. Docker Image 
6. Docker Container 
7. Nginx web server installation and configuration 
8. NodeJS API configuration i.e. environment file wwwww
9. React Build 10. DNS A Record


Building the Docker Image
Run the following command to build the Docker image for the project:
docker build -t news-aggregator-app .

This command creates a Docker image named news-aggregator-app based on the instructions in the Dockerfile located in the project directory.

Running the Docker Container
Once the Docker image is built, you can run a Docker container using the following command:
docker run -d -p 3000:3000 --name news-aggregator-container news-aggregator-app
This command starts a Docker container named news-aggregator-container based on the news-aggregator-app image. It maps port 3000 of the container to port 3000 on the host machine.

Accessing the Application
You can now access your frontend application by opening a web browser and navigating to http://localhost:3000.