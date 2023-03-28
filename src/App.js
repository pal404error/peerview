import './App.css';
import { Head } from './page/Head'
import { Footer } from './page/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import LogOut, { Test } from './page/Test';
import { NavItem } from 'react-bootstrap';
import SignIn, { Login_page } from './page/Login_page';
import Post, {Post_page} from './page/Post_page';
import CreatePost from './page/Page_creation';
import ProfileLanding from './page/Profile_landing';


function App() {

  const data = (id) => {

  }
  return (
    <div className="App">
      <BrowserRouter>

{/* <Header title="Todo List" searchBar={true} /> */}


<Routes>
 
  <Route exact path="/" element={<LogOut/>} />
  <Route exact path="Login_page" element={<SignIn/>} />
  <Route exact path="New_Post" element={<Post/>}/>
  <Route exact path="Homepage" element={<LogOut/>}/>
  <Route exact path="post_creation" element={<CreatePost/>}/>
  <Route exact path="Profile_landing" element={<ProfileLanding/>}/>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
