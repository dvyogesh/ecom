import React from 'react';
import GridCarousel from '@yoge-shource/grid-carousel-react';
import styled from 'styled-components';
const StyledItem = styled.div`
    width: 98%;
    border: 1px solid #ccc;
    margin: 0 auto;
    img{
      width: 100%;
    }
`;
const Item = ({item}) => (
  <StyledItem>
    <img src={item.img} />
  </StyledItem>
)
const carouselData = [
  {
    name: 'item1',
    img: 'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Website15.jpg'

  },
  {
    name: 'item1',
    img: 'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Online-Consultation.jpg'
  },
  {
    name: 'item1',
    img: 'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/banner-5.png'
  },
  {
    name: 'item1',
    img: 'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Website15.jpg'
  },
  {
    name: 'item1',
    img: 'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Online-Consultation.jpg'
  }
]
const CustomGridCarousel = () => {
  return (
    <GridCarousel 
        customScrollbar={false}
        dots={true}
        carouselData={carouselData}
        itemComponent={Item}
        numberOfCardsToShow={1}
        numberOfItemToScroll={1}

    />
  )
}

export default CustomGridCarousel;