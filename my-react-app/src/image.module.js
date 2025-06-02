import React from 'react';
import leftImage from './Asset/leftImage.png'; 
import styles from '../src/style.module.css'; 

function LeftImage() {
  return (
<div className = {styles.leftForm}>
      <img
        className= {styles.leftImage} 
        src={leftImage} 
        alt="Left"
      />
</div>
  );
}

export default LeftImage;
