import React, {useEffect, useState} from "react";
import "./login_style.css";
import { auth, provider } from "../firebase";
import {signInWithPopup} from "firebase/auth";
import App, { Post } from "./Post.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignIn(){
  
      const [value, setValue] = useState('')
      const handleClick =()=>{
        signInWithPopup(auth, provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
        })
      }

      useEffect(()=>{
        setValue(localStorage.getItem('email'))
      })
  

    return (
        <>
        <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  {value?<Post/>:
                  <button type="button" className="btn btn-primary btn-floating mx-1" onClick={handleClick}>Google
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </button>}
      
                  <button type="button" className="btn btn-primary btn-floating mx-1">Facebook
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                  </button>
      
                  <button type="button" className="btn btn-primary btn-floating mx-1">GitHub
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </button>

                </div>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
      
                
        <div
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
          </div>
          
      
          
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
          
            <a href="#!" className="text-white me-4">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        </form>
        </div>
        </div>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </>
    )
  }
  export default SignIn;