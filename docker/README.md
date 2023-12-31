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

 ## Docker Daemon  
 Docker Daemon is the boss and it is a background process that manages Docker images, containers, networks, and storage volumes  

 ## Docker Image  
 Image is a template for creating an environment of your choice  
 It has everything you need to run your Apps  
 Image is also a snapshot
 An image contains an OS,Software, App Code   

## Dockerfile  
Dockerfile has the instruction or commands that explains to the docker how to and what to build  cl

 ## Container  
 Container is simply a running instance of an image  
 ### example how run:  
 docker run -d nginx:latest  
 docker container ls -------- (to check if it is running)  
 docker container ls --all -- (To see all the runnable containers existing in your system)   
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
 ### docker images  
 docker images to show all top-level images, their repository, tags, and their size.  
 ### docker build  
 This command is used to build an image from a Dockerfile  
 ### Build from local machine  
 When you have the Dockerfile in your host machine, navigate to the folder and run  
 ```
 docker build -t image_name:tag  
 ```  
 ### Build from GitHub or remote URL  
 ```
 docker build github.com/creack/docker-firefox   
 ```

 ### docker rmi  
 There are times when you want to clean up the unnecessary images stored in host/local machine. Use rmi to remove one or more images.   

 ### Show All Containers With Pretty-Print Formatting   
 docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Networks}}\t{{.State}}\t{{.CreatedAt}}"


 ### page served by nginx and docker
  docker run --name website -v $(pwd):/usr/share/nginx/html:ro -d -p 8080:80 nginx   
  * container name -- website
  * pwd(current directory)   

  * docker run --name website-copy --volumes-from website -d -p 8081:80 nginx  (to copy content from website to website-copy/basically to create a copy running in a different port)

![Screenshot from 2023-12-17 11-19-56](https://github.com/rodgersxy/JavaScript/assets/47353893/8f7e7876-d8fc-4d94-b739-007f1e0aab6b)

# IMAGE 2
![Screenshot from 2023-12-17 11-21-08](https://github.com/rodgersxy/JavaScript/assets/47353893/271be165-86bd-4684-bdab-c6e150c21695)

# IMAGE 3   
![Screenshot from 2023-12-17 11-22-06](https://github.com/rodgersxy/JavaScript/assets/47353893/0ee9d0f8-b681-4caf-9110-d98af79974b5)

# image 4  
![Screenshot from 2023-12-17 11-30-06](https://github.com/rodgersxy/JavaScript/assets/47353893/b08756f7-b972-4f14-b3f8-a9d2d199aa73)

# IMAGE 5  
![Screenshot from 2023-12-17 11-30-59](https://github.com/rodgersxy/JavaScript/assets/47353893/0384cb55-e3c4-4450-ac30-386e1257b1b6)





