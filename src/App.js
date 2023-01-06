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
import { Homepage } from './page/Homepage';
import { Landing } from './page/Landing';


function App() {

  const data = (id) => {

  }
  return (
    <div className="App">
      <BrowserRouter>

        {/* <Header title="Todo List" searchBar={true} /> */}
        <Head />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="landing" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
