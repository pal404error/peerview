import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import LogOut, { Test } from "./page/Test";
import { AuthContextProvider } from "./context/AuthContext";
import Private from "./comp/Private";
import {Landing} from './Landing';
import { NavItem } from "react-bootstrap";
import SignIn, { Login_page } from "./page/Login_page";
import Post, { Post_page } from "./page/Post_page";
import CreatePost from "./page/Page_creation";;



function App() {
  const data = (id) => {};
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header title="Todo List" searchBar={true} /> */}

        <AuthContextProvider>
          <Routes>
            <Route exact path="/land" element={<Landing />} />
            <Route exact path="login" element={<SignIn />} />
            <Route exact path="New_Post" element={<Post />} />
            <Route
              exact
              path="Homepage"
              element={
                <Private>
                  <LogOut />
                </Private>
              }
            />
            <Route
              exact
              path="post_creation"
              element={
                <Private>
                  <CreatePost />
                </Private>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
