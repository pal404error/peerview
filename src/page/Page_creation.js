import React, {useEffect} from "react";
import { db } from "../firebase";
import "./createPost.css"
import { set, ref, onValue, onChildAdded, get, child, update } from "firebase/database";
import { useState,useE } from "react";
import {uid} from "uid";
import { storage } from "../firebase";
import { ref as sRef, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth"
import Post from "./Post_page";

function CreatePost()
{

    const auth = getAuth();
    const user = auth.currentUser;

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [url, setUrl] = useState("");
    var rating = 0;

    var u_id;

    if (user !== null) {
        user.providerData.forEach((profile) => {
          u_id = profile.uid;
        });
      }

    const handdleImage = (e) =>
    {
        setImage(e.target.files[0]);     
    };

    if(image!=null){
        document.getElementById("imgBox").style.backgroundImage = "url("+URL.createObjectURL(image)+")";
    }

    const handleTitle = (e) =>
    {
        setTitle(e.target.value);
    };

    const handleCaption = (e) =>
    {
        setCaption(e.target.value);
    };
    

    const writeDatabase = () =>
    {

        const imageRef = sRef(storage, "post/"+u_id+"/"+title+"/pots_image");
        uploadBytes(imageRef, image).then(() => 
        {
            getDownloadURL(imageRef)
        .then((url) =>
        {
            setUrl(url);
        });
        });
        
        const uuid = uid();
        set(ref(db, "post/"+title),
        {
           u_id,
           title,
           caption,
           url,
           rating,
        }); 
    };

    

    return(
        <>
            <div class="background">
                <textarea id ="title" placeholder="Title:" onChange={handleTitle}></textarea>
            <div class="container" id="imgBox">
            <textarea id ="textBox" placeholder="Add caption:" onChange={handleCaption}></textarea>
            <input type="file" name="image" id="file" style={{display:"none"}} onChange={handdleImage}/>
            <label for="file"><img src={require('./css/images/upload.png')} class="upload-icon" ></img></label>
            </div>
            </div>
            <div class="submit">
                <button type="button" class="btn btn-dark" onClick={writeDatabase}>Submit</button>
            </div>
        </>
    )
}

export default CreatePost;