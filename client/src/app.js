import React, { Component } from 'react';

//load components
import SampleComponent from './components/sampleComponent';


const App = () => (
  <div>
    <SampleComponent />
  </div>
);

export default App;



//React Router v4 Notes - from https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

/*

*** Route ***
<Route path="/roster" />   <-- This does not match '/', but matches '/roster', and '/roster2'
Anywhere you put a route in a router, if the path amtches, a React component will render


*** Switch ***
In v4 we can use <Switch > to hold a group fo Routes
Switch ensures that only one of those routes will be rendered

<Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
</Switch>

Exact - route should only match when the pathname matches the route's path exactly

Example of another switch within /roster
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

The :number part of the path /roster/:number means that the part of the pathname that comes after /roster/ will be captured and stored as match.params.number



*** Links ***
Finally, our application needs a way to navigate between pages. If we were to create links using anchor elements, clicking on them would cause the whole page to reload. React Router provides a <Link> component to prevent that from happening. When clicking a <Link>, the URL will be updated and the rendered content will change without reloading the page.


*/
