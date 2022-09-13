const Profession = (props) => {
  const handleClick = () => {
    props.handleName(props.title);
  };
  return (
    <>
      {this.state.show && (
        <>
          <div className="cards">
            <h2>{props.title}</h2>
            <h1> Profession </h1>
            <p>{props.proffes}</p>
            <h1> About </h1>
            {props.children}
            <p>{props.about}</p> <hr />
            <button onClick={handleClick}>{props.btn} </button>
            <hr />
          </div>
        </>
      )}
      <button onClick={this.handleShowPerson}>click here</button>
    </>
  );
};
export default Profession;
