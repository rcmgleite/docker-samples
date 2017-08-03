# Docker networking

1.  Create a new network
```
$ docker network create app
```

2.  Inspect the newly created network
```
$ docker network inspect app
```

3.  Run docker inside that network
```
$ docker run -d --net=app --name db sinatra-redis
```

4.  Inspect the network again with
```
$ docker network inspect app
```

5.  Run the sinatra application inside the 'app' network aswell
```
docker run -p 4567 --net=app --name sinatra-app -it sinatra bash
```
This last command will start the sinatra app and open a terminal session so you
can run some other commands.


Now, inside the container:
6.  Install some network helpers with:
```
$ apt-get install -y dnsutils iputils-ping
```

7.  Find the ip address of the redis container inside the app netowork with:
```
$ nslookup db
```

8.  Now let's try to access our sinatra server
```
$ curl -i -H 'Accept: application/json' -d 'name=Foo&status=Bar' http://localhost:<port>/json
```

```
$ curl -i http://localhost:<port>/json
```
