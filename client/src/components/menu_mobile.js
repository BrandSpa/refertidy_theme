import React, { Component } from 'react';

class MenuMobile extends Component {
  state = {
    show: false
  }

  toggleMenu = (e) => {
    e.preventDefault();
    if(!this.state.show) {
      jQuery('body').addClass('open-menu');
    } else {
      jQuery('body').removeClass('open-menu');
    }

    this.setState({ show: !this.state.show });
  }

  render() {
    const { links } = this.props;
    const { show } = this.state;

    return (
      <div>
        <a href="#" className="app-header__navicon" onClick={this.toggleMenu}>
          <span className="ion-navicon"></span>
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
