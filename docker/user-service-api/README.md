# dockerize this node application written in express js   

step1: create Dockerfile with the command  
step2: docker build -t user-service-api:latest .   
step3: docker run --name user-api -d -p 3000:3000 user-service-api:latest  
step4: docker ps  
