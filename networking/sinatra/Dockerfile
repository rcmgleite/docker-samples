FROM ubuntu:16.04

RUN apt-get update -yqq && \
  apt-get install -y ruby ruby-dev build-essential redis-tools

RUN gem install --no-rdoc --no-ri sinatra json redis

ADD webapp_redis /opt/webapp

EXPOSE 4567

CMD [ "/opt/webapp/bin/wabapp" ]
