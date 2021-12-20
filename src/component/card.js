import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';


import axios from 'axios';

export const Card = () => {
  const [coins, setcoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'
      )
      .then((res) => {
        setcoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error('Error'));
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Table className="mt-5" dark>
              <thead>
                <tr>
                  <th>Crypte Name</th>
                  <th>Current price</th>
                  <th>Market Cap change</th>
                  <th>Market Cap range</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => {
                    return(
                  <tr>
                    
                    <td>
                        <img className="image" src={coin.image}></img>
                        
                        {coin.name}</td>
                    <td>{coin.current_price}</td>
                    {coin.price_change_percentage_24h<0 ? (<td className="red">

                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>):
                    <td className="green"> {coin.price_change_percentage_24h.toFixed(2)}%</td>
                    
                    }
                    <td>{coin.market_cap_rank}</td>
                  </tr>);
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
