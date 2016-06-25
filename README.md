# sumo-survey
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]

*Premier data collection & survey machine. An Angular & Loopback responsive survey app with a d3 graphical admin interface.*

More information @ https://manuphatak.com/portfolio/sumo-survey/

Live @ http://sumo-survey.manuphatak.com/

## Local Install

1. Create a MySQL user/database named `sumo-survey` with password `secret`

  ```sql
  CREATE USER 'sumo-survey'@'localhost' IDENTIFIED BY 'secret';
  CREATE DATABASE IF NOT EXISTS `sumo-survey`;
  GRANT ALL PRIVILEGES ON
    `sumo-survey`.* TO 'sumo-survey'@'localhost';
  ```
2. `npm install`
3. Run local dev server `npm run dev` OR serve a build `npm run build:serve`
4. http://localhost:5000 (dev) OR http://localhost:3000 (build:serve) 
5. Login to admin interface with username: `admin@example.com` and password: `secret`

## Requirements
1. Create a web app written in Node.JS using an Express based framework, SequelizeJS, and MySQL.
1. Use NPM to declare all dependencies so that we can run it in a test environment.
1. The app should allow an admin to enter survey questions with multiple choice answers.
1. When a guest visits the app in a browser it should present a random survey question to the guest and allow them to answer.
1. Record answers and display the survey results in an admin interface.
1. Avoid showing a previously answered question to the same guest.
1. Make sure the UI is mobile browser friendly.
1. Provide a clear README with instructions on how to setup and run the app.
1. Create a github.com repository with the app that we can pull from and test.

## Known Bugs

## Screenshots

![Home][lg-screen-home]
![Survey][lg-screen-survey]
![Fin][lg-screen-fin]
![Login][lg-screen-login]
![Admin Questions][lg-screen-admin-questions]
![Admin Choices][lg-screen-admin-choices]
![Admin Add][lg-screen-admin-add]


![Home][sm-screen-home]
![Survey][sm-screen-survey]
![Fin][sm-screen-fin]
![Login][sm-screen-login]
![Admin Questions][sm-screen-admin-questions]
![Admin Choices][sm-screen-admin-choices]
![Admin Add][sm-screen-admin-add]

[travis-image]: https://travis-ci.org/bionikspoon/sumo-survey.svg?branch=master
[travis-url]: https://travis-ci.org/bionikspoon/sumo-survey

[coverage-image]: https://coveralls.io/repos/github/bionikspoon/sumo-survey/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/bionikspoon/sumo-survey?branch=master

[lg-screen-home]: docs/screenshots/lg-10-home.png
[lg-screen-survey]: docs/screenshots/lg-20-survey.png
[lg-screen-fin]: docs/screenshots/lg-30-fin.png
[lg-screen-login]: docs/screenshots/lg-40-login.png
[lg-screen-admin-questions]: docs/screenshots/lg-50-admin-questions.png
[lg-screen-admin-choices]: docs/screenshots/lg-60-admin-choices.png
[lg-screen-admin-add]: docs/screenshots/lg-70-admin-add.png

[sm-screen-home]: docs/screenshots/sm-10-home.png
[sm-screen-survey]: docs/screenshots/sm-20-survey.png
[sm-screen-fin]: docs/screenshots/sm-30-fin.png
[sm-screen-login]: docs/screenshots/sm-40-login.png
[sm-screen-admin-questions]: docs/screenshots/sm-50-admin-questions.png
[sm-screen-admin-choices]: docs/screenshots/sm-60-admin-choices.png
[sm-screen-admin-add]: docs/screenshots/sm-70-admin-add.png
