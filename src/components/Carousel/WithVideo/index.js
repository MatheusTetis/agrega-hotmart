import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import VideoCard from "./components/VideoCard";
import { VideoCardGroupContainer, Title, ExtraLink } from './styles'
import './SliderItem.module.css';

const responsive = {
  doesntmatter: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

function CarrosselComVideo ({ ignoreFirstVideo, category }) {

  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

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
      <Carousel swipeable={false} draggable={false} responsive={responsive}>
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