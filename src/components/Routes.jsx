import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import AddMeasure from './AddMeasure';
import App from './App';
import TrackIt from './TrackIt';
import Progress from './Progress';
import More from './More';
import Login from '../containers/Login';
import Register from '../containers/Register';
// import AddMeasureWeight from './AddMeasureWeight';
// import AddMeasureHeight from './AddMeasureHeight';
// import AddMeasureArm from './AddMeasureArm';
// import AddMeasureFeet from './AddMeasureFeet';
// import AddMeasureLeg from './AddMeasureLeg';
import FrontPage from './FrontPage';
import Measures from '../containers/Measures';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/add-measure" component={AddMeasure} />
      {/* <Route path="/add-measure-2" component={AddMeasureWeight} />
      <Route path="/add-measure-3" component={AddMeasureHeight} />
      <Route path="/add-measure-4" component={AddMeasureArm} />
      <Route path="/add-measure-5" component={AddMeasureFeet} />
      <Route path="/add-measure-6" component={AddMeasureLeg} /> */}
      <Route path="/track-it" component={TrackIt} />
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
