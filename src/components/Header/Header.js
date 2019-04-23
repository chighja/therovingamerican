import React, { Component } from 'react';
import './Header.css';
import history from '../utils/history';

class Header extends Component {
  render() {
    return (
      <header>
        <nav role="navigation">
          <div id="navLinks">
            <i
              class="topLink contact fas fa-home"
              onClick={() => {
                history.push('/');
              }}
            />
          </div>

          <div id="contactLinks">
            <a
              href="https://www.facebook.com/rovingamerican/"
              target="_blank"
              rel="noopener noreferrer"
              id="fb"
            >
              <i class="contact fab fa-facebook" />
            </a>
            <a
              href="https://www.instagram.com/rovingamerican/"
              target="_blank"
              rel="noopener noreferrer"
              id="ig"
            >
              <i class="contact fab fa-instagram" />
            </a>
            <a href="mailto:corey@rovingamerican.com" id="email">
              <i class="contact fas fa-envelope-square" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
