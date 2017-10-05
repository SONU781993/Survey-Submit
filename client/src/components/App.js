import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../actions'
import Header from './Header';
import Dashboard from './Dashboard';
import Survey from './Survey';
import Loading from './Loading';
import SurveysNew from './survays/SurvaysNew'
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Loading}/>
            <Route exact path="/surveys" component={Survey}/>
            <Route path="/surveys/SurveysNew" component={SurveysNew}/>
            <Route exact path="/Dashboard" component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, action)(App);
