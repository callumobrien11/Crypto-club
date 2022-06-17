import { Component } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import "./CryptoExchanges.css"


export default class CryptoExchange extends Component {
  state = {
    data: []
  };

  getExchanges = async () => {
    await fetch("/api/exchanges")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
  };
 

  componentDidMount() {
    this.getExchanges();
  }

  render() {

    return (
      <main className="exchangeTable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Btc Price</th>
              <th># of Markets</th>
              <th>Volume (24h)</th>
            </tr>
          </thead>
          {this.state.data.length ? (
            this.state.data.map((exchange) => (
              <tbody>
                <tr>
                  <td>{exchange.rank}</td>
                  <td><img className="image" src={exchange.iconUrl}></img>  {exchange.name}</td>
                  <td>${exchange.price}</td>
                  <td>${exchange.btcPrice}</td>
                  <td>{exchange.numberOfMarkets}</td>
                  <td>${exchange["24hVolume"]}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <Spinner className="spinner" animation="grow" variant="warning" />
          )}
        </Table>
      </main>
    );
  }
}
