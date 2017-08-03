## Usefull commands
1.  Building the image
```
$ docker build -t simple_image .
```

2.  List images
```
$ docker images
```

3.  Running the container with an attached terminal
``` 
$ docker run -it simple_image bash
```  
-i: keeps STDIN open from the container
-t: asign a pseudo tty to the container

4.  Inspect - shows some informations about the container (eg: volumes, executed commands, layers, etc...)
```
$ docker inspect simple_image
```

5.  List running containers
```
$ docker ps
```

6.  Stop a container
```
$ docker kill <container_id>
```

7.  List containers that already exited - When a container is finished, it's not automatically deleted from the host machine
```
$ docker ps -a
```

## Some networking ftw
1.  Traceroute to see that all packets will start from the continers internal IP and the next hop will be docker0 interface on the host machine
Inside the container
```
$ traceroute google.com
```
On host
```
$ ifconfig
