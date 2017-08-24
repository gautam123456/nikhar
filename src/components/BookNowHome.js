import React from 'react';
import Constants from './util/Constants';
import BookNow from './BookNow';

export default class BookNowHome extends React.Component {
  render() {
    return (
      <div className='bookNowHome'>
        <div className='m'>
          <h2>Affordable yet Astounding</h2>
          <h3 className='strike'>Rs. 4800</h3>
          <h3>Rs. 1800</h3>
          <BookNow />
        </div>
      </div>
    )
  }
}

