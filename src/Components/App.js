import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './searchbar/Searchbar';

class App extends Component {
  state = {
    serachQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    // const {searchQuery} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
      </>
    );
  }
}

export default App;
