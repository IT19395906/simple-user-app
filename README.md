# use-app

create, read, update, delete

React.js web

_dependencies_

```bash
npm install react-router-dom
npm install bootstrap
npm install axios
npm install json-server
```
first create db.json file outside src folder
this single file act as database

run json-server
```bash
npx json-server --watch db.json
```
just 
``` json-server --watch db.json``` won't work you have to use npx or you can install globally typing ```npm install -g json-server``` 
after that can run ```json-server --watch db.json```
