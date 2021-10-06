import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import AddMeasure from './AddMeasure';
import App from './App';
import TrackitList from '../containers/TrackitList';
import Progress from '../containers/progress';
import More from './More';
import Login from '../containers/Login';
import Register from '../containers/Register';
import FrontPage from './FrontPage';
import Measures from '../containers/Measures';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/add-measure" component={AddMeasure} />
      <Route path="/track-it" component={TrackitList} />
      <Route path="/measures" component={Measures} />
      <Route path="/your-progress" component={Progress} />
      <Route path="/more" component={More} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/front-page" component={FrontPage} />
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
