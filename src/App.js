// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Carousel} from "./Carousel"
// import { useState } from "react";
import img1 from "./images/first.jpeg"
import img2 from "./images/second.jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };  

  return (
    <div className="App">
      <h1>sita ram</h1>
      <Carousel responsive={responsive}>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
      <div className='card'>
        <img src='./images/first.png' alt='lehanga'/>
      </div>
    </Carousel>
    </div>
  );
}

export default App;
