# fullstack-react-boilerplate (tiny bones)
Starting point for Full Stack React-based Javascript Applications!

### Features:
* React
* React-Redux
* React-Router v4
* Express Server
* Redux Dev Tools Extension
* Webpack Bundling & SCSS Compiling Config
* Babel ES6
* Live Reloading & Building


# Instructions
1. Clone this repo to your local machine `https://github.com/Crizzooo/react-redux-express-boilerplate.git`
2. `npm install --save`
3. `npm start`
4. Visit `localhost:3000` to verify everything works!
5. Get to building the meat of your project without worrying about the boring stuff!

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


# Future Updates Pipeline
1. Tests to check App Structure is working
2. Sequelize DB Connections
3. Environment Variables
4. Authentication
