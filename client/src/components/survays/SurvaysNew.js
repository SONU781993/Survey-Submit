import React from 'react';
import {} from 'reactstrap';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';
import {reduxForm} from 'redux-form'
class SurveysNew extends React.Component {
  constructor(){
    super();
    this.state={
      SurveyRForm:false
    }
  }
  renderContent(){
    if(this.state.SurveyRForm){
        return <SurveyReview
        onCancel={()=>this.setState({SurveyRForm:false})}/>;
    }
  return <SurveyForm onSurveySubmit={()=>this.setState({SurveyRForm:true})}/>;
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
export default reduxForm({
  form:'SurveyForm'
}) (SurveysNew);
