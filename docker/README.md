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
 docker container ls (to check if it is running)  
 Preferred way of check list of running container (docker ps)