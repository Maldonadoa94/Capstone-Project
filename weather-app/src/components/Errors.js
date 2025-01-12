import React, { Component } from 'react';
import '../styles/Errors.css';

class Errors extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong...</h2>
          <p>{this.state.errorMessage}</p>
          <button onClick={this.handleReload} className="reload-btn">
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Errors;

