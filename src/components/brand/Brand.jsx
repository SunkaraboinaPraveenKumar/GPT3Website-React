import React from "react";
import './brand.css';
import { google,slack,atlassain,dropbox,shopify } from "./imports";
const Brand=()=>{
    return(
        <div className="gpt3__brand section__padding">
           <div>
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={atlassain} alt="atlassian" />
            <img src={dropbox} alt="dropbox" />
            <img src={shopify} alt="shopify" />
           </div>
        </div>
    )
}
export default Brand;