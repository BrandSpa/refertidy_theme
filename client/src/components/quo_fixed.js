import React, { Component } from "react";
import request from 'axios';
import qs from 'qs';
const endpoint = '/wp-admin/admin-ajax.php';

class QuoFixed extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		product: ''
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
    if(e) e.preventDefault();
		const data = this.state;
    console.log(this.state);
		const reqData = qs.stringify({action: 'store_contact', data});

		request.post(endpoint, reqData)
			.then(({data}) => {
				console.log(data);
			}) 
	}

  render() {
    const { name, email, phone, product } = this.state;
    return (
      <div className="quo-fixed">
        <form onSubmit={this.handleSubmit}>
          <div className="row quo-fixed__container">
            <div className="col-lg-3">
              <input 
                type="text" 
                name="name" 
                placeholder="Nombre" 
                onChange={this.handleChange} 
                value={name} 
              />
            </div>
            <div className="col-lg-3">
              <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                onChange={this.handleChange} 
                value={email} 
              />
            </div>
            <div className="col-lg-2">
              <input 
                type="text" 
                name="phone" 
                placeholder="Télefono" 
                onChange={this.handleChange} 
                value={phone} 
              />
            </div>
            <div className="col-lg-2">
              <select name="product" onChange={this.handleChange} value={product}>
                <option value="Desktops">Desktops</option>
                <option value="Laptops">Laptops</option>
              </select>
            </div>
            <div className="col-lg-2">
              <button className="btn">Cotizar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuoFixed;
