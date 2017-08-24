import React from 'react';
import Header from '../components/Header';
import MainImage from '../components/MainImage';
import Footer from '../components/Footer';
import HomePageContainer from '../components/HomePageContainer';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainImage />
        <HomePageContainer />
        <Footer />
      </div>
    )
  }
}

