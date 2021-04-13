import React from 'react';
import ReactDOM from 'react-dom';
import ImageStepper from './ImageStepper';

let contentArr = [
	{id: 1, img: 'Image-1', content: 'this is content for ist'},
	{id: 2, img: 'Image-2', content: 'this is content for second'},
	{id: 3, img: 'Image-3', content: 'this is content for third'},
]

ReactDOM.render(
  <React.StrictMode>
    <ImageStepper content={contentArr} timer={5000} />
  </React.StrictMode>,
  document.getElementById('root')
);