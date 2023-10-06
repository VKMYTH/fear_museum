import React from 'react';
import {Footer, Blog, Impacts, WhatComp, WhatInter, Header, Artifacts} from './containers';
import { Navbar } from './components';
import './App.css';
import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import WhatIslamic from "./containers/whatIslamic/WhatIslamic";
import WhatRomanGreek from "./containers/whatRomanGreek/WhatRomanGreek";
import WhatIndigenous from "./containers/whatIndigenous/WhatIndigenous";
import fear_home from "./assets/fear_home.png";
import snake_fear from "./assets/snake_fear.png";
import death_fear from "./assets/death_fear.png";
import demon_fear from "./assets/demon_fear.png";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
      <div className="gpt3__art-image">
          <img src={death_fear} />
      </div>
    <WhatIslamic />
      <div className="gpt3__art-image">
          <img src={snake_fear} />
      </div>
    <WhatRomanGreek />
      <div className="gpt3__art-image">
          <img src={demon_fear} />
      </div>
    <WhatIndigenous />
      <div id = "timeline">
          <VerticalTimeline>
              {timelineElements.map((element) => {
                  return (
                      <VerticalTimelineElement
                          contentStyle={{ background: 'rgb(173,13,13)' }}
                          key={element.key}
                          dateClassName="date"
                      >
                          <h3 className="vertical-timeline-element-title" style = {{color: "lightred"}}>
                              {element.title}
                          </h3>
                          <h5 className="vertical-timeline-element-subtitle" style = {{color: "lightred"}}>
                              {element.date}
                          </h5>
                          <p id="description">{element.description}</p>
                      </VerticalTimelineElement>
                  );
              })}
          </VerticalTimeline>
      </div>
    <Artifacts/>
    <Footer />
  </div>
);

export default App;
