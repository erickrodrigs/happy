# Happy backend

## Commands used to create the project

* yarn init -y (init simple package.json)
* yarn add express 
* yarn add @types/express -D
* yarn add typescript -D
* yarn tsc --init (create tsconfig.json file)
* yarn add ts-node-dev -D (monitoring server and restarting it)

## Scripts

Add the following script in package.json to run server:

* ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts
