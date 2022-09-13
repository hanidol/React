import React from "react";
const Profile = (props) => {
  const handleClick = () => {
    props.handleName(props.title);
  };
  return (
    <>
      <div className="cards">
        <h2> {props.title} </h2>
        {props.children}
        <h1> Caractersique </h1>
        <p>{props.proffes}</p>
        <h1> Family </h1>
        <p> {props.family} </p>
        <button onClick={handleClick}>{props.btn}</button>
        <hr />
      </div>
    </>
  );
};
export default Profile;
