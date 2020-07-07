function App() {
    return (
      <div>
        <Tweet 
          username="messi10" 
          name="Messi" 
          date={new Date().toDateString()} 
          message="Que garón que no ganamos la Liga" 
        />
        <Tweet 
          username="cr7" 
          name="Cristiano" 
          date={new Date().toDateString()} 
          message="Mi piace il calcio italiano" 
        />
        <Tweet 
          username="supermario" 
          name="Mario Gomez" 
          date={new Date().toDateString()} 
          message="VfB forever! Furchtlos und treu!" 
        />
      </div>
    );
}