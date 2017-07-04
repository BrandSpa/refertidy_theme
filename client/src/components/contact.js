import React, { Component } from 'react';

class Contact extends Component {
  state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      question: ''
  }

  handleChange = => e {
    let field = e.target.name;
    let val = e.target.value;
    this.setState({[field]: val});
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input name="name" type="text" className="form-control" placeholder="Nombre"/>
        </div>
        <div className="form-group">
          <input name="email" type="text" className="form-control" placeholder="Email"/>
        </div>
        <div className="form-group">
          <input name="phone" type="text" className="form-control" placeholder="Teléfono"/>
        </div>
        <div className="form-group">
          <input name="company" type="text" className="form-control" placeholder="Empresa"/>
        </div>
        <div className="form-group">
          <textarea name="question" id="" rows="3" placeholder="¿Dudas?"></textarea>
        </div>
      </form>
    )
  }
}

export default Contact;
