# Networking

1.  Build
```
$ docker build -t nodejs-sample .
```

2.  Running without publishing any ports
```
$ docker run nodejs-sample
```
By running this container like this, we wont be able to access the webserver from outside the container ='(

3.  Fixing the problem
```
$ docker run -p 30000 nodejs-sample
```
Trying it out now will again result in sadness and shame. By using -p to publish port 30000, although the port 30000 inside the container is published, 
it's mapped to another port on host.

4.  Finding out the correct port
```
$ docker port <container_id>
```
:)

5.  What if you really wanted to use port 30000 on yout host machine?
```
$ docker run -p 30000:30000 nodejs-sample
```

6.  We could also get all container network information using
```
$ docker inspect <container_id>
```

7.  TODO - create more complex examples
