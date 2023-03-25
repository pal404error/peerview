import React, { useEffect } from "react";
import { db } from "../firebase";
import { set, ref, onValue, onChildAdded } from "firebase/database";
import { useState,useE } from "react";
import {uid} from "uid";
import { storage } from "../firebase";
import { ref as sRef, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

function Post()
{
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [getdata, setdata] = useState([]);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleName = (e) =>
    {
        setName(e.target.value);
    };

    const handleAddress = (e) =>
    {
        setAddress(e.target.value);
    };

    const handdleImage = (e) =>
    {
        setImage(e.target.files[0]);
    };

    //write
    const writeDatabase = () =>
    {

        const imageRef = sRef(storage, "image/jayur");
        uploadBytes(imageRef, image);

        getDownloadURL(imageRef)
        .then((url) =>
        {
            setUrl(url);
        });

        var  a = "JJ is here";
        const uuid = uid();
        set(ref(db, name +'/'+ a),
        {
            name,
            address,
            url,
            uuid,
        });
        setName("");
        setAddress("");  
    };

    
    return(
        <>
            <img src="" id="postImage"></img>
            <input type="text" value={name} onChange={handleName}/>
            <input type="text" value={address} onChange={handleAddress}/>
            <input type="file" onChange={handdleImage}/>
            <button type="submit" onClick={writeDatabase}>submit</button>
            <br></br>
            
        </>
    )
}
export default Post;