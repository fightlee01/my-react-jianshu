import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './commond/header/index.js';
import store from './store/index';
import Home from './pages/Home';
import Detail from './pages/Detail/loadable';
import Login from './pages/Login';
import Write from './pages/Write';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home} />
              <Route path='/detail/:id' exact component={Detail} />
              <Route path='/sign_in' exact component={Login} />
              <Route path='/write' exact component={Write} />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
