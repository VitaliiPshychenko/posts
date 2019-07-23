import { connect } from 'react-redux';
import { loadPosts } from '../redux/actions';
import ListAllPosts from './ListAllPosts';

function mapStateToProps(state) {
  return {
    listAllPosts: state.listAllPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestList: url => dispatch(loadPosts(url)),
  };
}

const ListAllPostsHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListAllPosts);

export default ListAllPostsHandler;
