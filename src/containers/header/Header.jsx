import React from 'react';
import fear_home from '../../assets/fear_home.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Museum of Fear: Art Gallery and Rationale</h1>
      <p>This website is dedicated to unwrapping the appeal of fear in 3 key pieces of art, as seen in the art gallery, and a rationale outlining the techniques used in each piece of art. Take a look at we have have below.</p>

      <div className="gpt3__header-content__input">
        <button type="button">Get Started Below</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={fear_home} />
    </div>
  </div>
);

export default Header;
