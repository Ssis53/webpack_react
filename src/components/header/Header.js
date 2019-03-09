import React, { Component } from 'react'
import './Header.css';
import { debounce } from '../../utils/debounce';

export default class Header extends Component {

  componentDidMount() {
    let that = this;
    
    const handleScroll = debounce(function(evt) {
      let e = evt || window.event;
      let top = document.body.scrollTop || document.documentElement.scrollTop;
      let navP = that.refs.myNav;
      if(top > 60) {
        if(navP.className.indexOf('sticky') != -1) return;
        let nowClass = navP.getAttribute('class');
        navP.setAttribute('class', nowClass.concat(' sticky'));
      } else {
        if(navP.className.indexOf('sticky') == -1) return;
        let nowClass = navP.getAttribute('class');
        navP.setAttribute('class', nowClass.replace(' sticky', ''));
      }
    }, 16);

    window.addEventListener('scroll', handleScroll);
  }

  render() {
    return (
      <nav ref = 'myNav' className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/assets/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          Pokemon Go!
        </a>
      </nav>
    )
  }
}