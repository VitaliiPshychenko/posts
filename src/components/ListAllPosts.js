import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListAllPosts extends Component {
  componentDidMount() {
    this.props.requestList('https://simple-blog-api.crew.red/posts');
  }

  render() {
    const { listAllPosts } = this.props;

    if (listAllPosts === null) {
      return <p>Loading...</p>;
    }

    return (
      <div className="posts-container">
        {listAllPosts.map(post => {
          return (
            <article className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={'/posts/' + post.id}>
                <span>Show details</span>
              </Link>
            </article>
          );
        })}
      </div>
    );
  }
}
