import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/Item/Item";
import { Nav } from "react-bootstrap";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div>
     
      
     <BrowserRouter>
     <NavBar/>
        <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:id" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              
              
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;