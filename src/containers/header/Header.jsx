import React from "react";
import './header.css';
import people from '../../assets/Group 81.png'
import ai from '../../assets/Illustration.png'
const Header = () => {
    return (
        <div className="gpt3__header section-padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT3 OpenAI
                </h1>
                <p>
                    GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language model developed
                    by OpenAI that uses deep learning to generate human-like text.
                    It has 175 billion parameters, making it one of the largest language models ever created.
                    GPT-3 is capable of a wide range of tasks, including text completion, translation,
                    question answering, and even creative writing, all with minimal task-specific fine-tuning.
                    Its versatility has led to numerous applications across industries, from customer service to content creation.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header;