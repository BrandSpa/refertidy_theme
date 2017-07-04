import React, { Component } from "react";
import request from 'axios';
import qs from 'qs';
const endpoint = '/wp-admin/admin-ajax.php';

class QuoFixed extends Component {

	state = {
		name: '',
		email: '',
		phone: '',
		product: '',
    errors: {}
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
			if(Object.keys(data).length > 0) {
        this.setState({errors: data});
      }

		})
	}

  render() {
    const { name, email, phone, product, errors } = this.state;
    return (
      <div className="quo-fixed">
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
              <select name="product" onChange={this.handleChange} value={product}>
                <option value="Desktops">Desktops</option>
                <option value="Laptops">Laptops</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-2">
              <button className="btn" style={{color: '#6031BA'}}>Cotizar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuoFixed;
