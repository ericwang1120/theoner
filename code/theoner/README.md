# Theoner
This project is the official website of [theoner](http://www.theoner.com/angular2) which is rewitten into Angular 2 and PHP Laravel. Here is the back-end documentation.

## Getting Started
To get you started you can simply clone the `theoner` repository and install the dependencies:

### Prerequisites
You need git to clone the `theoner` repository. You can get git from [here](https://git-scm.com/).

We also use a number of Node.js tools to initialize and test `theoner`. You must have Node.js
and its package manager (npm) installed. You can get them from [here](https://nodejs.org/en/).
### Clone `theoner`
Clone the `theoner` repository using git:
```
git clone https://github.com/xiaobica/theoner.git
cd theoner/code/theoner
```
### Install Dependencies
we can simply do:
```
npm install
```
## Command Lines
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
Run `npm run build` to build the project on production environment. The build artifacts will be stored in the `dist/` directory.  
Run `npm run build-dev` to build the project on development environment. The build artifacts will be stored in the `dist/` directory.  
Config files are shown blow

```
"webpack.config.js" for "npm start"
"webpack.config.prod.js" for "npm build"
"webpack.config.dev.js" for "npm build-dev"
```


## Configurations
There are some webpack config files `webpack.config.js`, `webpack.config.dev.js` and `webpack.config.prod.js`. Some constants can be configured.  
The 'baseHref' constant can config the 'baseHref' in 'index.html'.
```
const baseHref = "";
```
The 'ENV' constant can config environment. If it is set to 'production', angular will run on production mode.
```
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
```
The 'API_URL' constant is used to config the url of API server.

```
const API_URL = process.env.API_URL = 'http://localhost:8000/';
```

