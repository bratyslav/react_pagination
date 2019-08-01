import React, { Component } from 'react';
import './App.css';
import Pagination from './Pagination';

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 0,
      total: 42,
      perPage: 5
    };
  };

  onPageChange = (currentPage) => {
    this.setState({ page: currentPage });
  };
  
  render() {
    const { page, total, perPage } = this.state;

    return (
      <Pagination
        total={total}
        perPage={perPage}
        page={page}
        onPageChange={this.onPageChange}
      />
    );
  }
}

export default App;