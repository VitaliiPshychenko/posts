import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import ListAllPostsHandler from './components/ListAllPostsHandler';
import PostPageHandler from './components/PostPageHandler';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link className="all-posts" to="/LatestPosts">
          All posts
        </Link>
        <Switch>
          <Route path="/LatestPosts" exact component={ListAllPostsHandler} />
          <Route path="/posts/:post_id" component={PostPageHandler} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
