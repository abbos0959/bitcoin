import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Table, Col, Row } from 'reactstrap';

export const In = () => {
  const [count, setcount] = useState(0);

  const [coin, setcoin] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'
      )
      .then((res) => {
        setcoin(res.data);
      })
      .catch(((error)=>console.error('Error')));
  },[]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount((prev) => prev + 1)}>+</button>
      <button onClick={() => setcount((prev) => prev - 1)}>-</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col md="12">
            <Table className="mt-5" dark>
              <thead>
                <tr>
                  <th>Valyuta Nomi</th>
                  <th>Bitcoin Narxi</th>
                  <th>Barqarorlik</th>
                  <th>Birjadagi O`rni</th>
                </tr>
              </thead>
              {coin.map((item) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                          <img className="image" src={item.image}></img>                     
                          
                          {item.name}</td>
                      <td>{item.current_price}</td>
                      {item.market_cap_change_percentage_24h <0 ? (

                  <td className="red">{ item.market_cap_change_percentage_24h.toFixed(2)}%</td>
                      ):(<td className="green">{ item.market_cap_change_percentage_24h.toFixed(2)}%</td>)}
                      <td>{item.market_cap_rank}</td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
