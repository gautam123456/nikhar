import React from 'react';
import { Link } from 'react-router';

export default class BookNow extends React.Component {
  render() {
    return (
      <Link to={'book'}>
        <button className='bookNow cli'>Buy Now</button>
      </Link>
    )
  }
}

