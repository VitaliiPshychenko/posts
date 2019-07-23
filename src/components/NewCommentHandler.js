import { connect } from 'react-redux';
import NewComment from './NewComment';
import { changeInputValue } from '../redux/actions';

function mapStateToProps(state) {
  return {
    commentBody: state.commentBody,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInputValue: commentBody => dispatch(changeInputValue(commentBody)),
  };
}

const NewCommentHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComment);

export default NewCommentHandler;
