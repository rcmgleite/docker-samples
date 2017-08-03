FROM ubuntu:16.04

RUN apt-get update -y && \
  apt-get install -y redis-server redis-tools

EXPOSE 6379

ENTRYPOINT ["/usr/bin/redis-server"]
CMD []
