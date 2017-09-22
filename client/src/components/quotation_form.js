import React, { Component } from 'react';
import request from 'axios';
import qs from 'qs';
const endpoint = '/wp-admin/admin-ajax.php';

class QuotationForm extends Component {
  state = {
		name: '',
		email: '',
		phone: '',
		product: '',
    errors: {},
    success: false
	}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    if(e) e.preventDefault();
    const reqData = qs.stringify({action: 'store_quotation', data: this.state});

    request
    .post(endpoint, reqData)
    .then(({data}) => {

      if(data.success == false) {
        return this.setState({errors: data.errors});
      }

      return this.setState({success: data.success});

    })
  }

  render() {
    const { name, email, phone, product, errors, success } = this.state;
    if(success) return (<div>some message</div>);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row quo-fixed__container">
          <div className="col-lg-3 col-md-3">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={this.handleChange}
              value={name}
            />
            <span className="input-error" style={errors.name ? {display: 'block'} : {display: 'none'}}>
              {errors.name}
            </span>
          </div>

          <div className="col-lg-3 col-md-3">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={email}
            />
            <span className="input-error" style={errors.email ? {display: 'block'} : {display: 'none'}}>
              {errors.email}
            </span>
          </div>

          <div className="col-lg-2 col-md-2">
            <input
              type="text"
              name="phone"
              placeholder="Télefono"
              onChange={this.handleChange}
              value={phone}
            />
          </div>

          <div className="col-lg-2 col-md-2">
            <select name="product" onChange={this.handleChange} value={product ? product : this.props.product}>
              <option value="">Equipos</option>
              {this.props.products && this.props.products.map((product) =>
                <option value={product}>{product}</option>
              )}
            </select>
          </div>

          <div className="col-lg-2 col-md-2">
            <button className="btn btn--outline" style={{borderColor: '#6031BA', color: '#6031BA'}}>COTIZAR</button>
          </div>
        </div>
      </form>
    )
  }
}

export default QuotationForm;
