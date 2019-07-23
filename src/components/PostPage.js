import React, { Component } from 'react';
import Comments from './Comments';

export default class PostPage extends Component {
  componentDidMount() {
    this.props.requestList('https://simple-blog-api.crew.red/posts');
  }

  render() {
    const { listAllPosts, id } = this.props;
    const post = listAllPosts.find(post => post.id === +id);

    if (!post) {
      return <p>Loading...</p>;
    }

    return (
      <article className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Comments id={post.id} />
      </article>
    );
  }
}
