# Naming your Feelings App

## Overview

An application that asks the user how they feel now, then it will tell them what those feelings are. It uses Natural Language Processing and Sentiment Analysis to determine the feelings name.

This project is part of the Frontend web developer nano degree program.

## Project stack

- Webserver - Node.
- Web application framework for routing - Express.
- Build tool - Webpack.
- External script - Service Worker for offline functionality.
- External API - MeaningCloud API.
- SASS for styling.
- Axios for calling API.
- Jest for unit testing.

## Getting started (Instructions)

This project has a local server, server side code, and client side code.

#### First, install dependencies

`npm i`

#### Second, run the server (server uses port 8080)

`npm run start`

#### Third, open the app on the browser

`http://localhost:8080/`

#### Finaly, to test the app, try ...

`I feel so happy`
`I am board today`
`These colors makes me angry`
`I am afraid to not pass the exam`
`I dislike this kind of texture`

## Notes

- Input validation rules (Done in HTML):
  1- Not empty
  2- Max length is 100
  3- No script code
  4- No numbers
  5- No spaces
  6- No urls or any special character

- Used a simple custom dictionary in Sentiment Analysis API for feelings entities in reference to this [article] (https://your-way.org.uk/naming-your-feelings/)
