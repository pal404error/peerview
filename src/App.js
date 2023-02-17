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
import SignIn, { Login_page } from './page/Login_page';


function App() {

  const data = (id) => {

  }
  return (
    <div className="App">
      <BrowserRouter>

{/* <Header title="Todo List" searchBar={true} /> */}

<Routes>
  // eslint-disable-next-line no-sequences
  <Route exact path="/" element={<Head/>} />
  <Route exact path="login" element={<SignIn/>} />
  
</Routes>

<Test/>


</BrowserRouter>
    </div>
  );
}

export default App;
