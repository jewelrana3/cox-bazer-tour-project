
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import bg1 from './assets/Rectangle1.png'
import bg2 from './assets/Sajek.png'
import './App.css'


const App = () => {
  return (
    <div>
      <div className='image d-flex ' style={{ backgroundImage: `url(${bg1})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='text'>
          <h1 className='w-20 h-10'>Cox's bazar</h1>
          <p>Cox's Bazar is a city, fishing port, tourism centre and </p>
          <p>district headquarters in southeastern Bangladesh. It is</p>
          <p> famous mostly for its long natural sandy beach, and it ...</p>
        </div>
        <div className=''>
          <AwesomeSlider>
            {/* <SwiperSlide style={{ backgroundImage: `url(${bg2})` }} >Slide 1</SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${sreemongol})` }} >Slide 2</SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${sundorbon})` }} >Slide 3</SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${sajek})` }} >Slide 4</SwiperSlide> */}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default App;