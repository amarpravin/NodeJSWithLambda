# NodeJSWithLambda
NodeJS api which connects to PostgreSql and AWS Lambda deployment setup

# Project Sturcture

```

This is an restful api which is using NodeJS which connects PostgreSql database to get "order" information

By using sequelize & sequelize package, configured database connection and created project sturcture using CLI

config : this folder has database related information

models : which has model info. e.g. Order, Item

controllers : controller has all the method which could be used for api call

routes : routes is used to route api based on url.

app.local.js : is used to run NodeJS api locally.

```

# Steps to Deploy API into AWS Lambda

```
1. To deploy into AWS Lambda, I used serverless npm package.
2. first, install & config serverless framework like below
    $ npm install -g serverless
    $ sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY
    $ npm install --save serverless-http
3. there will be slightly change into app.js which will replace app.listen()
4. serverless.yml will have AWS related info.
5. In case of production, you can create a secret json file and configure into serverless.yml file
6. "sls deploy" will deploy into AWS

```