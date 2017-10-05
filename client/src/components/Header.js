import React from 'react';
import {connect} from 'react-redux';
import '../style/header.scss';
import Payment from './Payment'
import {Link} from 'react-router-dom';
import {NavbarToggler, Collapse, Navbar, Nav, NavLink, Form, Input, Button, FormGroup} from 'reactstrap'
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  renderContent(i) {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <Form  key="1" className="Login" inline>
        <FormGroup>
          <Input type="email" name="email" id="Email" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Input type="password"  id="Password" placeholder="Password"/>
        </FormGroup>
        {' '}
        <Button>Log In</Button>
      </Form>,
          <NavLink key="2" href="/auth/google" className="LooginWithGoogle">Login with google</NavLink>];
      default:
        return [ < NavLink key = "1" > <Payment/> < /NavLink>,
                < NavLink key = "2" > Credit:{this.props.auth.credit} < /NavLink>,
          <NavLink key="3" href="/api/logout">Logout</NavLink>];
        }
    }
    render() {
      return (
        <div>
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle}/>
            <Link to={this.props.auth ? '/surveys' : '/'} className="AppHeader">Amit</Link>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.renderContent(this.i)}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    console.log(state);
    return {auth: state.auth}
  }
  export default connect(mapStateToProps)(Header);
