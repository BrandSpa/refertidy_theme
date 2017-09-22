import React, { Component } from 'react';

class MenuMobile extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, true)
  }

  handleClick = (e) => {
    const el = this.container;
    if (!el.contains(e.target)) {
      this.closeMenu();
    }
  }

  closeMenu = () => {
    jQuery('body').removeClass('open-menu');
    this.setState({show: false});
  }

  toggleMenu = (e) => {
    if(e) e.preventDefault();

    if(!this.state.show) {
      jQuery('body').addClass('open-menu');
    } else {
      jQuery('body').removeClass('open-menu');
    }

    this.setState({ show: !this.state.show });
  }

  handleLinkClick = (link) => {
    setTimeout(() => {
      this.toggleMenu();
      window.location = link.url;
    });
  }

  render() {
    const { links } = this.props;
    const { show } = this.state;

    return (
      <div ref={container => this.container = container}>
        <a href="#" className="app-header__navicon" onClick={this.toggleMenu}>
          <span className="ion-navicon"></span>
        </a>

        <div className={show ? "app-header__nav app-header__nav--show" : "app-header__nav"}>
          <ul>
            {links.map(link =>
              <li key={link.ID}><a href="#" onClick={this.handleLinkClick.bind(null, link)}>{link.title}</a></li>
            )}
          </ul>
          <button
            className="app-header__nav__close"
            onClick={this.closeMenu}><i className="ion-close-round"></i></button>
        </div>
      </div>
    )
  }
}

export default MenuMobile;
