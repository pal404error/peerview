import React, { useEffect } from "react";
import { db } from "../firebase";
import { set, ref, onValue, onChildAdded, get, child, update } from "firebase/database";
import { useState,useE } from "react";
import {uid} from "uid";
import { storage } from "../firebase";
import { ref as sRef, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth"


function Post()
{
    const auth = getAuth();
    const user = auth.currentUser;

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [coun, setCount] = useState("");
    const [getdata, setdata] = useState([]);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    var email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
          email = profile.uid;
        });
      }

    const handleName = (e) =>
    {
        setName(e.target.value);
    };

    const handdleCounter = (e) =>
    {
        setCount(e.target.value);
    };

    var counter = coun;

    const handleAddress = (e) =>
    {
        setAddress(e.target.value);
    };

    const handdleImage = (e) =>
    {
        setImage(e.target.files[0]);
    };

    var path = email +"/"+ name;

    //write
    const writeDatabase = () =>
    {

        const imageRef = sRef(storage, email+"jayur/images");
        uploadBytes(imageRef, image);

        getDownloadURL(imageRef)
        .then((url) =>
        {
            setUrl(url);
        });

        document.getElementById("img").src=url;
        var  a = "JJ is here";
        const uuid = uid();
        set(ref(db,   email + '/'+ name),
        {
            name,
            address,
            url,
            uuid,
            counter,
        });
        setName("");
        setAddress("");  
    };

    const readDatabase = () => 
    {
        const starCountRef = ref(db);
        get(child(starCountRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val().name);
              counter = snapshot.val().counter;
              counter = counter + coun;
            } else {
              console.log(path);
            }
          }).catch((error) => {
            console.error(error);
          });

    };

    
    return(
        <>
            <img src="" id="img" height="500px" width="500px"></img>
            <input type="text" value={name} onChange={handleName}/>
            <input type="text" value={address} onChange={handleAddress}/>
            <input type="file" onChange={handdleImage}/>
            <input type="number" onChange={handdleCounter}/>
            <button type="submit" onClick={writeDatabase}>submit</button>
            <button type="submit" onClick={readDatabase}>submit</button>
            <br></br>
            
        </>
    )
}
export default Post;