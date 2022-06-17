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
            {this.state.showLogin ? <Button style={{backgroundColor:"#bf456d", border:"#bf456d"}}>SIGN UP</Button> : <Button style={{backgroundColor:"#bf456d", border:"#bf456d"}}>LOG IN</Button>}
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