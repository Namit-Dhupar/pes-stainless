import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import FullWidth from "./FullWidth";

const Photo = styled.img`
  width: ${(props) => props.scale * 300}px;
  height: ${(props) => props.scale * 150}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
  '/Images/Clients/Atlas-1.png',
  '/Images/Clients/Bovis.jpeg',
  '/Images/Clients/CocaCola.jpeg',
  '/Images/Clients/dalmia.jpg',
  '/Images/Clients/dmslogo.png',
  '/Images/Clients/gsk.jpg',
  '/Images/Clients/hulogo.png',
  '/Images/Clients/jaipuria.jpg',
  '/Images/Clients/kalyani.png',
  '/Images/Clients/laval.jpeg',
  '/Images/Clients/militaryfarmlogo.png',
  '/Images/Clients/milkfoodlogo.jpg',
  '/Images/Clients/mother-dairy.png',
  '/Images/Clients/NDSLogo.png',
  '/Images/Clients/Nestle.jpeg',
  '/Images/Clients/Osram.jpg',
  '/Images/Clients/Pepsi.jpeg',
  '/Images/Clients/laval.jpeg',
  '/Images/Clients/Perfetti.jpeg',
  '/Images/Clients/rochee.png',
  '/Images/Clients/singha.png',
  '/Images/Clients/skblogo.png',
  '/Images/Clients/subros.jpg',
  '/Images/Clients/sunsiplogo.png',
  '/Images/Clients/tetra.png',
  '/Images/Clients/walls.jpg',
  '/Images/Clients/york.webp',
  '/Images/Clients/yuksum.png'
];

const People = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={35}>
          {times(14, Number).map((id) => (
            <Photo src={photos[id]} alt="" key={`marquee-example-people-${id}`} scale={scale} />
          ))}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />

      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(15, Number).map((id) => (
            <Photo
              src={photos[id + 10]}
              alt=""
              key={`marquee-example-people-${id + 10}`}
              offset="true"
              scale={scale}
            />
          ))}
        </Marquee>
      </div>
    </FullWidth>
  );
};

export default withSize()(People);