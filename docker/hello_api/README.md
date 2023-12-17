## Build the Docker Image   
docker build -t my-node-api .  

## Run the Docker Container   
docker run -p 3000:3000 my-node-api  

## to rebuild the Docker image and restart the container to apply the changes. Here are the steps:  
docker ps         # Find the CONTAINER_ID of your running container    
docker stop CONTAINER_ID    

## Rebuild the Docker image:  
docker build -t my-node-api .  
## Run the Docker container again:   
docker run -p 3000:3000 my-node-api   
