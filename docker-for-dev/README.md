# Docker for development
Docker can be very useful when your team members like to complicate things by using different development environments (eg: different OS).
More than that, it's easy to make your dev environment almost identical to your production environment, avoiding things like "Worked on my machine".

The idea here is to map your project source code inside a container and always run your project from this container.

1.  Build
```
$ docker build -t nodejs-dev .
```

2.  Running your app inside the container but coding in the host machine
```
docker run -p 30000:30000 -v $(pwd):/opt/nodeapp nodejs-dev
```

Now, all changes you made using your local env will be used inside the container.

## Explanation
the '-v'(--volume) flag in docker run command will map a directory in the host machine to the directory /opt/nodeapp inside the container.
Other forms of docker volumes will be seen in other examples.

By doing so, your host machine doesn't need, for example, all the libraries needed by the project.
You'll just need regular stuff configured like git, your IDE, aws/git/dockerhub credentials, etc...


