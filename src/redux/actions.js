export const LOAD_POSTS = 'load_posts';
export const LOAD_POST_WITH_COMMENTS = 'load_post_with_comments';
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const EDIT_POST = 'edit_post';

export function loadPosts(url) {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(listAllPosts => {
        dispatch({
          type: LOAD_POSTS,
          listAllPosts,
        });
      });
  };
}

export function loadPostWithComments(url) {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(postWithComments => {
        dispatch({
          type: LOAD_POST_WITH_COMMENTS,
          postWithComments,
        });
      });
  };
}

export function changeInputValue(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value,
  };
}

export function editPost() {
  return {
    type: EDIT_POST,
  };
}
