import React, { Component } from 'react';
import Form from './quotation_form';

class FooterMobile extends Component {
  toggleQuo = (e) => {
    if(e) e.preventDefault();
  }

  render() {
    return (
      <div >
        <div className="footer-mobile__form" style={{display: 'none'}}>
          <Form />
        </div>

        <div className="footer-mobile">
          <button onClick={this.toggleQuo}>Cotizar Ahora</button>
          <a href="tel:0316361051"><i className="ion-ios-telephone"></i></a>
        </div>
      </div>
    )
  }
}
