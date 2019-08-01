import React from 'react';
import PaginationButton from './PaginationButton';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: []
    };
  };

  componentDidMount() {
    const { total, perPage } = this.props;

    const buttonsArray = [];
    for (let i = 0; i < Math.ceil(total / perPage); i++) {
      buttonsArray.push(i);
    };

    this.setState({ buttons: buttonsArray });
  };

  render() {
    const { page, onPageChange, total, perPage } = this.props;
    const { buttons } = this.state;

    const pagesRangeStart = (page)*perPage + 1;
    let pagesRangeEnd = (page + 1)*perPage;
    pagesRangeEnd = pagesRangeEnd < total ? pagesRangeEnd : total;
    // не больше, чем всего страниц
    // может есть идеи, как это более адекватно записать? )

    return (
      <div>
        <h2 className="info">
          {pagesRangeStart}...{pagesRangeEnd} of {total}
        </h2>



        <ul className="pagination">
          <li>
            <button
              onClick={() => onPageChange(page - 1)}
              disabled={page < 1}
            >
              Previous
            </button>
          </li>

          {buttons.map(button => (
            <PaginationButton
              button={button}
              key={button}
              onPageChange={onPageChange}
              isChecked={button === page}
            />
          ))}

          <li>
            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page >= buttons.length - 1}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    );
  };
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;