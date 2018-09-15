import React from 'react';
import { css } from 'react-emotion';
import '../App.css';

const SectionHeader = (props) => {

  const mediaQ = props.images ? props.images.map(
    links => `@media (min-width: ${links.width}px){
      background: url("${links.url}") center no-repeat;
      background-size: cover;
    };`
  ) : "background-image: linear-gradient(to bottom, #ffffff, #c2beca, #8a8095, #594662, #2c1132);"

  const bgstyle = css`
    position: absolute;
    z-index: 0;
    content: "";
    display: block;
    width: 100%;
    filter: brightness(.5);

    ${mediaQ}`

  let credit = <div className="image-credit">{props.credit}</div>

  return (
    <header className="sectionComponent"
      style={{
        height: `${ props.height }`
      }}
    >
      <div
        className={bgstyle}
        style={{
          height: `${ props.height }`,
        }}
      ></div>
      <h1
        className="has-text-light fluid-h1"
        style={{
          zIndex: "1",
          textAlign: "center"
        }}
        data-aos="fade-down"
        data-aos-duration="1500"
      >{ props.sectionName }</h1>
      { credit }
    </header>
  )
}

export default SectionHeader