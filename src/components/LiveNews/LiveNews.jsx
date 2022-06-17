import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import  Row  from "react-bootstrap/Row";
import "./LiveNews.css"

export default class LiveNews extends Component {
  state = {
    news: {feed:[]}
  };

  getNews = async () => {
    await fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ news: data });
      });
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    return (
      <main className="LiveNews">
        <div>
          <h2 style={{color:"white", backgroundColor:"red"}}>BREAKING NEWS: CRYPTO CREASHES AND BURNS - BUY THE DIP!</h2>
        </div>
        <Row xs={1} md={2} className="g-4 newsCards">
        {this.state.news.feed.length ? (
          this.state.news.feed.map((article) => (
            <Card style={{ width: "30rem", marginTop:"17px", marginBottom:"-20px" }}>
              <Card.Img variant="top" src={article.banner_image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  <span style={{fontWeight:'bold'}}>{article.summary}</span>
                </Card.Text>
                <Button style={{backgroundColor:"#fc96d0", border:"#fc96d0", marginTop:"20px", fontFamily: 'Rubik Bubbles'}} href={article.url}>See full Article</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Spinner className="spinner" animation="grow" variant="warning" />
        )}
        </Row>
      </main>
    );
  }
}
