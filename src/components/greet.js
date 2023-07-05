import React from "react";

function greet(props) {
  //Props are values that cannot be changed
  //props.name = "newPerson"
  return (
    <div>
      <h1>
        hello {props.name}, your fav superHero is {props.heroName}
      </h1>
    </div>
  );
}
export default greet;
