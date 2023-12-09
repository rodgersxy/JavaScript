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