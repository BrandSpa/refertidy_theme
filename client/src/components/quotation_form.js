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
    protection: '',
    errors: {},
    success: false,
	}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    if(e) e.preventDefault();
    const reqData = qs.stringify({action: 'store_quotation', data: this.state});

    if(this.protection.value.length == 0) {
      request
      .post(endpoint, reqData)
      .then(({data}) => {

        if(data.success == false) {
          return this.setState({errors: data.errors});
        }

        return this.setState({success: data.success});

      })
    }
  }

  render() {
    const { name, email, phone, product, errors, success, protection } = this.state;
    if(success) return (<h5 style={{textAlign: 'center', color: '#6031ba'}}>{this.props.message}</h5>);

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

          <input
            type="text"
            ref={protection => this.protection = protection}
            name="protection"
            onChange={this.handleChange}
            value={protection}
            style={{display: 'none'}}
          />

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
              <option value="">Producto</option>
              {this.props.products && this.props.products.map((product) =>
                <option key={product} value={product}>{product}</option>
              )}
            </select>
            <span className="input-error" style={errors.product ? {display: 'block'} : {display: 'none'}}>
            {errors.product}
          </span>
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
