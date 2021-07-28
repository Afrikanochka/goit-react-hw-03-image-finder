import React, { Component } from 'react';
import { fetchImages } from '../services/api';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Modal from './modal/Modal';

import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    query: '',
    images: [],
    error: null,
    page: 1,
    isLoading: false,
    showModal: false,
    modalItem: [],
    largeImageURL: {},
  };

  componentDidUpdate(prevState) {
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  loadMore = async () => {
    const images = await fetchImages(this.state.query, this.state.page);
    this.setState(prev => ({
      images: [...prev.images, ...images.hits],
      page: prev.page + 1,
    }));
  };

  onSubmit = async query => {
    const images = await fetchImages(query);
    this.setState({ query: query, images: images.hits, page: 2 });
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  onSelect = async id => {
    await this.setState(state => ({
      largeImageURL: state.images.find(item => item.id === id),
      showModal: !this.state.showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <div className="loader">
          {isLoading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}
        </div>
        <ImageGallery images={images} onSelect={this.onSelect} />
        {images.length > 0 && (
          <Button title="LoadMore" onClick={this.loadMore} />
        )}
        {showModal && (
          <Modal modalItem={largeImageURL} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;

// handleClick = async () => {
//   const { query, page } = this.state;
//   this.fetchArticles(query, page);
// };

// handleFormSubmit = query => {
//   this.setState({ query });
// };
