import React from 'react';
import ProductContent from './ProductContent';
import BookNowHome from './BookNowHome';
import Product from './Product';

export default class HomePageContainer extends React.Component {
  render() {
    return (
      <div className='col-xs-12 col-md-12 home-container pad0'>
        <h1 className='center col-xs-12 col-md-12 pad0'>Packed with Goodness</h1>
        <img className='separator' src={'../styles/assets/images/mobile/seperator-pink.png'}/>
        <div className='flex'>
        <Product />
        <ProductContent />
        <BookNowHome />
        </div>
      </div>
    )
  }
}

