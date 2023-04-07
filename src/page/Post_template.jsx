import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import './Postimg'
import "./feed_css.css";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import { useState } from "react";
import { set, ref, onValue, onChildAdded, get, child, update } from "firebase/database";
import { db } from "../firebase";
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};


const PostTemplate = ({ user, caption, url }) => {

  var old_rate = 0;
  var old_total_rating = 0;

  const [rate, setRate] = useState(0);
  const rStars = [1,2,3,4,5];
  var adding = 1;
  const [current_rating, set_current_rating] = useState(0);

  const starCountRef = ref(db);
  get(child(starCountRef, "post/"+user.title)).then((snapshot) => {
    if (snapshot.exists()) {
      
      var totalRate = snapshot.val().rating;
      var numberRate = snapshot.val().total_rating;

      set_current_rating(totalRate / numberRate);
      console.log(totalRate);
      console.log(numberRate);
      console.log(current_rating);
      } 
    })

  return (
      
      <div className={style.row} id='feed_body'>
        
          <div id="post">
          <p id="userName">
          {user.name}
          </p>
          <br></br>
          <img src={user.url} id='image'/>
          <br></br>

          <div id="rating">
          Total Rating: {current_rating.toFixed(2)}
          </div>
          <Container>
      {rStars.map((item, index) => {
        const givenRating = item;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>

          <input type='submit' id="rating_submit" onClick={() => {
              console.log(rate);
              const starCountRef = ref(db);
              get(child(starCountRef, "post/"+user.title)).then((snapshot) => {
              if (snapshot.exists()) {
                old_rate = snapshot.val().rating;
                
                old_total_rating = snapshot.val().total_rating;
                
                if(old_rate!=null && old_total_rating!=null)
              {
                old_rate = old_rate + rate; 
                old_total_rating=old_total_rating + adding;
                update(ref(db, "post/"+user.title),
              {
                rating: old_rate, 
                
                total_rating: old_total_rating,
              }); }
                } 
              }).catch((error) => {
                console.error(error);
              });

              
          }}/>

          <div id='caption'>
          {user.caption}
          </div>
          <hr></hr>   
          </div>
        
      </div>
  );
};

export default PostTemplate;
