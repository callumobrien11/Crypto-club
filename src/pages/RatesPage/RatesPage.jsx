import CryptoExchange from "../../components/CryptoExchanges/CryptoExchanges";

export default function () {
  return (
    <div>
      <div>
          <h2 style={{color:"white", backgroundColor:"#2bbbad", height:'55px', paddingTop:"5px", paddingLeft:"20px"}}>Top Cryptocurrency Spot Exchange</h2>
        </div>
      <CryptoExchange />
    </div>
  );
}
