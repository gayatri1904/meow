import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
          <img src="https://ik.imagekit.io/ok2wgebfs/Imperial/WhatsApp_Image_2023-01-15_at_10.48.19_PM.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1674968499323" className='imageDisplay' alt='image1'></img>
          </Carousel.Item>
          <Carousel.Item>
          <img src="https://ik.imagekit.io/ok2wgebfs/Imperial/WhatsApp_Image_2023-01-15_at_10.48.16_PM__1_.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1674398175071" className='imageDisplay' alt='image2'></img>
          </Carousel.Item>
          <Carousel.Item>
          <img src="https://ik.imagekit.io/ok2wgebfs/Imperial/WhatsApp_Image_2023-01-15_at_10.48.16_PM.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1674398175082" className='imageDisplay' alt='image3'></img>
          </Carousel.Item>
          <Carousel.Item>
          <img src="https://ik.imagekit.io/ok2wgebfs/Imperial/WhatsApp_Image_2023-01-15_at_10.48.17_PM.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1674968324539" className='imageDisplay' alt='image1'></img>
          </Carousel.Item>
      </Carousel>
    </>
  )
}
