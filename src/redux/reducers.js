import {
  LOAD_POSTS,
  LOAD_POST_WITH_COMMENTS,
  CHANGE_INPUT_VALUE,
} from './actions';

const initialState = {
  listAllPosts: null,
  postWithComments: null,
  commentBody: '',
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        listAllPosts: action.listAllPosts,
      };

    case LOAD_POST_WITH_COMMENTS:
      return {
        ...state,
        postWithComments: action.postWithComments,
      };

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        commentBody: action.value,
      };

    default:
      return state;
  }
}
