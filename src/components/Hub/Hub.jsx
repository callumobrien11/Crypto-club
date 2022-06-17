import { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Hub extends Component {
  state = {
    posts: [{}],
  };
  async componentDidMount() {
    try {
      let jwt = localStorage.getItem('token')
      const posts = await fetch("/api/post/all",{headers: {'Authorization': 'Bearer ' + jwt}}).then((res) => res.json());
      this.setState({ posts });
    } catch (err) {
      console.log("Error", err);
    }
  }

  render() {
    return (
      <main>
        {this.state.posts.map((post) => (
          <Card border="dark">
            <Card.Header>{post.createdBy?.username}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h4>
                  {" "}
                  {post.title}
                  {" "}
                </h4>
                <p>{post.content}</p>
                <footer className="footer">
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </main>
    );
  }
}
