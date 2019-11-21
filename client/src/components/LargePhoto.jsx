import React from 'react';
import Header from './Header.jsx';
import ParallaxImage from './parallaxImage/ParallaxImage.jsx';
import styles from '../styles/LargePhoto.css';

const LargePhoto = (props) => {

  let svgImage = <svg className={styles.logo} width="694" height="74" viewBox="0 0 694 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.171875" y="0.96875" width="694" height="74" fill="black">
  <rect fill="white" x="0.171875" y="0.96875" width="694" height="74"/>
  <path d="M14.1719 71H5.17188L33.625 3.96875H43.2344L71.8281 71H62.2188L53.5469 49.9062H31.375L33.7656 42.875H50.6406L38.125 12.5L14.1719 71Z"/>
  <path d="M80.9688 71V3.96875H91.9844L116.594 59.8906L140.734 3.96875H151.281V71H143.547V16.0156L119.734 71H112.891L88.7031 16.0156V71H80.9688Z"/>
  <path d="M169.422 71H160.422L188.875 3.96875H198.484L227.078 71H217.469L208.797 49.9062H186.625L189.016 42.875H205.891L193.375 12.5L169.422 71Z"/>
  <path d="M236.219 71V3.96875H264.812C277.562 3.96875 283.938 9.32812 283.938 20.0469C283.938 28.7656 277.703 35.2188 265.234 39.4062L288.25 71H276.812L255.484 40.8594V35.1875C268.297 33.1562 274.703 28.2344 274.703 20.4219C274.703 14.2344 271.141 11.1406 264.016 11.1406H244.891V71H236.219Z"/>
  <path d="M380.734 3.96875L352.281 71H342.672L314.078 3.96875H323.219L347.781 62L371.734 3.96875H380.734Z"/>
  <path d="M392.078 71H383.078L411.531 3.96875H421.141L449.734 71H440.125L431.453 49.9062H409.281L411.672 42.875H428.547L416.031 12.5L392.078 71Z"/>
  <path d="M483.25 63.9688C499.656 63.9688 507.859 54.5312 507.859 35.6562C507.859 19.2188 499.656 11 483.25 11H467.547V63.9688H483.25ZM458.875 71V3.96875H483.25C505.438 3.96875 516.531 14.5312 516.531 35.6562C516.531 59.2188 505.438 71 483.25 71H458.875Z"/>
  <path d="M529.188 71V3.96875H537.859V33.5H577.469V3.96875H586.141V71H577.469V40.5312H537.859V71H529.188Z"/>
  <path d="M612.203 3.96875V71H603.531V3.96875H612.203Z"/>
  <path d="M631.797 71H622.797L651.25 3.96875H660.859L689.453 71H679.844L671.172 49.9062H649L651.391 42.875H668.266L655.75 12.5L631.797 71Z"/>
  </mask>
  <path d="M14.1719 71H5.17188L33.625 3.96875H43.2344L71.8281 71H62.2188L53.5469 49.9062H31.375L33.7656 42.875H50.6406L38.125 12.5L14.1719 71Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M80.9688 71V3.96875H91.9844L116.594 59.8906L140.734 3.96875H151.281V71H143.547V16.0156L119.734 71H112.891L88.7031 16.0156V71H80.9688Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M169.422 71H160.422L188.875 3.96875H198.484L227.078 71H217.469L208.797 49.9062H186.625L189.016 42.875H205.891L193.375 12.5L169.422 71Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M236.219 71V3.96875H264.812C277.562 3.96875 283.938 9.32812 283.938 20.0469C283.938 28.7656 277.703 35.2188 265.234 39.4062L288.25 71H276.812L255.484 40.8594V35.1875C268.297 33.1562 274.703 28.2344 274.703 20.4219C274.703 14.2344 271.141 11.1406 264.016 11.1406H244.891V71H236.219Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M380.734 3.96875L352.281 71H342.672L314.078 3.96875H323.219L347.781 62L371.734 3.96875H380.734Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M392.078 71H383.078L411.531 3.96875H421.141L449.734 71H440.125L431.453 49.9062H409.281L411.672 42.875H428.547L416.031 12.5L392.078 71Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M483.25 63.9688C499.656 63.9688 507.859 54.5312 507.859 35.6562C507.859 19.2188 499.656 11 483.25 11H467.547V63.9688H483.25ZM458.875 71V3.96875H483.25C505.438 3.96875 516.531 14.5312 516.531 35.6562C516.531 59.2188 505.438 71 483.25 71H458.875Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M529.188 71V3.96875H537.859V33.5H577.469V3.96875H586.141V71H577.469V40.5312H537.859V71H529.188Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M612.203 3.96875V71H603.531V3.96875H612.203Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  <path d="M631.797 71H622.797L651.25 3.96875H660.859L689.453 71H679.844L671.172 49.9062H649L651.391 42.875H668.266L655.75 12.5L631.797 71Z" stroke="white" strokeWidth="6" mask="url(#path-1-outside-1)"/>
  </svg>
  
  return(
    <div>
      <div className={styles.mainBackgroundImage}>
        <div>
          {svgImage}
        </div>
      </div>
      <ParallaxImage />
      <Header />
    </div>
  )
}

export default LargePhoto;