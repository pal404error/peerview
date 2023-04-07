import React, { Component } from "react";
import Card from "./Cards";
import { set, ref, onValue, onChildAdded, get, child, update } from "firebase/database";
import {db} from "../firebase"
import { useState, useEffect } from 'react';
import Post from "./Post_page";
import { useRoutes } from "react-router-dom";
import PostTemplate from "./Post_template";


function Feed()
{
        const [post, setPost] = useState([]);
        useEffect(() => {
          const starCountRef = ref(db);
          get(child(starCountRef, "post")).then((snapshot) => {
            if (snapshot.exists()) {
              const users = [];
              snapshot.forEach((childSnapshot) => {
                users.push(childSnapshot.val()); 
              });
              setPost(users);  
            } else {
              console.log("post");
            }
          }).catch((error) => {
            console.error(error);
          });
        }, []);
          console.log(post);   
          
        return(
            <>
            

            <ul>
            {post.map((title, index) => (
              <>
              <PostTemplate key={index} user={title}/>
              </>
            ))}
            </ul>
            </>
        )
}
export default Feed;