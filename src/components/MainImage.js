import React from 'react';
import allImages from '../../data/imageContoller.json';
import Carousel from './lib/CarouselSlick';
import $ from 'jquery';

class MainImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: $(window).width()
    }
  }

  render() {
    const height = this.state.screenWidth > 1024 ? 500 : 300;
    return (
      <div className='col-xs-12 col-md-12 mainimg pad0'>
        <Carousel images = {allImages.homeImages} showArrow={false} autoPlay={true} screenWidth={this.state.screenWidth} height={height}/>
      </div>
    )
  }

  updateDimensions() {
    this.setState({screenWidth: $(window).width()});
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
}

export default MainImage;

