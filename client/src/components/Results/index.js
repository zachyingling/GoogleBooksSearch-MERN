import React from "react";
import ViewButton from "../ViewButton/index";
import SaveButton from "../SaveButton/index";
import "./style.css";

function Results(props) {
  return (
  <div className="h-100 container" id="resultContainer">
    <h1 className="textBook">{props.bookName}</h1>
    <div className="container" id="buttonContainer">
      <ViewButton href={props.viewBtn} />
      <SaveButton id={props.saveBtn} />
    </div>
    <h2>{props.bookAuthor}</h2>
    <img src={props.image} id="bookImage" alt="bookcover" />
    <p className="textBook" id="bio">{props.bookBio}</p>
    <br id="clear" />
  </div>);
};


export default Results;