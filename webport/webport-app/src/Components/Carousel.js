import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import code from '../Assets/images/code1.jpg';
import life from '../Assets/images/mylife.jpg';
import '../Assets/css/styles.css';

const items = [
  {
    src: code,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: life,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
  
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem className="img-responsive"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
      
          <img src={item.src} alt={item.altText} />
          
          <CarouselCaption   captionText={item.caption} captionHeader={item.caption}>
          </CarouselCaption>

        </CarouselItem>
      );
    });
   


    return (
      <Carousel

      activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}

        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Slider;