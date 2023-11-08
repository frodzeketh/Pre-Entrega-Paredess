import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Que viva el padel"/>
      
    </div>
  );
}

export default App;


