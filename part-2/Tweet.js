function Tweet(props) {
    return (
      <div>
        <p>Username: {props.username}<br/>
        Name: {props.name}<br/>
        Date: {props.date}</p>
        <p>{props.message}</p>
      </div>
    );
}