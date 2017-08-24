import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header col-xs-12 col-md-12'>
        <div className='col-xs-10'></div>
        <div className='col-xs-2' style={{paddingRight: 5}}><i className='fa fa-bars fa-2x pull-right'></i></div>
      </div>
    )
  }
}

