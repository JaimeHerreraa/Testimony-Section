import React from "react";
import "../stylesheets/Testimony.css";

// Object destructuring to pass 
const Testimony = ({name, company, country, description, job})=> {
  debugger;
  return (
    <div className="testimony-container">
      <img alt="person" className="testimony-image" src={`/images/${name.toLowerCase()}.png`}/>

      <div className="testimony-text">
        <p className="testimony-name"><b>{name}</b> in <b>{country}</b></p>
        <p className="testimony-job"><b>{job}</b> at <b>{company}</b></p>
        <p className="testimony-description">{description}</p>
      </div>
    </div>
  )
}

export default Testimony;