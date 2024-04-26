import React from "react";
import Brand from './components/brand/Brand';
import NavBar from './components/navbar/NavBar';
import CTA from './components/cta/CTA';
import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from './containers';
import './App.css';
const App=()=>{
    return(
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;