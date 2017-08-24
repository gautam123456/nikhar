import React from 'react';
import Constants from './util/Constants';

export default class ProductContent extends React.Component {
  render() {
    return (
      <div className='productContent'>
        <ul>
          {
            Constants.PRODUCT_CONTENT.map((content, index) => {
              return (
                <li key={index}>
                  <h3>{content.head}</h3>
                  <p>{content.desc}</p>
                </li>
              )
            })
          }
          <li><h3>&amp; more!</h3></li>
        </ul>
      </div>
    )
  }
}

