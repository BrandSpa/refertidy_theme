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
      privacy: true,
      protection: '',
      to: false,
      errors: {}
  }

  
  componentWillMount() {
    this.setState({to: this.props.to});
  }
  

  handleChange = e =>  {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  toggleCheckbox = e => {
    const { name } = e.target;
    this.setState({[name]: !this.state[name]});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = qs.stringify({action: 'store_contact', data: this.state, to: this.props.to});
    if(this.protection.value.length == 0) {
      request
      .post(endpoint, data)
      .then(({data}) => {

        if(data.success == false) {
          return this.setState({errors: data.errors});
        }
        console.log(data);
        if(this.props.redirect == "true" && this.props.thanks_page != ""){
          window.location = this.props.thanks_page;
        }else{
          
          return this.setState({success: data.success});
        }

      })
    }
  }

  render() {
    const {
      name,
      email,
      phone,
      company,
      question,
      privacy,
      privacyErr,
      errors,
      success,
      protection
    } = this.state;

    if(success) return (<h5 style={{textAlign: 'center', color: '#fff'}}>{this.props.message}</h5>);

    return (
      <form className="form-contact" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-user"></i></div>
          </div>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={this.handleChange}
            value={name}/>
          <div className="input-error" style={ errors.name ? {display: 'block'} : {display: 'none'}}>{errors.name}</div>
        </div>

        <div className="form-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-envelope"></i></div>
          </div>
          <input
            name="email"
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={this.handleChange}
            value={email}/>
          <div className="input-error" style={ errors.email ? {display: 'block'} : {display: 'none'}}>{errors.email}</div>
        </div>

        <div className="form-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-phone"></i></div>
          </div>
          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="Teléfono"
            onChange={this.handleChange}
            value={phone}/>
        </div>

        <div className="form-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-building"></i></div>
          </div>
          <input
            name="company"
            type="text"
            className="form-control"
            placeholder="Empresa"
            onChange={this.handleChange}
            value={company}/>
        </div>

        <input
          type="text"
          ref={protection => this.protection = protection}
          name="protection"
          onChange={this.handleChange}
          value={protection}
          style={{display: 'none'}}
        />

        <div className="checkbox">
          <label htmlFor="privacy" onClick={this.toggleCheckbox}>
            <input
              type="checkbox"
              name="privacy"
              checked={privacy}
            /> He leído y acepto la política de privacidad
            <div className="input-error" style={ errors.privacy ? {display: 'block'} : {display: 'none'}}>Debe aceptar la política de privacidad</div>
          </label>
        </div>

        <button className="btn" style={{background: '#62FFC8', color: '#6031BA'}}>ENVIAR</button>
      </form>
    )
  }
}

export default Contact;
