import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import './carusel.css'; 
import mashina1 from '../../photos/mashina1.webp';
import mashina2 from '../../photos/OIP.webp';
import mashina3 from '../../photos/lamborgini.webp';
import mashina4 from '../../photos/mashina1.webp';


const Carusel = () => {
  const [dotPosition, setDotPosition] = useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <div className="carusel-container">
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>

      <Carousel dotPosition={dotPosition} className="custom-carousel">
        <div className="carousel-slide">
          <img className='carusel_img' src={mashina1} alt="Mashina 1" />
        </div>
        <div className="carousel-slide">
          <img className='carusel_img' src={mashina2} alt="Mashina 2" />
        </div>
        <div className="carousel-slide">
          <img className='carusel_img' src={mashina3} alt="Mashina 3" />
        </div>
        <div className="carousel-slide">
          <img className='carusel_img' src={mashina4} alt="Mashina 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carusel;
