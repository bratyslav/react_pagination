import React from 'react';
import PropTypes from 'prop-types';

const PaginationButton = ({ button, onPageChange, isChecked }) => (
  <li
    className={isChecked ? 'is-checked' : ''}
    onClick={() => onPageChange(button)}
  >
    {button + 1}
  </li>
);

PaginationButton.propTypes = {
  button: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired
};

export default PaginationButton;