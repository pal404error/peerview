import React from 'react'
import SignIn, { Login_page } from './Login_page'
import { browserHistory, Router, Route, Routes } from 'react-router';
import {useNavigate, Link} from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";


function LogOut() {
  const navigate = useNavigate();
  const handleClickLogout =()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.clear()
      navigate("/Login_page")
    }).catch((error) => {
      
    });
  }

  const auth = getAuth();
  const user = auth.currentUser;
  var u_id;
  var email;
  var name;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      u_id = profile.uid;
    });
  }

  const gotoCreatePost =()=>
  {
    navigate("/Post_creation")
  }

    return (
      <>
      <Routes>
            <Route path="/Login_page" element={<SignIn/>}/>
          </Routes>
      <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4"> 
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
    <br></br>
    <button onClick={handleClickLogout}>Logout</button>
    <button onClick={gotoCreatePost}>Create New Post</button>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>

  
</nav>
      <div >Test 30000</div>
      <div> TEst Pal</div>
      <div> Test new</div>
      <div> test 1234567</div>
      <div>jayur here again</div>
      </>
      )
  }
  export default LogOut;