import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import AddMeasure from './AddMeasure';
import App from './App';
import TrackIt from './TrackIt';
import Progress from './Progress';
import More from './More';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/add-measure" component={AddMeasure} />
      <Route path="/track-it" component={TrackIt} />
      <Route path="/your-progress" component={Progress} />
      <Route path="/more" component={More} />
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
