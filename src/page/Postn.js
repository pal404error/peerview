import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { fdb } from '../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[1000px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`,
  };

export const Postn = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, "images/");
    // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };
  
    // useEffect(() => {
    //   listAll(imagesListRef).then((response) => {
    //     response.items.forEach((item) => {
    //       getDownloadURL(item).then((url) => {
    //         setImageUrls((prev) => [...prev, url]);
    //       });
    //     });
    //   });
    // }, []);
  
    // imageUrls.map((url) => {url});
    // Create todo
    // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const createTodo = async (e) => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
      e.preventDefault(e);
      if (input === '') {
        alert('Please enter a valid todo');
        return;
      }
      await addDoc(collection(fdb, 'todos'), {
        text: input,
        // img: imageRef,
        completed: false,
      });
      setInput('');
    };
  
    // Read todo from firebase
    useEffect(() => {
      const q = query(collection(fdb, 'todos'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todosArr);
      });
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
      return () => unsubscribe();
    }, []);
  
    // Update todo in firebase
    const toggleComplete = async (todo) => {
      await updateDoc(doc(fdb, 'todos', todo.id), {
        completed: !todo.completed,
      });
    };
  
    // Delete todo
    const deleteTodo = async (id) => {
      await deleteDoc(doc(fdb, 'todos', id));
    };
  
  return (
    <div className={style.bg}>
    <div className={style.container}>
      <h3 className={style.heading}>Create Post</h3>
      <form onSubmit={createTodo } className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Add Todo'
        />
         <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
        <button className={style.button}>
          <AiOutlinePlus size={30} />
        </button>
      </form>
{/*       
      <button onClick={createTodo}> Upload Image</button> */}
      <ul>
        {todos.map((todo, index) => (
          <>
          
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
          </>
        ))}

      </ul>
      <ul>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      </ul>
      {todos.length < 1 ? null : (
        <p className={style.count}>{`You have ${todos.length} todos`}</p>
      )}
    </div>
  </div>
  )
}
export default Postn;