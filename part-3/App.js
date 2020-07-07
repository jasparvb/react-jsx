function App() {
    return (
      <div>
        <Person 
          name="Lionel Messi" 
          age={18} 
          hobbies={["Running" , "Soccer", "Climbing"]}
        />
        <Person 
          name="Ansufati" 
          age={16} 
          hobbies={["Reading" , "Soccer", "Traveling"]}
        />
        <Person 
          name="Suarez" 
          age={32} 
          hobbies={["Biking" , "Soccer", "Video Games"]}
        />
      </div>
    );
}