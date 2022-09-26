import React from 'react';
import PropTypes from "prop-types";

const HeroLight = ({isReverse, mainTitle, primTitle, desc, img }) => {
  return (
    <div className={isReverse? 'hero-light hero-light--re': 'hero-light'}>
        <div className='hero-light__group-text'>
            <span className='hero-light__main-title'>{mainTitle}</span>
            <p className='hero-light__primary-title'>{primTitle}</p>
            <p className='hero-light__desc'>{desc}</p>
        </div>
        <img className='hero-light__img' src={img} />
    </div>
  )
}
HeroLight.propTypes = {
  isReverse: PropTypes.bool, 
  mainTitle: PropTypes.string, 
  primTitle: PropTypes.string, 
  desc: PropTypes.string, 
  img: PropTypes.string
}
HeroLight.defaultProps = {
  isReverse: false, 
  mainTitle: "", 
  primTitle: "", 
  desc: "", 
  img: ""
}
export default HeroLight