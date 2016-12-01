# Easy Node Authentication

We will be using Passport to authenticate users locally, and Facebook

#### Upgraded To Express 4.0
#### mongodb install 3.x
https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu/
#### Nodejs and npm install
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server
## Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone git@github.com:scotch-io/easy-node-authentication`
2. Install packages: `npm install`
3. Change out the database configuration in config/database.js
4. Change out auth keys in config/auth.js
5. Launch: `node server.js`
6. Visit in your browser at: `http://localhost:8080`


# We are using authentication (Facebook strategy) and testing with Mocha and Supertest.

/home/#workspacegroup/easy-node-authentication/tests/unit/routes-test.js
- mocha tests --recursive --watch

# Swagger
You can check swagger docs :  http://localhost:8080/docs/#/
![alt tag](https://github.com/hasnen/node-poc-project/blob/master/swagger-screenshort.png)







