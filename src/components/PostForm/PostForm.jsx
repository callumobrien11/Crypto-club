import { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class PostForm extends Component {
  state = {
    title: "",
    content: "",
    catagory: "",
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
      const fetchResponse = await fetch("/api/post/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          catagory: this.state.catagory
        }),
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      await fetchResponse.json();
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <Container>
        <h1>Post to the hub</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="Text"
              placeholder="Type a title here"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type message here</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            name="catagory"
            value={this.state.catagory}
            onChange={this.handleChange}
          >
            <option>What catagory does this fall under?</option>
            <option value="Crypto">Crypto</option>
            <option value="Blockchain">Blockchain</option>
            <option value="NFTs">NFTs</option>
            <option value="Elon Musk">Elon Musk</option>
          </Form.Select>

          <Button variant="primary" type="submit">
            Post to the hub!
          </Button>
        </Form>
      </Container>
    );
  }
}
