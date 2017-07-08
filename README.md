# fullstack-react-boilerplate (tiny bones)
Starting point for Full Stack React-based Javascript Applications!

### Features:
* React
* React-Redux
* React-Router v4
* Express Server
* PostgreSQL Database w/ Sequelize ORM
* Redux Dev Tools Extension
* Webpack Bundling & SCSS Compiling Config
* Babel ES6
* Live Reloading & Building
* Local Authorization and Google OAuth2


# Instructions
1. Clone this repo to your local machine `https://github.com/Crizzooo/react-redux-express-boilerplate.git`
2. `npm install`
3. `rm -rf .git` - To remove commit log from boilerplate
4. `git init` - To initiate new git log
5. `npm run dev` - To build and launch server
6. Visit `localhost:3000` to verify everything works!
7. Make your own github repo and `git remote add origin ${repoURL}`
8. Get to building the meat of your project without worrying about the boring stuff!
9. Passport, Auth, and Postgres Databases are set up - but you'll have to uncomment the appropriate code in server/index.js, create your database, and supply a googleOAuthKey / secrets file to use them.

# File Structure
```
.
+-- client
|   +-- src
|       +-- components
|           +-- sampleComponent.js         <-- React Component JS
|           +-- sampleComponentStyle.scss  <-- Modular SCSS Styles for components
|       +-- public
|           +-- dist          <-- Webpack output of bundle.js
|           +-- stylesheets   <-- holds our main scss file, others can be imported to components
|           +-- index.html
|       +-- reducers
|       +-- app.js            <-- Holds Routes for React Router v4
|       +-- index.js          <-- Initates React Rout and React-Router v4
|       +-- store.js          <-- React Redux Store
+-- server
|   +-- api                 <-- Folder for API Routes
|   +-- index.js            <-- Initates Express Server which serves index.html and static files
```

# Database
Can't think of a database name? This boilerplate will pick a database name for you!  It pulls it out of the package.json "name" property.  You must create the database in order for things to work properly:

```bash
createdb your-app-name-here
```

Already have a database name?  Just input it into an environment variable:

```js
process.env.DATABASE_NAME = 'your-database-name-here';
```

# Secrets.js
To use this boilerplate in development mode, you'll need a secrets.js file in your root directory.  Be sure to make one before running npm run dev.  This file is in .gitignore by default.

The secrets file should be used to set environment variables, ie:

```js
// in secrets.js
process.env.GOOGLE_CLIENT_SECRET = 'yourGoogleSecret';

// in server/index.js - this is done for you
if (process.env.NODE_ENV === 'development') {
  require('../secrets.js')
}
```

# Authorization
Local auth and Google OAuth2 have been set up in this boilerplate.  There are separated into individual React components that you can simply place where you want in your app.  See client/src/app.js.

# Google OAuth2
To get Google OAuth2 working for your app, you must register it with Google API (https://console.developers.google.com).  Google will provide you with a Client ID and secret which you must set as environment variables.  You must also set the OAuth2 callback to match what is specified in your code.  Right now, that callback is http://localhost:{PORT}/api/users/google/redirect.

# Future Updates Pipeline
1. Tests to check App Structure is working
