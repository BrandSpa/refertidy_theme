import React, { Component } from 'react';

class MenuMobile extends Component {
  state = {
    show: false
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show })
  }

  render() {
    const { links } = this.props;
    const { show } = this.state;

    return (
      <div>
        <a href="#" class="app-header__navicon" onClick={this.toggleMenu}>
          <span class="ion-navicon"></span>
        </a>
        <div className={show ? "app-header__nav app-header__nav--show" : "app-header__nav"}>
          <ul>
            {links.map(link =>
              <li><a href={link.url}>{link.title}</a></li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuMobile;
