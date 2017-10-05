import React from 'react';
import {} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../style/header.scss';
//import {reducer as formReducer, form}from 'redux-form';
class Survey extends React.Component {
  render() {
    return (
      <div>
        <Link className="plusButton" to="/surveys/SurveysNew">+</Link>
      </div>
    );
  }
}
export default Survey;
