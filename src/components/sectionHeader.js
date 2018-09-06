import React from 'react';
import '../App.css';

const SectionHeader = (props) => {

  let credit = <div className="image-credit">{props.credit}</div>

  return (

    <header className="sectionComponent"
      style={{
        height: `${ props.height }`
      }}
    >
      <div key={props.name} className="sectionComponentBefore"
        style={{
          position: 'absolute',
          background: `url(${ props.url }) center no-repeat`,
          backgroundSize: 'cover',
          height: `${ props.height }`,
          zIndex: "0"
        }}
      ></div>    
      <h1
        className="has-text-light fluid-h1"
        style={{
          zIndex: "1",
          textAlign: "center"
        }}
      >{ props.sectionName }</h1>
      { credit }
    </header>

  )
}

export default SectionHeader