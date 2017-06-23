import React, { Component } from "react";

class Quo extends Component {
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

export default Quo;
