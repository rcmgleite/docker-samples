# Docker volumes

## Intro
Docker volumes are a way to bypass the union filesystem. They are simply directories on the host machine
that are mapped into the container. 
- If you change files inside a volume, this changes will persist even if the container 
  is deleted.
- Changes are not part of the union filesystem. Therefore, it makes no sense to commit changes in a container 
  if this changes were only applied in the volume.

1.  Build
```
$ docker build -t volumes-sample .
```

2.  Run
```
$ docker run -p 30000:30000 volumes-sample
```

3.  Where is this volume directory anyway?
```
$ docker inspect -f '{{ .Mounts }}' <container_id>
```

4.  If you kill your container, your volume will still be there =0

5.  Now, if you want to run a new container using the same image and reuse the volume of the previous container, do:
```
$ docker run -p 30000:30000 --volumes-from <old_container_id> volumes-sample
```

6.  Another way to use volumes is by creating them before use
```
$ docker volume create node-log-dir
```

Now, 
```
$ docker volume ls
```
will show you node-log-dir volume

7.  Now you can attach this volume to your container like this:
```
$ docker run -p 30000:30000 -v node-log-dir:/app/server-logs volumes-sample
```
