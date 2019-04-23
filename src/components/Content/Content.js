import React, { Component } from 'react';
import Post from '../Post/Post';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="container">
        <section className="leftRow">
          <div>
            <Post />
          </div>
        </section>

        <section className="rightRow">
          <div>
            <Post />
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
