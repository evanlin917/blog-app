import {useState} from 'react';

const Home = () => {
  // let name = "Evan";
  const [name, setName] = useState("Evan");
  const [age, setAge] = useState(25);

  const handleClick = () => {
      setName("Evanski");
      setAge(18);
    }
  
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;