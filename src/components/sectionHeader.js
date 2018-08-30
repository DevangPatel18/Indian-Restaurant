import React from 'react';
import '../App.css';

const SectionHeader = (props) => {

  let credit = <div className="image-credit">{props.credit}</div>

  return (

    <header className="sectionComponent centercontent">
      <div key={props.name} className="sectionComponentBefore"
        style={{
          background: `url(${ props.url }) center no-repeat`,
          backgroundSize: 'cover',
          height: `${ props.height}`
        }}
      ></div>    
      <h1
        className="has-text-light"
        style={{
          position: 'absolute',
          top: '35%'
        }}
      >{ props.sectionName }</h1>
      { credit }
    </header>

  )
}

export default SectionHeader