import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux'
import * as actions from '../../actions';
const SurveyReview=({onCancel,formValues, submitSurvey})=>{
    return(
      <Container>
        <h5>Please Confirm your Entries</h5>
        <div>
          <label style={{color:'red'}}>Survey Title</label>
          <div>
            <span>{formValues.title}</span>
          </div>
        </div>
        <div>
          <label style={{color:'red'}}>Subject Line</label>
          <div>
            <span>{formValues.subject}</span>
          </div>
        </div>
        <div>
          <label style={{color:'red'}}>Email Body</label>
          <div>
              <span>{formValues.body}</span>
          </div>
        </div>
        <div>
          <label style={{color:'red'}}>Recipent List</label>
          <div>
            <span>{formValues.emails}</span>
          </div>
        </div>
        <button className="btn btn-primary" onClick={onCancel}>Back</button>
        <button onClick={()=>submitSurvey(formValues)} className="btn btn-success" style={{float:'right'}}>
          Survey Send
        </button>
      </Container>
    );
  }
  function mapStateToProps(state){
    return{ formValues:state.form.SurveyForm.values}
  }
export default connect(mapStateToProps, actions)(SurveyReview);
