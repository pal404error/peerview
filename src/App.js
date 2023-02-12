
import './App.css';
import { Head } from './page/Head'
import { Footer } from './page/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import { Test } from './page/Test';
import { NavItem } from 'react-bootstrap';
import { Login_page } from './page/Login_page';


function App() {

  const data = (id) =>{

  }
  return (
    <div className="App">
      <BrowserRouter>

{/* <Header title="Todo List" searchBar={true} /> */}
<Head />
<Routes>
  {/* <Route exact path="/" element={<Shows />} />
  <Route exact path="about" element={<ShowAbout/>} /> */}

</Routes>
<Footer />
<Test/>
<Login_page/>

</BrowserRouter>
    </div>
  );
}

export default App;
