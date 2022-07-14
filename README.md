# Project 12 - Sportsee

This repo contains all the source code to run website and the micro API for the sports analytics dashboard SportSee.

## 1. General information

This site uses a version with an api and another version with a data mock.

## 2. Project

### 2.1 Prerequisites
- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project(**React**)

To start this project : 

- Fork the repository
- Clone it on your computer.
- Open the terminal and go to the repo
- Make a **cd** on `sportsee`
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the Website.
- If the site does not open you can go on your browser and put this address `http://localhost:3006`


### 2.3 Other build using api

To start the api :

- Open a other terminal and go to the repo
- Make a **cd** on `api`
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the api.
- Once the api and the website is launched go to the folder `sportsee/src/Service/call.jsx` And change the value of the **mock** variable from **true** to **false**  to the line **14**


## 3 Endpoints

### 3.1 View Website user

This project includes 2 users that you can view:

- `http://localhost:3006/dashboard/12`
- `http://localhost:3006/dashboard/18`


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**