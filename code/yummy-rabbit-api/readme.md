# Theoner
This project is the official website of [theoner](http://www.theoner.com/angular2) which is rewitten into Angular 2 and PHP Laravel. Here is the back-end documentation.

## Getting Started
To get you started you can simply clone the `theoner` repository and install the dependencies:

### Prerequisites
You need git to clone the `theoner` repository. You can get git from [here](https://git-scm.com/).

We also use a number of Node.js tools to initialize and test `theoner`. You must have Node.js
and its package manager (npm) installed. You can get them from [here](https://nodejs.org/en/).

Requirements of Laravel 5.4. [Laravel Requirements](https://laravel.com/docs/5.4#server-requirements)

[Composer](https://getcomposer.org/)
### Clone `theoner`
Clone the `theoner` repository using git:
```
git clone https://github.com/xiaobica/theoner.git
```

```
cd theoner/code/yummy-rabbit-api
```
### Install Dependencies
we can simply do:
```
composer install
```
### Create Database and User
Create a mysql database for the Project as well as an user.
### Rename the .env.example
```
cp .env.example .env
```

### Generate App Key
run `php artisan key:generate` to generate the app key.
### Config Environment
Config your environment of .env. Detailed information can be checked on [laravel document](https://laravel.com/docs/5.4/configuration).
### Config FRONT_END_HOST constant
Add an environment constant of the host of your front-end application in the .env. Like:
```
FRONT_END_HOST='http://localhost:4200'
```
### Generate Storage Link
run `php artisan storage:link`.

### Migrate the database
run `php artisan migrate`.

### Run the Seeds
run `php artisan db:seed`

### Generate Passport Keys
run `php artisan passport:keys`

## Command Lines
###Generate api docs

```
 php artisan api:generate --routePrefix='api/*' --output="../../documentation/api-docs"
```
