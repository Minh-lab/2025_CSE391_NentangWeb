import React from "react";
import ReactDOM from 'react-dom/client';
import styles from './style.module.css';
import asset from './Asset/asset.js';
import LeftImage from "./left.module.js";
import RightContent from "./right.module.js"
import { BrowserRouter } from "react-router-dom";
const MyApp = ()=> {
  return(
    <div className={styles.container}>
          <LeftImage />
        <BrowserRouter><RightContent />  </BrowserRouter> 
    </div>
  )
}
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp/>)

