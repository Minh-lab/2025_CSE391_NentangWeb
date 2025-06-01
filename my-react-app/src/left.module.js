import React from 'react';
import leftImage from './Asset/leftImage.png'; // import ảnh đúng đường dẫn
import styles from '../src/style.module.css'; // import CSS module nếu cần

function LeftImage() {
  return (
<div className = {styles.leftForm}>
      <img
        className= {styles.leftImage} // gán class CSS nếu bạn có định nghĩa trong style.module.css
        src={leftImage} // đường dẫn ảnh đúng
        alt="Left"
      />
</div>
  );
}

export default LeftImage;
