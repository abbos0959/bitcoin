import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export const Pro = () => {
  
  const [state, setstate] = useState([]);
  


  useEffect(() => {
    fetch(`https://fortniteapi.io/v1/shop?lang=en`, {
      headers: { Authorization: `679c375a-7733964d-0c507049-4d322a57` },
    })
      .then((response) => response.json())
      .then((data) => {
        setstate(data.featured);
        console.log(data.featured);
      });
  }, []);
  

  return (
    <div className="salom" >

      <span>jami kinolar soni {state.length ? state.length :"0"}</span>
      {state.map((value)=>{
      return(
        <div className="con">

      <div className="wrapper">
        <img className="imag" src={value.full_background}></img>


      </div>
      <div className="di">
      <p>{value.description}</p>
      <p>{value.price}</p>
      </div>

        
      <button  className="but">Buy</button>
      

      </div>



      )


      })}
 
     
    </div>
  );
};
