import React from "react";
import ReactDOM from 'react-dom/client';
import styles from './style.module.css';
import asset from './Asset/asset.js';
import LeftImage from "./image.module.js";
import FormTest from "./form.module.js"
import { BrowserRouter } from "react-router-dom";
const MyApp = ()=> {
  return(
    <div className={styles.container}>
          <LeftImage />
        <BrowserRouter><FormTest />  </BrowserRouter> 
    </div>
  )
}
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp/>)

