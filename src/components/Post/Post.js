import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h3>I am the title of the post</h3>
        <p>
          I am the paragraph of text that will be given from each article that
          is written and then subsequently posted and displayed in the content
          view of the webpage.
        </p>
      </div>
    );
  }
}

export default Post;
