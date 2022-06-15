import { Component } from "react";
import Table from "react-bootstrap/Table"

export default class CryptoExchange extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Exchange Score</th>
            <th>Volume</th>
            <th>Avg.Liquidity</th>
            <th>Weekly Visits</th>
            <th># Markets</th>
            <th># Coins</th>
            <th>Fiat Supported</th>
            <th>Volume Graph</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Test Coin</td>
            <td>9.8</td>
            <td>$70000</td>
            <td>455</td>
            <td>33,555,433</td>
            <td>1243</td>
            <td>54</td>
            <td>USD, CAD</td>
            <td>Graph /\/\/\/\</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
