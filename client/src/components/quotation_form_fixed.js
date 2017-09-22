import React, { Component } from "react";
import Form from './quotation_form';

class QuotationFormFixed extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="quo-fixed">
				<Form {...this.props} />
      </div>
    );
  }
}

export default QuotationFormFixed;
