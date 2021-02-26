import React from "react";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
    </>
    
    <div className="App">
    <div className= "App">
      <form>
        <label>User
         <input type="text" />
        </label>

        <label>Red
       <input type="radio" />
        </label>

        <label>Blue 
          <input type="radio"/>
        </label>
        <label>
          <input type="checkbox"/>
        </label>
        <label> Language
          <select>
           <option>JavaScript</option>
           <option>Python</option>
           <option>Java</option>
          </select>
        </label>
      </form>
    </div>
   </div>
  );
};
export default App;
