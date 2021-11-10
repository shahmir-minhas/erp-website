import React, { Component } from "react";
import "../../../Styles/clients.scss";
import Tvs from '../../../Assets/tv5.png';
import Viva from '../../../Assets/viva.png';
import Martin from '../../../Assets/martin.png';
import Falked from '../../../Assets/falked.png';

const Clients = () => {
  const clientsLogo = [Tvs, Viva, Martin, Falked];

  return (
    <React.Fragment>
      <div className="clients d-flex justify-content-center">
      {clientsLogo.map((logo)=> 
        <img src={logo} alt="Brand Logo" className="clients-logo"/>
      )}
      </div>
    </React.Fragment>
  );
};

export default Clients;
