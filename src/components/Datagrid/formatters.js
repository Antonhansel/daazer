import React from 'react';
import { PropTypes } from 'prop-types';
import './Datagrid.css';

/*
  Custom formatter for link
*/
class LinkFormatter extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINK
        </a>
      </div>);
  }
};

LinkFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

/*
  Custom formatter for images
*/
class ImageFormatter extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div >
        <img className="album-image" src={value} alt=""/>
      </div>);
  }
};

LinkFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const formatters = {
  link: LinkFormatter,
  image: ImageFormatter,
  preview: LinkFormatter,
};

export default formatters;
