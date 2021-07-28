import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../src/index.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
