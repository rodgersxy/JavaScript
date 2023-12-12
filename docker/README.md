To check if docker is running   
```
sudo systemctl status docker   
``` 
Build the Docker image   
```
sudo docker build -t my-docker-app .   
```
Run the Docker container   
```
sudo docker run -p 3000:3000 my-docker-app   
```

Docker tutorial   

https://testdriven.io/blog/docker-for-beginners/

## What is docker?   
Docker is a tool for running application in an isolated environment   
*Docker is now a standard for software deployment 
## Container VS VM  
Containers are an abstraction at the app layer that packages code and dependencies together. Multiple containers can run on the same machine and share the OS Kernel with other containers, each running as an isolated process in user space   
 While Virtual Machines VM - Are an abstraction of physical hardware turning one server into many servers. The hypervisor allow multiple VMs to run on single machine. Each VM includes a full copy of an operating system, the application,necessary binaries and libraries - taking up tens of GBs. VMs can also be slow to boot.

 ## Benefit of Docker  
 * Run container in seconds not minutes  
 * Less resources results less disk space  
 * Uses less memory  
 * Dos not need full OS   
 * Deployment  
 * Testing   

 ## Docker Image  
 Image is a template for creating an environment of your choice  
 It has everything you need to run your Apps  
 Image is also a snapshot
 An image contains an OS,Software, App Code   

 ## Container  
 Container is simply a running instance of an image  
 ### example how run:  
 docker run -d nginx:latest  
 docker container ls -------- (to check if it is running)  
 Preferred way of check list of running container ------ (docker ps)   
 docker stop (CONTAINER ID)   ---- to stop the container  
 docker run -d -p 8080:80    ------- to specify or map port
 docker run -d -p 8080:80 -p 3000:80 ----------- to map multiple ports   
 docker stop suspicious_villani    | TO START AND STOP CONTAINER USING CONTAINER NAME INSTEAD OF CONTAINER ID
 docker start suspicious_villani   |    
 docker rm (CONTAINER ID) ------- To remove the specific container
 docker ps -a ---------- To list all containers  
 docker ps -aq and docker rm $(docker ps -aq) =========== To delete all containers   
 docker rm -f $(docker ps -aq)  -------------- To force delete all container   

 ### Show All Containers With Pretty-Print Formatting   
 docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Networks}}\t{{.State}}\t{{.CreatedAt}}"


 ### page served by nginx and docker
  docker run --name website -v $(pwd):/usr/share/nginx/html:ro -d -p 8080:80 nginx   
  * container name -- website
  * pwd(current directory)   

  * docker run --name website-copy --volumes-from website -d -p 8081:80 nginx  (to copy content from website to website-copy/basically to create a copy running in a different port)   
