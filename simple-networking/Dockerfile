FROM node:6.11.2-alpine

ADD . /app
WORKDIR /app

RUN npm install

# Expose opens this port for INTER-CONTAINER communication.
# In this example this would not be needed since there will be only one container
expose 30000 

ENTRYPOINT ["node", "app.js"]

