import { Component } from "react";
import  Container  from "react-bootstrap/Container";
import  Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json(); // 3. decode fetch response: get jwt token from srv
      localStorage.setItem("token", token); // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split(".")[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            {/* logo */}
            <Form.Group>
              <Form.Control
                type="text"
                name="username"
                size="lg"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <Form.Control
                type="password"
                name="password"
                size="lg"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              LOGIN
            </Button>
          </Form>
        </Container>
        
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

