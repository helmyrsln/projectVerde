import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import Canals from './components/Canals';
import ItemModal from './components/itemModal'
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <Canals />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
