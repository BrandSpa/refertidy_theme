import React, { Component } from "react";
import Form from './quotation_form';

class QuotationFormFixed extends Component {

  render() {

    return (
      <div className="quo-fixed">
				<Form {...this.props} />
      </div>
    );
  }
}

export default QuotationFormFixed;
