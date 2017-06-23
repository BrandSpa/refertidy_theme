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
		this.setState({ [e.target.name]: e.taget.value });
	}

	handleSubmit = e => {
		const data = this.data;
		const reqData = qs.stringify({action: 'store_contact', data});

		request.post(enpoint, reqData)
			.then(({data}) => {
				console.log(data);
			}) 
	}

  render() {
    return (
      <div className="quo-fixed">
        <form>
          <div class="row" style="width: 100%; padding: 0 100px">
            <div class="col-lg-3">
              <input type="text" name="name" placeholder="Nombre" />
            </div>
            <div class="col-lg-3">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div class="col-lg-3">
              <input type="text" name="phone" placeholder="Télefono" />
            </div>
            <div className="col-lg-3">
              <select name="product">
                <option value="Desktops">Desktops</option>
                <option value="Laptops">Laptops</option>
              </select>
            </div>
            <div class="col-lg-3">
              <button class="btn">Cotizar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuoFixed;
