import React, { Component } from 'react';
// import Wall from '..../wall.jpg';
import './Home.css';
import history from '../utils/history';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="banner">
          <h3 className="titleText">The Roving American</h3>
        </section>

        <section class="dirLinks">
          <img
            onClick={() => {
              history.push('/content');
            }}
            class="logoImg"
            src={require('../../images/circle.png')}
            alt="Roving American logo"
          />
        </section>
      </div>
    );
  }
}

export default Home;
