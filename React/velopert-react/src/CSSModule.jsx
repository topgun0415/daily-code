/** @format */

import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    // gobal로 선언되어진게 아니면 styles.클래스이름 으로 선언
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      こんにちは、私は<span className='something'>CSS Module</span>です。
    </div>
  );
};

export default CSSModule;
