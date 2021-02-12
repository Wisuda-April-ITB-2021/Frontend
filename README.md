# Frontend - Wispril ITB 2021 Official Website

[www.wisprilitb.com](https://wisprilitb.com/)

## Short Desc

TBA

## Quick Installation

- install [NodeJS](https://nodejs.org/en/). If unsure, download the LTS version.
- Install [Git](https://git-scm.com/).
- clone this repository

```
git clone https://github.com/paradewisudaitb/Frontend frontend-wispril
cd frontend-wispril
git remote add origin https://github.com/paradewisudaitb/Frontend
npm install
```

- add the development branch

```
git checkout -b development
git pull origin development
```

## Development Mode

To enter the develpment branch, open your terminal and enter
Make sure you are on the development branch before you start coding, unless you are trying to merge the branch directly to the master branch, which is unlikely.

```
git checkout development
```

To run the React App on your local server, run
`npm start`
A new tab [http://localhost:3000](http://localhost:3000) will be opened on your browser.
If an error regarding NPM dependencies occurs, try
`npm install` or `npm cache clean --force`
Run `Ctrl+C` on your terminal to close the server.

To push your code to the development branch on Github,

```
git add .
git commit -m "meaningful message"
git push origin development
```

You can check the development site on [staging.wisprilitb.com](https://staging.wisprilitb.com/). Your latest push should be live in 5-10 minutes.

## Tech Stack

- React
- Golang
