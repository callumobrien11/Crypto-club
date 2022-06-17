import React from 'react'
import './AuthPage.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignupForm/SignupForm';
import Button from 'react-bootstrap/Button';


export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
      <main className="AuthPage">
        <div>
          <h3 onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? <Button style={{backgroundColor:"#fc96d0", border:"#fc96d0", fontFamily: 'Rubik Bubbles', marginLeft:"68px", marginTop:'10px'}}>CLICK HERE TO <span style={{color:"#7085ce", fontFamily: 'Rubik Bubbles'}}>SIGN UP</span></Button> : <Button style={{backgroundColor:"#fc96d0", border:"#fc96d0", fontFamily: 'Rubik Bubbles', marginLeft:"68px", marginTop:'10px'}}>CLICK HERE TO <span style={{color:"#7085ce", fontFamily: 'Rubik Bubbles'}}>LOG IN</span></Button>}
          </h3>
        </div>
        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? 
        <LoginForm setUserInState={this.props.setUserInState}/> : 
        <SignUpForm setUserInState={this.props.setUserInState} />}
      </main>
    );
  }
}