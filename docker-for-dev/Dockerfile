FROM node:6.11.2-alpine

WORKDIR /opt/nodeapp

# Expose opens this port for INTER-CONTAINER communication.
# In this example this would not be needed since there will be only one container
expose 30000 

CMD sh -c "npm install && ./node_modules/nodemon/bin/nodemon.js app.js"
