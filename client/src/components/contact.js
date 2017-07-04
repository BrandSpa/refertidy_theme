import React, { Component } from 'react';
import request from 'axios';
import qs from 'qs';
const endpoint = '/wp-admin/admin-ajax.php';

class Contact extends Component {
  state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      question: '',
      errors: {}
  }

  handleChange = e =>  {
    let field = e.target.name;
    let val = e.target.value;
    this.setState({[field]: val});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = qs.stringify({action: 'store_contact', data: this.state});

    request
    .post(endpoint, data)
    .then(({data}) => {

      if(Object.keys(data).length > 0) {
        this.setState({errors: data});
      }

    })

  }

  render() {
    const {name, email, phone, company, question, errors} = this.state;

    return (
      <form className="form-contact">
        <div className="form-group">
          <input name="name" type="text" className="form-control" placeholder="Nombre" value={name}/>
          <div className="input-error" style={ errors.name ? {display: 'block'} : {display: 'none'}}>{errors.name}</div>
        </div>

        <div className="form-group">
          <input name="email" type="text" className="form-control" placeholder="Email" value={email}/>
          <div className="input-error" style={ errors.email ? {display: 'block'} : {display: 'none'}}>{errors.email}</div>
        </div>

        <div className="form-group">
          <input name="phone" type="text" className="form-control" placeholder="Teléfono" value={phone}/>
        </div>

        <div className="form-group">
          <input name="company" type="text" className="form-control" placeholder="Empresa" value={name}/>
        </div>

        <div className="form-group">
          <textarea name="question" rows="4" className="form-control" placeholder="¿Dudas?" value={name}/>
          <div className="input-error" style={ errors.question ? {display: 'block'} : {display: 'none'}}s>{errors.question}</div>
        </div>

        <button className="btn" style={{background: '#62FFC8', color: '#6031BA'}}>ENVIAR</button>
      </form>
    )
  }
}

export default Contact;
