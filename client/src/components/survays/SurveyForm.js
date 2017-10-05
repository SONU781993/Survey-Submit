import React from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Button, Container} from 'reactstrap';
import Recipents from '../../validateEmails/Recipents';
import {Link} from 'react-router-dom';
class SurveyForm extends React.Component {
  constructor(){
    super();
    this.state={
      data:[
        { label:'Survey Title', name:'title'},
        {label:'Subject Line', name:'subject'},
        {label:'Email Body', name:'body'},
        {label:'Recipent List', name:'emails'}
      ]
    }
  }
  randerField(){
    return(
      this.state.data.map((data, i)=>{
        return(
          <div key={i}>
            <label>{data.label}</label>
            <Field type="text"  component={SurveyField} name={data.name}/>
          </div>
        );
      })
    );
  }
  render() {
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit(()=>this.props.onSurveySubmit())}>
          {this.randerField()}
          <br/>
          <Button type="submit" color="primary">Submit</Button>
          <Link to="/surveys" className="btn btn-danger" style={{ float:'right' }}>Cancel</Link>
        </form>
      </Container>
    );
  }
}
function validate(values){
  const error={};
  error.emails=Recipents(values.emails || '');
  if(!values.title){
    error.title="You must provide a Title"
  }
  if(!values.subject) {
    error.subject="You must provide an Subject"
  }
  if(!values.body){
    error.body="You must provide a Body"
  }
  if(!values.emails){
    error.emails="You must provide an Email"
  }
  return error;
}
export default reduxForm({
  validate,
  form:'SurveyForm',
  destroyOnUnmount:false
})(SurveyForm);
