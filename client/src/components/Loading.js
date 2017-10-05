import React from 'react';
import {Row, Col , Container, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import '../style/Loading.scss';
class Loading extends React.Component {
  constructor(){
    super();
    this.state={
      data:[
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'},
        {ImgSrc:'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'}
      ]
    }
  }
  handleSubmit(){
    
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            {this.state.data.map((data,i)=>{
              return(
              <img draggable='true' src={data.ImgSrc} key={i} alt="img" className="imgLeft"/>);
            })}
          </Col>
          <Col md="6">
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit()}>
                <FormGroup className="Name">
                  <Input type="text" id="FirstName" name="FirstName" placeholder="First Name"/>
                  <Input type="text" id="LastName" name="LastName" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" id="MobNo" name="MobNo" placeholder="Enter Your Mobile Number or Email Id"></Input>
                </FormGroup>
                <FormGroup>
                  <Input type="password" id="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                  <Input type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </FormGroup>
                <FormGroup>
                  <h5>Birthday</h5>
                  <Input type="Date" id="DateOfBirth" name="dob"/>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="gender" value="Male" />
                    Male
                  </Label>
                  <Label check>
                    <Input type="checkbox" name="gender" value="Female"/>
                    Female
                  </Label>
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col><hr/></Col>
        </Row>
        <Row>
          <Col><h4>Welcome</h4></Col>
        </Row>
      </Container>
    );
  }
}
export default Loading;
