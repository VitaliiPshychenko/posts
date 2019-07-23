import { connect } from 'react-redux';
import { loadPosts } from '../redux/actions';
import PostPage from './PostPage';

function mapStateToProps(state, ownProps) {
  return {
    listAllPosts: state.listAllPosts,
    id: ownProps.match.params.post_id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestList: url => dispatch(loadPosts(url)),
  };
}

const PostPageHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage);

export default PostPageHandler;
