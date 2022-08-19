import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style/gallery.css";

export default function Gallery(props) {
  return (
    <Carousel width={800} showArrows={true}>
      {props.images.map((image, index) => {
        return (
          <div className="containerImg">
            <img src={image} />
            <p className="legendImg">{index}</p>
          </div>
        );
      })}
    </Carousel>
  );
}
