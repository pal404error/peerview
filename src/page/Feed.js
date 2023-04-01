import React, { Component } from "react";
import Card from "./Cards";
import { set, ref, onValue, onChildAdded, get, child, update } from "firebase/database";
import {db} from "../firebase"
import { useState, useEffect } from 'react';
import Post from "./Post_page";

function Feed()
{
        const [post, setPost] = useState([]);
        let users = [];
        var title = [];
        const starCountRef = ref(db);
        get(child(starCountRef, "post")).then((snapshot) => {
            if (snapshot.exists()) {
              snapshot.forEach(
                function(childSnapshot){
                    users.push(childSnapshot.val()); 
                } 
              )
              setPost(users);
            } else {
              console.log("post");
            }
          }).catch((error) => {
            console.error(error);
          });         
          
          console.log(typeof post);

        return(
            <>
            <h2 id="h2">jayur</h2>
            <Card url="/jayur/" ccaption="jayur" name="jayur"/>
            
            </>
        )
}
export default Feed;