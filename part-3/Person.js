function Person(props) {
  const { name, age, hobbies } = props;
    return (
      <div>
        <p>Learn some information about this person</p>
        <p>Name: {name.slice(0, 6)}</p>
        <p>Age: {age}</p>
        <h3>{age >= 18 ? "please go vote!" : "you must be 18 to vote"}</h3>
        <ul>Hobbies:
          {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
      </div>
    );
}