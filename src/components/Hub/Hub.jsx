import { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Hub extends Component {
  state = {
    posts: [{}],
  };

  //    getPosts = async () => {
  //     try {
  //         const fetchResponse = await fetch("/api/post/new", {
  //             method: "GET",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({
  //               title: this.state.title,
  //               content: this.state.content,
  //               catagory: this.state.catagory
  //             }),
  //           });

  //           if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
  //     } catch (error) {
  //       console.log("error", error);
  //       this.setState({ error: "Try Again" });
  //     }
  //    }
  async componentDidMount() {
    try {
      const posts = await fetch("/api/post/all").then((res) => res.json());
      this.setState({ posts });
    } catch (err) {
      console.log("Error", err);
    }
  }

  render() {
    return (
      <main>
        {this.state.posts.map((post) => (
          <Card border="primary">
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  {post.content}
                  {" "}
                </p>
                <p>{post.catagory}{post.createdAt}</p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                  
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </main>
    );
  }
}
