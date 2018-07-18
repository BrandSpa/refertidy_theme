import React, { Component } from 'react';
import Form from './quotation_form';

class FooterMobile extends Component {
  state = {
    showForm: false
  }

  toggleQuo = (e) => {
    if(e) e.preventDefault();
    this.setState({showForm: !this.state.showForm})
  }

  closeForm = (e) => {
    if(e) e.preventDefault();
    this.setState({showForm: false})
  }

  render() {
    const { showForm } = this.state;

    return (
      <div>
        <div className="footer-mobile__form" style={showForm ? {display: 'flex'} : {display: 'none'}}>
          <a href="#" className="footer-mobile__form__close" onClick={this.closeForm}><i className="ion-close-round"></i></a>
          <Form {...this.props} />
        </div>

        <div className="footer-mobile">
          <button onClick={this.toggleQuo}>Cotizar Ahora</button>
          <a href="tel:0316361051"><i className="ion-ios-telephone"></i></a>
        </div>
      </div>
    )
  }
}

export default FooterMobile;
