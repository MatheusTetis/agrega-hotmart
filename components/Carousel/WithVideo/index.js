import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import VideoCard from "./components/VideoCard";
import { VideoCardGroupContainer, Title, ExtraLink } from './styles'
import './SliderItem.module.css';


function CarrosselComVideo ({ ignoreFirstVideo, category }) {

  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section>
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink &&
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          }
        </>
      )}
      <Carousel
        customRightArrow={<CustomRightArrow />}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        //ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          return (
            <VideoCard
              videoTitle={video.titulo}
              videoURL={video.url}
              categoryColor={categoryColor}
            />
          );
        })}
      </Carousel>
    </VideoCardGroupContainer>
  </section>
  );
}

export default CarrosselComVideo;