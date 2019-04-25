import React, { Component } from 'react';
import Post from '../Post/Post';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div>
        <div className="titleBanner">
          <h3 className="titleText">The Roving American</h3>
        </div>

        <div className="container">
          <section className="leftRow">
            <div>
              <Post />
              <Post />
              <Post />
            </div>
          </section>

          <section className="rightRow">
            <div>
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Content;
