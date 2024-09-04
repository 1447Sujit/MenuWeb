import "./App.css";

import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { useContext , useEffect } from "react";
import { AppContext } from "./Context/AppContext";


function App() {
 
    const { loading , setLoading } = useContext(AppContext);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      
      {/* NAV BAR */}
      <div className="navbar">
        <nav>
          <h1>Our Menu</h1>
          <br />
          <hr />
        </nav>
      </div>

      {/* Filter section */}
      <div>
        <Filter></Filter>
      </div>

      {/* Cards */}
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Cards></Cards>
        )}
      </div>
    </div>
  );
}

export default App;
